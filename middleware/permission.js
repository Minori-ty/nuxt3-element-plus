export default defineNuxtRouteMiddleware((to, from) => {
    console.log('是否放行')
    const router = useRouter()
    // router.replace('/')
})
