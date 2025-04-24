import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/TankWars/', // This is important for GitHub Pages deployment

  // Static build configuration for GitHub Pages
  build: {
    outDir: 'dist',
    // Disable code splitting for a single bundle
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    },
    // Ensure all assets are included in the build
    assetsInlineLimit: 0,
    // Generate a completely static build
    target: 'es2015',
    // Minify the output
    minify: true,
    // Ensure sourcemaps are generated
    sourcemap: false
  }
})
