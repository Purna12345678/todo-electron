import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist/main',
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      formats: ['cjs'],
      fileName: 'main'
    },
    rollupOptions: {
      external: ['electron'],
      output: {
        entryFileNames: '[name].js'
      }
    },
    emptyOutDir: true
  },
});
