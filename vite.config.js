import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TankWars/', // This is important for GitHub Pages deployment

  // Static build configuration for GitHub Pages
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
    },
    // Ensure all assets are included in the build
    assetsInlineLimit: 0,
    // Generate a completely static build
    target: 'es2015',
    // Minify the output
    minify: true,
    // No sourcemaps for production
    sourcemap: false,
    // Ensure CSS is extracted to a file
    cssCodeSplit: false
  }
})
