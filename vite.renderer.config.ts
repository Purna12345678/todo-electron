import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist/renderer',
    emptyOutDir: true,
  },
  base: './',
  server: {
    strictPort: true,
    port: 3000
  },
  css: {
    postcss: {}, 
  },
  optimizeDeps: {
    include: ['react', 'react-dom']
  }
});
