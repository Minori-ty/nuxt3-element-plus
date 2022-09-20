import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  css: ['~/assets/css/index.scss', '~/assets/css/tailwind.scss'],
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
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  runtimeConfig: {
    apiHost: '192.168.0.1',
  },
})
