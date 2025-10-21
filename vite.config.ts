import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    // Optimizaciones para SEO y Performance
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Eliminar console.logs en producción
      },
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor chunks para mejor caché
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['@radix-ui/react-slot', '@radix-ui/react-toast'],
        },
      },
    },
    // Generar source maps para debugging pero no en producción
    sourcemap: false,
    // Chunks más pequeños
    chunkSizeWarningLimit: 1000,
  },
  // Preview/Server config
  server: {
    port: 3000,
  },
  preview: {
    port: 4173,
  },
});
