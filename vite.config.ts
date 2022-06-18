import { fileURLToPath } from 'url'
import { defineConfig, loadEnv } from 'vite'
import type { ConfigEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

export default (configEnv: ConfigEnv) => {
  // Load app-level env vars to node-level env vars.
  process.env = { ...process.env, ...loadEnv(configEnv.mode, process.cwd(), '') }

  return defineConfig({
    base: process.env.VITE_APP_BASE_URL,

    plugins: [vue()],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    build: {
      // StackBlitz does not support Brotli
      brotliSize: false,
    },
  })
}
