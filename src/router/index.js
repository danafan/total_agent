import Vue from 'vue'
import Router from 'vue-router'

const login = resolve=>require(['@/container/Login/login'],resolve)
const home = resolve=>require(['@/container/Home/home'],resolve)
const index = resolve=>require(['@/container/Index/index'],resolve)
const agentList = resolve=>require(['@/container/Agent/agentList'],resolve)
const storeList = resolve=>require(['@/container/Agent/storeList'],resolve)
const moneyRecord = resolve=>require(['@/container/Financial/moneyRecord'],resolve)
const applyCash = resolve=>require(['@/container/Financial/applyCash'],resolve)


Vue.use(Router)

const router = new Router({
  routes: [
  {
    path: '/login',
    component: login,
  },
  {
    path: '/home',
    component: home,
    children:[
    { path: '/index',name:"首页", component: index},
    { path: '/agentList',name:"代理列表", component: agentList},
    { path: '/storeList',name:"商家列表", component: storeList},
    { path: '/moneyRecord',name:"资金明细", component: moneyRecord},
    { path: '/applyCash',name:"申请提现", component: applyCash},
    
    
    ]
  }
  ]
})
// 路由跳转前的钩子
router.beforeEach(function (to, from, next) {
  let path = to.fullPath;
  sessionStorage.setItem("tab",path);
  next()
})
export default router;