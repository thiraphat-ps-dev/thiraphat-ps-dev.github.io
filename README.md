# thiraphat-ps-dev.github.io

Personal site of Thiraphat Phutson, a senior frontend engineer.

- **Astro**: static output, React components rendered at build time (no hydration).
- **[thira-ui](https://github.com/thiraphat-ps-dev/thira-ui)**: the UI components and design tokens.
- **CSS scroll-driven animations**: every scroll effect is pure CSS (`animation-timeline`), and respects `prefers-reduced-motion`.
- **Writing** is pulled from Medium's RSS at build time. CI rebuilds daily.

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # static site in dist/
npm run preview   # check the production build. Always verify scroll effects here
```

> CSS minification is disabled in `astro.config.mjs`: Vite's minifier folds `animation-timeline` into the `animation` shorthand, which browsers reject.
