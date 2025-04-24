import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TankWars/', // This is important for GitHub Pages deployment

  // Ensure proper MIME types for GitHub Pages
  build: {
    outDir: 'dist',
    // Use .js extension for JSX files to avoid MIME type issues
    rollupOptions: {
      output: {
        // Use hashed filenames for better caching
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})
