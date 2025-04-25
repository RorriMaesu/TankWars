import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TankWars/', // This is important for GitHub Pages deployment
  build: {
    outDir: 'dist',
    // Ensure our compiled assets use predictable filenames
    rollupOptions: {
      output: {
        // Use consistent filenames
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // Ensure CSS is extracted to a single file
        manualChunks: undefined
      }
    }
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
})
