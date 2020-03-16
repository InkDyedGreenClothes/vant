import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import md5 from 'js-md5'
import 'amfe-flexible/index.js'
import { Button } from 'vant'

Vue.config.productionTip = false

Vue.prototype.$md5 = md5

Vue.use(Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
