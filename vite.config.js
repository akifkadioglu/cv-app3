import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/",
      srcDir: "src",
      strategies: "injectManifest",
      manifest: "manifest.json",
    })
  ],
})
