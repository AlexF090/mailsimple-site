import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alexf090.github.io',
  base: '/mailsimple-site',
  // Astro 7 defaults to 'jsx', which drops line-break whitespace before inline links in prose.
  compressHTML: true,
  vite: { plugins: [tailwindcss()] },
});
