import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index.js"

import mavonEditor from 'mavon-editor'
import toast from './plugin/toast'
import 'mavon-editor/dist/css/index.css'

Vue.use(mavonEditor)
Vue.use(toast)


Vue.config.productionTip = false

let _Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
