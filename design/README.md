# XIGO design preset (glassy dark-green UX)

This repo’s minimal “moss green + subtle glass” look is extracted into:

- `design/xigo-theme.css` (tokens + base styles + utilities like `.glass`)

## Reuse in another Next.js project

### 1) Copy the design preset file

Copy:

- `design/xigo-theme.css` → your new project (example: `design/xigo-theme.css`)

### 2) Ensure Tailwind v4 is set up (this project uses it)

Install dev deps:

- `tailwindcss`
- `@tailwindcss/postcss`

Add `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

### 3) Import Tailwind + the preset in your global CSS

In your global CSS (example: `app/globals.css`):

```css
@import "tailwindcss";
@import "../design/xigo-theme.css";
```

Then make sure you import your global CSS from your root layout (App Router).

### 4) Fonts (to match this project exactly)

This preset expects these CSS variables to exist:

- `--font-geist-sans`
- `--font-geist-mono`

In a Next App Router project, you can mirror this repo’s approach in `app/layout.tsx` using `next/font/google` and setting:

- `variable: "--font-geist-sans"`
- `variable: "--font-geist-mono"`

If you use different fonts, either:

- keep the variable names the same, or
- edit the preset’s `--font-sans` / `--font-mono` definitions in `design/xigo-theme.css`.

### 5) Reuse the components (optional, easiest path)

If you copy these components, they will “just work” with the preset because they use the CSS variables:

- `app/components/Button.tsx`
- `app/components/Card.tsx`
- `app/components/Section.tsx`
- `app/components/TextLink.tsx`
- `app/components/SiteHeader.tsx`
- `app/components/SiteFooter.tsx`

They rely on Tailwind utility classes + the preset utilities (`.glass`, `.glass-subtle`).

## Want “dark by default” instead of “system-prefers dark”?

Right now dark mode is applied via:

- `@media (prefers-color-scheme: dark)` in `design/xigo-theme.css`

If you want always-dark for the next project, tell me and I’ll generate a `design/xigo-theme.dark.css` variant that uses the dark tokens at `:root` by default (and optionally provides a light override).

