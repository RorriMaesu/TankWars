import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TankWars/', // This is important for GitHub Pages deployment
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  },
  // Ensure proper MIME types for GitHub Pages
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        // Use consistent naming without hashes for easier fallback
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  }
})
