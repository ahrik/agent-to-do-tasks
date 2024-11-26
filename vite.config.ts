import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint2';

const getPath = (relativePath: string) => path.resolve(__dirname, relativePath);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],

  resolve: {
    alias: {
      '@': getPath('./src'),
      '@public': getPath('./public'),
      '@styles': getPath('./src/shared/styles'),

      '@pages': getPath('./src/pages'),
      '@widgets': getPath('./src/widgets'),
      '@features': getPath('./src/features'),
      '@entities': getPath('./src/entities'),
      '@shared': getPath('./src/shared'),
    },
  },

  server: {
    watch: {
      usePolling: true,
    },
    host: true,
    strictPort: true,
    port: 4000,
  },
});
