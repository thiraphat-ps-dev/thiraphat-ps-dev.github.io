// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    build: {
      // The CSS minifier folds `animation-timeline` into the `animation` shorthand,
      // which browsers reject, silently killing every scroll-driven animation.
      cssMinify: false,
    },
  },
});