import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 7240,
  },
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src/app"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@components": path.resolve(__dirname, "src/components"),
      "@animations": path.resolve(__dirname, "src/components/layout/animations"),
      "@data": path.resolve(__dirname, "src/data"),
      "@css": path.resolve(__dirname, "src/css"),
      "@styles": path.resolve(__dirname, "src/styles"),
      "@/types": path.resolve(__dirname, "src/types"),
    }
  }
})