# The Velnix — Design System

> This file is the single source of truth for every design token used across the entire website.
> Modifying any value here will automatically update the whole website after reload.

---

## Brand Colors

| Token | Value | Usage |
|---|---|---|
| brand-primary | #B3EFB2 | Primary brand mint green |
| brand-primary-light | #D8FAD7 | Light mint green |
| brand-primary-dark | #7A9E7E | Sage green |
| brand-secondary | #7A9E7E | Muted sage green accent |
| brand-secondary-light | #B3EFB2 | Light mint |
| brand-secondary-dark | #31493C | Dark forest green |

## Accent Colors

| Token | Value | Usage |
|---|---|---|
| accent-violet | #7A9E7E | Sage green highlights |
| accent-indigo | #31493cff | Forest green elements |
| accent-cyan | #B3EFB2 | Mint accents |
| accent-emerald | #B3EFB2 | Success/growth indicators |
| accent-amber | #E8F1F2 | Warning/attention |
| accent-rose | #F43F5E | Error/critical |
| accent-sky | #E8F1F2 | Info/links |

## Background Colors

| Token | Value | Usage |
|---|---|---|
| bg-primary-light | #F4F9F6 | Light mode background |
| bg-secondary-light | #E8F1F2 | Light mode secondary (ice-blue/grey) |
| bg-tertiary-light | #D8E5E7 | Light mode tertiary |
| bg-primary-dark | #001A23 | Dark mode background (Deep Spruce Black) |
| bg-secondary-dark | #05222D | Dark mode secondary |
| bg-tertiary-dark | #0B2A36 | Dark mode tertiary |
| bg-elevated-dark | #123340 | Dark mode elevated surfaces |

## Surface Colors

| Token | Value | Usage |
|---|---|---|
| surface-light | #FFFFFF | Light mode cards |
| surface-light-hover | #E8F1F2 | Light mode card hover |
| surface-dark | #09222C | Dark mode cards |
| surface-dark-hover | #123340 | Dark mode card hover |
| surface-glass-light | rgba(232, 241, 242, 0.7) | Light glass surfaces |
| surface-glass-dark | rgba(0, 26, 35, 0.75) | Dark glass surfaces |

## Text Colors

| Token | Value | Usage |
|---|---|---|
| text-primary-light | #001A23 | Light mode heading text |
| text-secondary-light | #31493C | Light mode body text |
| text-tertiary-light | #7A9E7E | Light mode muted text |
| text-primary-dark | #E8F1F2 | Dark mode heading text |
| text-secondary-dark | #7A9E7E | Dark mode body text |
| text-tertiary-dark | #496956 | Dark mode muted text |

## Border Colors

| Token | Value | Usage |
|---|---|---|
| border-light | #D8E5E7 | Light mode borders |
| border-light-subtle | #E8F1F2 | Light mode subtle borders |
| border-dark | #123340 | Dark mode borders |
| border-dark-subtle | #0B2A36 | Dark mode subtle borders |
| border-accent | rgba(179, 239, 178, 0.2) | Accent borders |

## Shadows

| Token | Value | Usage |
|---|---|---|
| shadow-xs | 0 1px 2px rgba(0, 0, 0, 0.05) | Minimal shadow |
| shadow-sm | 0 2px 8px rgba(0, 0, 0, 0.08) | Small shadow |
| shadow-md | 0 4px 16px rgba(0, 0, 0, 0.1) | Medium shadow |
| shadow-lg | 0 8px 32px rgba(0, 0, 0, 0.12) | Large shadow |
| shadow-xl | 0 16px 48px rgba(0, 0, 0, 0.16) | Extra large shadow |
| shadow-2xl | 0 24px 64px rgba(0, 0, 0, 0.2) | Maximum shadow |
| shadow-glow-brand | 0 0 40px rgba(179, 239, 178, 0.25) | Brand glow |
| shadow-glow-cyan | 0 0 40px rgba(122, 158, 126, 0.25) | Secondary glow |
| shadow-inner | inset 0 2px 4px rgba(0, 0, 0, 0.06) | Inner shadow |

## Glass Effects

| Token | Value | Usage |
|---|---|---|
| glass-blur | 16px | Standard glass blur |
| glass-blur-lg | 24px | Large glass blur |
| glass-blur-xl | 40px | Extra large glass blur |
| glass-bg-light | rgba(232, 241, 242, 0.7) | Light glass background |
| glass-bg-dark | rgba(0, 26, 35, 0.75) | Dark glass background |
| glass-border-light | rgba(255, 255, 255, 0.2) | Light glass border |
| glass-border-dark | rgba(255, 255, 255, 0.06) | Dark glass border |
| glass-saturate | 180% | Glass backdrop saturate |

## Border Radius

| Token | Value | Usage |
|---|---|---|
| radius-none | 0px | No rounding |
| radius-sm | 6px | Small elements |
| radius-md | 8px | Default elements |
| radius-lg | 12px | Cards, containers |
| radius-xl | 16px | Large cards |
| radius-2xl | 20px | Hero cards |
| radius-3xl | 24px | Large sections |
| radius-full | 9999px | Pills, circles |

## Font Families

| Token | Value | Usage |
|---|---|---|
| font-heading | 'Inter', system-ui, -apple-system, sans-serif | Headings |
| font-body | 'Inter', system-ui, -apple-system, sans-serif | Body text |
| font-mono | 'JetBrains Mono', 'Fira Code', monospace | Code snippets |

## Font Sizes

| Token | Value | Line Height | Usage |
|---|---|---|---|
| text-xs | 0.75rem | 1rem | Labels |
| text-sm | 0.875rem | 1.25rem | Small text |
| text-base | 1rem | 1.5rem | Body |
| text-lg | 1.125rem | 1.75rem | Large body |
| text-xl | 1.25rem | 1.75rem | Subheadings |
| text-2xl | 1.5rem | 2rem | Section titles |
| text-3xl | 1.875rem | 2.25rem | Page titles |
| text-4xl | 2.25rem | 2.5rem | Large titles |
| text-5xl | 3rem | 1.1 | Display |
| text-6xl | 3.75rem | 1.05 | Hero display |
| text-7xl | 4.5rem | 1 | Hero headline |
| text-8xl | 6rem | 1 | Massive display |

## Font Weights

| Token | Value | Usage |
|---|---|---|
| weight-normal | 400 | Body text |
| weight-medium | 500 | Emphasis |
| weight-semibold | 600 | Subheadings |
| weight-bold | 700 | Headings |
| weight-extrabold | 800 | Display headings |

## Spacing Scale

| Token | Value | Usage |
|---|---|---|
| space-0 | 0px | None |
| space-1 | 4px | Micro spacing |
| space-2 | 8px | Tight spacing |
| space-3 | 12px | Compact spacing |
| space-4 | 16px | Default spacing |
| space-5 | 20px | Comfortable |
| space-6 | 24px | Section inner |
| space-8 | 32px | Component gap |
| space-10 | 40px | Section gap |
| space-12 | 48px | Large gap |
| space-16 | 64px | Section padding |
| space-20 | 80px | Large section padding |
| space-24 | 96px | Hero spacing |
| space-32 | 128px | Maximum spacing |

## Container Widths

| Token | Value | Usage |
|---|---|---|
| container-xs | 480px | Small dialogs |
| container-sm | 640px | Small content |
| container-md | 768px | Medium content |
| container-lg | 1024px | Standard content |
| container-xl | 1200px | Wide content |
| container-2xl | 1400px | Maximum content |

## Grid System

| Token | Value | Usage |
|---|---|---|
| grid-columns | 12 | Standard grid |
| grid-gap | 24px | Standard gap |
| grid-gap-lg | 32px | Large gap |
| grid-gap-xl | 48px | Extra large gap |

## Animation Duration

| Token | Value | Usage |
|---|---|---|
| duration-instant | 100ms | Instant feedback |
| duration-fast | 200ms | Quick transitions |
| duration-normal | 300ms | Standard transitions |
| duration-slow | 500ms | Deliberate transitions |
| duration-slower | 700ms | Dramatic reveals |
| duration-slowest | 1000ms | Full reveals |

## Animation Curves

| Token | Value | Usage |
|---|---|---|
| ease-default | cubic-bezier(0.4, 0, 0.2, 1) | Default easing |
| ease-in | cubic-bezier(0.4, 0, 1, 1) | Enter easing |
| ease-out | cubic-bezier(0, 0, 0.2, 1) | Exit easing |
| ease-in-out | cubic-bezier(0.4, 0, 0.2, 1) | In-out easing |
| ease-spring | cubic-bezier(0.34, 1.56, 0.64, 1) | Bouncy spring |
| ease-smooth | cubic-bezier(0.22, 1, 0.36, 1) | Smooth motion |
| ease-snappy | cubic-bezier(0.16, 1, 0.3, 1) | Snappy motion |

## Hover Effects

| Token | Value | Usage |
|---|---|---|
| hover-scale | 1.02 | Subtle scale up |
| hover-scale-lg | 1.05 | Large scale up |
| hover-lift | translateY(-4px) | Lift effect |
| hover-lift-lg | translateY(-8px) | Large lift effect |
| hover-brightness | 1.05 | Brightness increase |
| hover-glow-opacity | 0.5 | Glow intensity on hover |

## Button Styles

### Primary Button
| Property | Value |
|---|---|
| bg | linear-gradient(135deg, #7A9E7E, #31493C) |
| text | #FFFFFF |
| padding | 12px 28px |
| radius | 10px |
| font-weight | 600 |
| font-size | 0.9375rem |
| shadow | 0 4px 16px rgba(122, 158, 126, 0.3) |
| hover-shadow | 0 8px 32px rgba(122, 158, 126, 0.4) |
| hover-transform | translateY(-2px) |
| transition | all 300ms cubic-bezier(0.22, 1, 0.36, 1) |

### Secondary Button
| Property | Value |
|---|---|
| bg | transparent |
| text-light | #001A23 |
| text-dark | #E8F1F2 |
| border | 1.5px solid #D8E5E7 |
| border-dark | 1.5px solid #123340 |
| padding | 12px 28px |
| radius | 10px |
| font-weight | 600 |
| font-size | 0.9375rem |
| hover-bg-light | #E8F1F2 |
| hover-bg-dark | #0B2A36 |
| transition | all 300ms cubic-bezier(0.22, 1, 0.36, 1) |

### Ghost Button
| Property | Value |
|---|---|
| bg | transparent |
| text-light | #31493C |
| text-dark | #7A9E7E |
| padding | 12px 28px |
| radius | 10px |
| font-weight | 500 |
| hover-bg-light | rgba(0, 0, 0, 0.04) |
| hover-bg-dark | rgba(255, 255, 255, 0.06) |
| transition | all 200ms cubic-bezier(0.22, 1, 0.36, 1) |

## Card Styles

### Default Card
| Property | Value |
|---|---|
| bg-light | #FFFFFF |
| bg-dark | #09222C |
| border-light | 1px solid #D8E5E7 |
| border-dark | 1px solid #123340 |
| radius | 16px |
| padding | 32px |
| shadow-light | 0 2px 8px rgba(0, 0, 0, 0.08) |
| shadow-dark | 0 2px 8px rgba(0, 0, 0, 0.3) |
| hover-shadow-light | 0 8px 32px rgba(0, 0, 0, 0.12) |
| hover-shadow-dark | 0 8px 32px rgba(0, 0, 0, 0.4) |
| hover-transform | translateY(-4px) |
| transition | all 500ms cubic-bezier(0.22, 1, 0.36, 1) |

### Glass Card
| Property | Value |
|---|---|
| bg-light | rgba(232, 241, 242, 0.7) |
| bg-dark | rgba(0, 26, 35, 0.75) |
| border-light | 1px solid rgba(255, 255, 255, 0.2) |
| border-dark | 1px solid rgba(255, 255, 255, 0.06) |
| backdrop-blur | 16px |
| backdrop-saturate | 180% |
| radius | 16px |
| padding | 32px |
| transition | all 500ms cubic-bezier(0.22, 1, 0.36, 1) |

### Feature Card
| Property | Value |
|---|---|
| bg-light | #FFFFFF |
| bg-dark | #09222C |
| border-light | 1px solid #D8E5E7 |
| border-dark | 1px solid #123340 |
| radius | 20px |
| padding | 40px |
| icon-size | 48px |
| icon-bg | linear-gradient(135deg, rgba(179, 239, 178, 0.1), rgba(122, 158, 126, 0.1)) |
| icon-radius | 12px |
| hover-border-color | rgba(179, 239, 178, 0.3) |
| transition | all 500ms cubic-bezier(0.22, 1, 0.36, 1) |

## Navbar Style

| Property | Value |
|---|---|
| height | 72px |
| bg-light | rgba(255, 255, 255, 0.8) |
| bg-dark | rgba(0, 26, 35, 0.85) |
| backdrop-blur | 16px |
| backdrop-saturate | 180% |
| border-bottom-light | 1px solid rgba(216, 229, 231, 0.5) |
| border-bottom-dark | 1px solid rgba(18, 51, 64, 0.5) |
| padding-x | 24px |
| z-index | 1000 |
| position | fixed |
| logo-font-size | 1.25rem |
| logo-font-weight | 700 |
| link-font-size | 0.9375rem |
| link-font-weight | 500 |
| link-gap | 8px |
| transition | all 300ms cubic-bezier(0.22, 1, 0.36, 1) |

## Footer Style

| Property | Value |
|---|---|
| bg-light | #F4F9F6 |
| bg-dark | #001A23 |
| border-top-light | 1px solid #D8E5E7 |
| border-top-dark | 1px solid #123340 |
| padding-y | 112px |
| padding-x | 24px |
| columns | 5 |
| link-color-light | #31493C |
| link-color-dark | #7A9E7E |
| link-hover-color | #B3EFB2 |
| heading-font-size | 0.875rem |
| heading-font-weight | 600 |
| heading-text-transform | uppercase |
| heading-letter-spacing | 0.05em |
| bottom-bar-padding | 32px |

## Section Padding

| Token | Value | Usage |
|---|---|---|
| section-py-sm | 64px | Small sections |
| section-py-md | 112px | Medium sections |
| section-py-lg | 160px | Large sections |
| section-py-xl | 220px | Extra large sections |
| section-px | 24px | Horizontal padding |

## Icon Style

| Token | Value | Usage |
|---|---|---|
| icon-xs | 16px | Small icons |
| icon-sm | 20px | Default icons |
| icon-md | 24px | Medium icons |
| icon-lg | 32px | Large icons |
| icon-xl | 48px | Feature icons |
| icon-stroke | 1.75 | Stroke width |
| icon-color-light | #31493C | Light mode color |
| icon-color-dark | #7A9E7E | Dark mode color |

## Illustration Style

| Token | Value | Usage |
|---|---|---|
| illustration-primary | #B3EFB2 | Primary Mint |
| illustration-secondary | #7A9E7E | Secondary Sage |
| illustration-bg | rgba(179, 239, 178, 0.06) | Background tint |
| illustration-stroke | 1.5 | Stroke width |
| illustration-style | geometric-minimal | Visual style |

## Border Thickness

| Token | Value | Usage |
|---|---|---|
| border-thin | 1px | Default borders |
| border-medium | 1.5px | Emphasized borders |
| border-thick | 2px | Strong borders |
| border-extra | 3px | Decorative borders |

## Gradient Library

| Token | Value | Usage |
|---|---|---|
| gradient-brand | linear-gradient(135deg, #7A9E7E, #31493C) | Brand Sage gradient |
| gradient-brand-vivid | linear-gradient(135deg, #B3EFB2, #7A9E7E) | Vivid Mint Brand |
| gradient-hero | linear-gradient(135deg, #001A23 0%, #31493C 50%, #B3EFB2 100%) | Hero background |
| gradient-mesh | radial-gradient(at 27% 37%, #31493C 0%, transparent 50%), radial-gradient(at 97% 21%, #B3EFB2 0%, transparent 50%), radial-gradient(at 52% 99%, #001A23 0%, transparent 50%) | Mesh gradient |
| gradient-dark-section | linear-gradient(180deg, #001A23 0%, #05222D 100%) | Dark sections |
| gradient-light-section | linear-gradient(180deg, #FFFFFF 0%, #F4F9F6 100%) | Light sections |
| gradient-card-shine | linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 50%) | Card shine |
| gradient-text | linear-gradient(135deg, #B3EFB2, #7A9E7E) | Gradient text |
| gradient-glow | radial-gradient(circle, rgba(179, 239, 178, 0.12) 0%, transparent 70%) | Background glow |
| gradient-border | linear-gradient(135deg, #B3EFB2, #31493C) | Gradient borders |

## Glow Effects

| Token | Value | Usage |
|---|---|---|
| glow-brand | 0 0 60px rgba(179, 239, 178, 0.15) | Brand ambient glow |
| glow-brand-strong | 0 0 100px rgba(179, 239, 178, 0.25) | Strong brand glow |
| glow-cyan | 0 0 60px rgba(122, 158, 126, 0.15) | Sage ambient glow |
| glow-hero | 0 0 200px rgba(179, 239, 178, 0.1) | Hero section glow |

## Blur Values

| Token | Value | Usage |
|---|---|---|
| blur-xs | 4px | Slight blur |
| blur-sm | 8px | Small blur |
| blur-md | 16px | Medium blur |
| blur-lg | 24px | Large blur |
| blur-xl | 40px | Extra large blur |
| blur-2xl | 64px | Maximum blur |

## Theme Tokens — Light Theme

| Token | Value |
|---|---|
| theme-bg | #FFFFFF |
| theme-bg-secondary | #F4F9F6 |
| theme-bg-tertiary | #E8F1F2 |
| theme-surface | #FFFFFF |
| theme-surface-hover | #E8F1F2 |
| theme-text-primary | #001A23 |
| theme-text-secondary | #31493C |
| theme-text-tertiary | #7A9E7E |
| theme-border | #D8E5E7 |
| theme-border-subtle | #E8F1F2 |

## Theme Tokens — Dark Theme

| Token | Value |
|---|---|
| theme-bg | #001A23 |
| theme-bg-secondary | #05222D |
| theme-bg-tertiary | #0B2A36 |
| theme-surface | #09222C |
| theme-surface-hover | #123340 |
| theme-text-primary | #E8F1F2 |
| theme-text-secondary | #7A9E7E |
| theme-text-tertiary | #496956 |
| theme-border | #123340 |
| theme-border-subtle | #0B2A36 |
