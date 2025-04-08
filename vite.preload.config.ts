import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    outDir: 'dist/preload',
    lib: {
      entry: resolve(__dirname, 'src/preload.ts'),
      formats: ['cjs'],
      fileName: 'preload'
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
