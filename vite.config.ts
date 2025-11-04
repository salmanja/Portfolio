import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { PluginOption } from 'vite'

export default defineConfig({
  plugins: [
    react() as PluginOption
  ],
})
