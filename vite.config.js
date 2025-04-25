import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TankWars/', // This is important for GitHub Pages deployment
  build: {
    outDir: 'dist',
<<<<<<< HEAD
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
=======
    // Ensure our compiled assets use predictable filenames
    rollupOptions: {
      output: {
        // Use consistent filenames
        entryFileNames: 'assets/app.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]',
        // Ensure CSS is extracted to a single file
        manualChunks: undefined
>>>>>>> 2bb5d34 (Fix GitHub Pages deployment: update build process and prevent overriding index.html)
      }
    }
  },
  server: {
    headers: {
      'Content-Type': 'application/javascript'
    }
  }
})
