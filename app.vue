<template>
  <div>
    <Title>主页</Title>
    <el-card>
      <el-button type="primary">点击</el-button>
    </el-card>
    <img src="~/assets/docker.webp" alt="" /><br />
    <NuxtLink to="/about"> <button>about Page</button> </NuxtLink>
    <button class="h-10 w-28 rounded border-0 bg-red-500" @click="toUser">
      编程式导航
    </button>
    <h3>{{ data }}</h3>
    <div>{{ userInfo }}</div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
function toUser() {
  navigateTo({
    path: '/user/3',
    query: {
      name: '小明',
    },
  })
}

const { data } = await useFetch('http://127.0.0.1:8080/v1/login', {
  method: 'post',
})
console.log(data.value)

const userInfo = useUserinfo()

const config = useRuntimeConfig()
console.log(config.apiHost)
</script>
