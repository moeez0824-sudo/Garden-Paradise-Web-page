import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';

const copy404Plugin = (): Plugin => ({
  name: 'copy-404-html',
  closeBundle() {
    const indexPath = path.resolve(__dirname, 'dist', 'index.html');
    const notFoundPath = path.resolve(__dirname, 'dist', '404.html');
    if (fs.existsSync(indexPath)) {
      fs.copyFileSync(indexPath, notFoundPath);
    }
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Garden-Paradise/',
  plugins: [react(), copy404Plugin()],
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-icons': ['lucide-react'],
        },
      },
    },
  },
});
