import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus'
export default defineNuxtPlugin(async (nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus)
})
