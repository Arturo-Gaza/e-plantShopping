import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: "/e-plantShopping",
  plugins: [react()],
  resolve: {
    alias: {
      '@redux': path.resolve(__dirname, './src/redux'),
    },
  },
})
