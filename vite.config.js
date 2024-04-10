import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import styleImport from 'vite-plugin-style-import';
import vueJsx from '@vitejs/plugin-vue-jsx';
import path from 'path';

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    styleImport({
      // ...
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
