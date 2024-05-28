import react from '@vitejs/plugin-react';

import { defineConfig } from 'vite';
import * as path from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
  },
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve('./src'),
      Pages: path.resolve('./src/pages'),
      Modules: path.resolve('./src/modules'),
      Components: path.resolve('./src/components'),
      Ui: path.resolve('./src/ui'),
      Configs: path.resolve('./src/configs'),
    },
  },
});
