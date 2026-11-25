import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    // Any request starting with /api gets forwarded to the Python backend.
    // The proxy makes both look like one site to the browser, so no CORS setup is needed.
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
})
