import type { RouteRecordRaw } from 'vue-router'

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
    component: () => import(/* webpackChunkName: "home" */ '@views/home.vue'),
    meta: {
      title: 'Home'
    }
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
  /**
   * 子路由示例
   */
  // {
  //   path: '/foo',
  //   name: 'foo',
  //   component: () =>
  //     import(/* webpackChunkName: "foo" */ '@cp/TransferStation.vue'),
  //   meta: {
  //     title: 'Foo',
  //   },
  //   redirect: {
  //     name: 'bar',
  //   },
  //   children: [],
  // },
]

export default routes
