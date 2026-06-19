/**
 * Build script: Generates CSS custom properties from design.md
 * Run this before the build or in dev mode to update tokens.
 */

import { generateCSSVariables } from '../lib/design-tokens';
import fs from 'fs';
import path from 'path';

const outputPath = path.join(process.cwd(), 'src', 'styles', 'design-tokens.css');

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const css = generateCSSVariables();
fs.writeFileSync(outputPath, css, 'utf-8');

console.log('✅ Design tokens generated from design.md');
console.log(`📁 Output: ${outputPath}`);
