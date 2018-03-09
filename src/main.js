// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill";
import Vue from 'vue';
import App from './App';
import router from './router';
import echarts from 'echarts';
import axios from 'axios';
import iView from 'iview';
import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false;
Vue.use(iView);
// Vue.prototype.$ajax = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
  // components: { App },
  // template: '<App/>'
})