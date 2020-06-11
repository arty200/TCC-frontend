import Vue from 'vue'
import store from './config/store'
import './config/bootstrap'
import './config/msgs'
import './config/axios'
import 'font-awesome/css/font-awesome.css'
import router from './config/router'

import App from './App'

Vue.config.productionTip = false


new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')