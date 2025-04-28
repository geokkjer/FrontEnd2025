import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import checker from 'vite-plugin-checker'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), checker({
    typescript: true,
  })],
    resolve:{
      alias: {
        "@components":
          path.resolve(__dirname, "src", "components")
      }
    },
})
