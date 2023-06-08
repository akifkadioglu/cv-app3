import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        format: 'esm',
      },
    },
  },
  plugins: [
    vue(),
    VitePWA(),
    sitemap({
      hostname: 'https://www.akifkadioglu.dev/',
      exclude: [],
      routes: [
        { url: '/', changefreq: 'weekly', priority: 1.0 },
        { url: '/projects', changefreq: 'weekly', priority: 0.8 },
        { url: '/resume', changefreq: 'monthly', priority: 0.9 },
        { url: '/blog', changefreq: 'daily', priority: 0.5 },
      ],
    }),
  ],
})
