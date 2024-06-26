import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  base: './',
  build: {
    outDir: 'dist',
    rollupOptions: {
      // input: {
      //   main: '/src/main.tsx',
      // },
    },
  },
  server: {
    cors: true,
  },
})
