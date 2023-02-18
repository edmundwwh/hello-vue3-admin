import type { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/index.vue'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */

  {
    path: '/',
    name: 'home',
    component: Layout,
    redirect: 'order',
    children: [
      {
        path: 'order',
        name: 'order',
        meta: { title: '订单列表' },
        component: () =>
          import(/* webpackChunkName: "home" */ '@views/home.vue')
      },
      {
        path: 'user',
        name: 'user',
        meta: { title: '用户列表' },
        component: () =>
          import(/* webpackChunkName: "home" */ '@views/home.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: Layout,
    meta: {
      title: 'Login',
      alwaysShow: true
    },
    children: [
      {
        path: 'download',
        component: () =>
          import(/* webpackChunkName: "zip" */ '@views/home.vue'),
        name: 'ExportZip',
        meta: { title: 'exportZip' }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: "home" */ '@views/login/index.vue'),
    meta: {
      title: 'Login'
    }
  }
]

export default routes
