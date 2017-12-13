
/* eslint-disable no-new */

import Vue from 'vue'
import VueMdl from 'vue-mdl'
import router from './router'
import store from './vuex/store'
import App from './components/App'

Vue.config.productionTip = false

Vue.use(VueMdl)

new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router,
  store
})