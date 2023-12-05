import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/bookpal',
  plugins: [react()],
  generate: {
    fallback: true
  },
})
