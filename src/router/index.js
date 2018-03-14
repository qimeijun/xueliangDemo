import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
//import specialCrowd from '@/components/specialCrowd'
//import managementCase from '@/components/managementCase'
//import keyEnterprises from '@/components/keyEnterprises'
//import railwayProtection from '@/components/railwayProtection'
//import wifiFixed from '@/components/wifiFixed'
import mainMap from '@/components/mainMap'
import video from '@/components/video'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  // },{
  //   path: '/specialcrowd/',
  //   name: 'specialCrowd',
  //   component: specialCrowd
  // },{
  //   path: '/managementCase/',
  //   name: 'managementCase',
  //   component: managementCase
  // },{
  //   path: '/keyEnterprises/',
  //   name: 'keyEnterprises',
  //   component: keyEnterprises
  // },{
  //   path: '/railwayProtection/',
  //   name: 'railwayProtection',
  //   component: railwayProtection
  // },{
  //   path: '/wifiFixed/',
  //   name: 'wifiFixed',
  //   component: wifiFixed
  // },{
  //   path: '/mainMap/',
  //   name: 'mainMap',
  //   component: mainMap
  // },{
  //   path: '/video/',
  //   name: 'video',
  //   component: video
  }]
})
