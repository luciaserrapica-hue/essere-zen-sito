import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // URL del sito (per sitemap, canonical, OG images)
  // Cambia in produzione con il dominio Vercel effettivo (es. essere-zen.vercel.app o dominio custom)
  site: 'https://essere-zen.vercel.app',
  // Nota: URL definitivo previsto. Per claim del dominio:
  // Vercel → progetto essere-zen-sito → Settings → Domains → Edit → essere-zen
  integrations: [mdx(), sitemap()],
  vite: { plugins: [tailwindcss()] }
});
