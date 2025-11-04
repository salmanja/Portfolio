import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import type { PluginOption } from 'vite'
import { visualizer} from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react() as PluginOption,
    visualizer({open:true}),
  ],
  build:{
    chunkSizeWarningLimit: 1000,
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
