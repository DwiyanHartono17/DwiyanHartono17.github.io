import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Custom domain (www.dwiyanhartono.com) serves the site from the root,
// so the base path is "/". If you ever host on username.github.io/repo
// without a custom domain, change this to '/<repo-name>/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
})
