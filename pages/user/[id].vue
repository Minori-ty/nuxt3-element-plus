<template>
    <div>
        <h1>id</h1>
        <h2>{{ $route.params.id }}</h2>
        <h2>{{ $route.query }}</h2>
        <button @click="add">点击添加布局</button>
        <NuxtLayout />
    </div>
</template>

<script setup>
const route = useRoute()
console.log(route.params, route.query)
useHead({
    title: '默认title',
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${titleChunk}-追加的内容` : '默认title'
    },
    script: [
        // {
        //     src: '/a.js',
        //     body: true,
        // },
    ],
})

function add() {
    route.meta.layout = 'dialog'
}

definePageMeta({
    middleware: ['permission'],
})
</script>
