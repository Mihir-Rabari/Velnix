/**
 * Design Token Parser
 * 
 * Reads design.md at build time and generates CSS custom properties.
 * This ensures the entire website is driven by a single design system file.
 */

import fs from 'fs';
import path from 'path';

interface TokenMap {
  [key: string]: string;
}

interface ParsedDesignSystem {
  tokens: TokenMap;
  lightTheme: TokenMap;
  darkTheme: TokenMap;
}

/**
 * Parse a markdown table and extract token-value pairs.
 * Handles tables with | Token | Value | ... | format
 */
function parseMarkdownTable(content: string, sectionName: string): TokenMap {
  const tokens: TokenMap = {};
  
  // Find the section
  const sectionRegex = new RegExp(`## ${sectionName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}[\\s\\S]*?(?=\\n## |$)`, 'i');
  const sectionMatch = content.match(sectionRegex);
  
  if (!sectionMatch) return tokens;
  
  const sectionContent = sectionMatch[0];
  
  // Find all tables in the section (including sub-tables under ### headings)
  const lines = sectionContent.split('\n');
  let inTable = false;
  let headerParsed = false;
  let tokenColIndex = -1;
  let valueColIndex = -1;
  let prefix = '';
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    // Check for ### subheading to use as prefix
    if (trimmed.startsWith('### ')) {
      prefix = trimmed
        .replace('### ', '')
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^a-z0-9-]/g, '') + '-';
      headerParsed = false;
      inTable = false;
      continue;
    }
    
    // Check for table rows
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const cells = trimmed.split('|').filter(c => c.trim() !== '');
      
      if (!headerParsed) {
        // Parse header row
        const headers = cells.map(c => c.trim().toLowerCase());
        tokenColIndex = headers.findIndex(h => h === 'token' || h === 'property');
        valueColIndex = headers.findIndex(h => h === 'value');
        
        if (tokenColIndex === -1 || valueColIndex === -1) {
          continue;
        }
        
        headerParsed = true;
        inTable = true;
        continue;
      }
      
      // Skip separator row
      if (trimmed.includes('---')) continue;
      
      if (inTable && cells.length > Math.max(tokenColIndex, valueColIndex)) {
        const token = cells[tokenColIndex].trim();
        const value = cells[valueColIndex].trim();
        
        if (token && value && !token.includes('---')) {
          tokens[prefix + token] = value;
        }
      }
    } else if (inTable && trimmed === '') {
      // End of table
      inTable = false;
      headerParsed = false;
    }
  }
  
  return tokens;
}

/**
 * Parse theme-specific tokens from design.md
 */
function parseThemeTokens(content: string, themeName: string): TokenMap {
  const tokens: TokenMap = {};
  
  const sectionRegex = new RegExp(`## Theme Tokens — ${themeName}[\\s\\S]*?(?=\\n## |$)`, 'i');
  const sectionMatch = content.match(sectionRegex);
  
  if (!sectionMatch) return tokens;
  
  const lines = sectionMatch[0].split('\n');
  let headerParsed = false;
  
  for (const line of lines) {
    const trimmed = line.trim();
    
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const cells = trimmed.split('|').filter(c => c.trim() !== '');
      
      if (!headerParsed) {
        headerParsed = true;
        continue;
      }
      
      if (trimmed.includes('---')) continue;
      
      if (cells.length >= 2) {
        const token = cells[0].trim();
        const value = cells[1].trim();
        
        if (token && value && !token.includes('---')) {
          tokens[token] = value;
        }
      }
    }
  }
  
  return tokens;
}

/**
 * Read and parse the design.md file
 */
export function parseDesignSystem(): ParsedDesignSystem {
  const designPath = path.join(process.cwd(), 'design.md');
  const content = fs.readFileSync(designPath, 'utf-8');
  
  const allTokens: TokenMap = {};
  
  // Parse all sections
  const sections = [
    'Brand Colors',
    'Accent Colors',
    'Background Colors',
    'Surface Colors',
    'Text Colors',
    'Border Colors',
    'Shadows',
    'Glass Effects',
    'Border Radius',
    'Font Families',
    'Font Sizes',
    'Font Weights',
    'Spacing Scale',
    'Container Widths',
    'Grid System',
    'Animation Duration',
    'Animation Curves',
    'Hover Effects',
    'Button Styles',
    'Card Styles',
    'Navbar Style',
    'Footer Style',
    'Section Padding',
    'Icon Style',
    'Illustration Style',
    'Border Thickness',
    'Gradient Library',
    'Glow Effects',
    'Blur Values',
  ];
  
  for (const section of sections) {
    const sectionTokens = parseMarkdownTable(content, section);
    Object.assign(allTokens, sectionTokens);
  }
  
  const lightTheme = parseThemeTokens(content, 'Light Theme');
  const darkTheme = parseThemeTokens(content, 'Dark Theme');
  
  return {
    tokens: allTokens,
    lightTheme,
    darkTheme,
  };
}

/**
 * Generate CSS custom properties string from tokens
 */
export function generateCSSVariables(): string {
  const { tokens, lightTheme, darkTheme } = parseDesignSystem();
  
  let css = '/* Auto-generated from design.md — DO NOT EDIT MANUALLY */\n\n';
  
  // Root variables (all tokens)
  css += ':root {\n';
  for (const [key, value] of Object.entries(tokens)) {
    css += `  --${key}: ${value};\n`;
  }
  css += '}\n\n';
  
  // Light theme
  css += ':root, [data-theme="light"] {\n';
  for (const [key, value] of Object.entries(lightTheme)) {
    css += `  --${key}: ${value};\n`;
  }
  css += '}\n\n';
  
  // Dark theme
  css += '[data-theme="dark"], .dark {\n';
  for (const [key, value] of Object.entries(darkTheme)) {
    css += `  --${key}: ${value};\n`;
  }
  css += '}\n\n';
  
  // Prefers dark color scheme
  css += '@media (prefers-color-scheme: dark) {\n';
  css += '  :root:not([data-theme="light"]) {\n';
  for (const [key, value] of Object.entries(darkTheme)) {
    css += `    --${key}: ${value};\n`;
  }
  css += '  }\n';
  css += '}\n';
  
  return css;
}

/**
 * Get design tokens as a JavaScript object for use in components
 */
export function getDesignTokens() {
  return parseDesignSystem();
}
