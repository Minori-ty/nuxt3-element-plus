import { defineNuxtPlugin } from '#app'
import { ElCard, ElButton } from 'element-plus'
export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.use(ElCard).use(ElButton)
})
