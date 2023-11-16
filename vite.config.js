import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    // base: env.NODE_ENV === 'production' ? 'prod' : 'dev',
    base: 'https://irinanezlobina.github.io/e-commerce/',
    plugins: [
        vue(),
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json', '.scss'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            // styles: resolve('src/assets/scss')
        }
    }
})