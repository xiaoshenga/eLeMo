import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/css/main.css'
import './assets/font/iconfont.css'
import './assets/css/reset.css'

import Cube from 'cube-ui'

Vue.use(Cube)

console.log(process.env.NODE_ENV);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
