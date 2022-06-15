import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['element-plus/dist/index.css'],
    vite: {
        logLevel: 'info',
        optimizeDeps: {
            include: ['vue'],
        },
        define: {
            'process.env.DEBUG': 'false',
        },
    },
    build: {
        transpile: ['ElementPlus'],
    },
})
