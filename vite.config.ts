import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { PluginOption } from 'vite'

export default defineConfig({
  plugins: [
    react() as PluginOption
  ],
  build:{
    rollupOptions:{
      output:{
        manualChunks(id){
          if(id.includes('node_modules')){
            return 'vendor';
        } if(id.includes('src/components/')){
            return 'components';
          }
      },
    },
  },
},
});
