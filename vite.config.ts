import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/trip-log/',
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        trip20260829: '20260829/index.html',
      },
    },
  },
})
