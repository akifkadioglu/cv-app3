import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

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
  ],
})
