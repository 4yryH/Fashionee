import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/

export default defineConfig({
  build: {
    // любые файлы будут выводиться как отдельные ассеты
    assetsInlineLimit: 0
  },

  plugins: [
    react(),
    svgr({
      exportAsDefault: false, // нужно для ReactComponent
      svgrOptions: {
        icon: true
      }
    })
  ]
})
