import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://alexf090.github.io',
  base: '/mailsimple-site',
  vite: { plugins: [tailwindcss()] },
});
