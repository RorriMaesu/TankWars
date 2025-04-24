import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TankWars/', // This is important for GitHub Pages deployment

  // Ensure proper MIME types for GitHub Pages
  build: {
    outDir: 'dist',
    // Use consistent filenames for GitHub Pages compatibility
    rollupOptions: {
      output: {
        // Use predictable filenames for the main entry point
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  }
})
