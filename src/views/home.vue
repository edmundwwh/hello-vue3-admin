<template>
  <div class="home">
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <el-button type="primary" @click="handleLogin">Primary</el-button>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
const handleLogin = () => {
  router.push('/login')
}
</script>

<style lang="less" scoped></style>
