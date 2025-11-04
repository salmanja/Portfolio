import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { PluginOption } from 'vite'
import { visualizer} from 'rollup-plugin-visualizer';
import path from 'path'

export default defineConfig({
  plugins: [react() as PluginOption, visualizer({ open: true })],
  build: {
    chunkSizeWarningLimit: 1000,
    target: "esnext",
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
        },
      },
    },
  },
  server: {
    open: true,
    port: 3000,
    hmr: {
      overlay: true,
    },
  },
  // Path aliases for cleaner imports
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@styles": path.resolve(__dirname, "./src/styles"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
});
