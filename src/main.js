
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'

import './filter/init'
import './directive/init'
import "./components/global/init"

const ROOT = process.env.API_ROOT;

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  // store,
  components: { App },
  template: '<App/>'
})
