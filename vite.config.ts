import path from "path";
import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default (configEnv: ConfigEnv) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(configEnv.mode, process.cwd(), '') }

  return defineConfig({
    base: process.env.VITE_APP_BASE_URL,

    root: './',

    server: {
      host: '0.0.0.0',
      port: Number(process.env.VITE_SERVER_PORT),
      strictPort: true
      //   cors: true,
      //  origin: 'http://localhost:3000',
    },

    preview: {
      host: '0.0.0.0',
      port: Number(process.env.VITE_SERVER_PORT),
      strictPort: true
    },

    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },

    build: {
      // StackBlitz does not support Brotli
      brotliSize: false,
      // outDir: path.join(__dirname, "dist"),
    },

  })
}
