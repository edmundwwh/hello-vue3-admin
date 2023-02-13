<template>
  <div>
    <h1>{{ msg }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<style lang="less" scoped>
h1 {
  color: red;
}
</style>
