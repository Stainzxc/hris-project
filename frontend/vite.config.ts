import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Necessary for Docker
    port: 5175,
    strictPort: true,
    hmr: {
      host: 'localhost', // Allows your browser to connect to the dev server
    },
    watch: {
      usePolling: true, // Fixes file-sync issues on many Linux/WSL systems
    },
  },
})