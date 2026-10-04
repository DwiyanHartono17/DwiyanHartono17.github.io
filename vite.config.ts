import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Hosted as a GitHub Pages user site (https://DwiyanHartono17.github.io/),
// which serves from the root, so the base path is "/". If you ever host
// under a project path (username.github.io/repo), change this to '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
