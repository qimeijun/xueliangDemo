import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import specialCrowd from '@/components/specialCrowd'
import caseManage from '@/components/caseManage'
import populationManage from '@/components/populationManage'
import keyEnterprise from '@/components/keyEnterprise'
import railwayProtect from '@/components/railwayProtect'
import wifiSniffing from '@/components/wifiSniffing'
import showDetail from '@/components/showDetail'
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: index
  }, {
    path: '/specialCrowd/',
    name: 'specialCrowd',
    component: specialCrowd
  }, {
    path: '/caseManage/',
    name: 'caseManage',
    component: caseManage
  }, {
    path: '/populationManage/',
    name: 'populationManage',
    component: populationManage
  }, {
    path: '/keyEnterprise/',
    name: 'keyEnterprise',
    component: keyEnterprise
  }, {
    path: '/railwayProtect/',
    name: 'railwayProtect',
    component: railwayProtect
  }, {
    path: '/wifiSniffing/',
    name: 'wifiSniffing',
    component: wifiSniffing
  }, {
    path: '/showDetail/',
    name: 'showDetail',
    component: showDetail
  }]
})
