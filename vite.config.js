import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';
import sitemap from 'vite-plugin-sitemap';

export default defineConfig({
  plugins: [
    vue(),
    VitePWA(),
    sitemap({
      base: 'https://www.akifkadioglu.dev/',
      exclude: [],
      routes: [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/projects', changefreq: 'weekly', priority: 0.8 },
        { url: '/resume', changefreq: 'monthly', priority: 0.9 },
        { url: '/blog', changefreq: 'daily', priority: 0.5 },
      ],
    }),
  ],
});
