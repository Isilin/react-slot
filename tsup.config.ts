import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  metafile: true,
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  external: ['react', 'react-dom'],
});
