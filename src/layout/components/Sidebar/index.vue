<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :collapse="!isCollapse"
      :unique-opened="false"
      :default-active="activeMenu"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
      mode="vertical"
    >
      <SidebarItem
        v-for="route in routerList"
        :key="route.path"
        :item="route"
        :base-path="route.path"
        :is-collapse="isCollapse"
        :is-first-level="true"
      />
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
export default defineComponent({
  components: {
    SidebarItem
  },
  setup() {
    const router = useRouter()
    const route = useRoute()
    router
    const activeMenu = computed(() => {
      const { meta, path } = route
      if (meta !== null || meta !== undefined) {
        if (meta.activeMenu) {
          return meta.activeMenu
        }
      }
      return path
    })

    const routerList = router.getRoutes()
    console.log(routerList, 111)

    const isCollapse = ref(true)
    return {
      activeMenu,
      isCollapse,
      routerList
    }
  }
})
</script>
<style lang="less"></style>
