import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import sitemap from 'vite-plugin-sitemap';

// https://vitejs.dev/config/
export default defineConfig({
  build: {},
  plugins: [
    vue(),
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
