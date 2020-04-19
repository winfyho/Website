import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js"
import store from "./store/index.js"

import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

import toast from './plugin/toast'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(mavonEditor)
Vue.use(toast)


router.beforeEach((to, from, next) => {

  // console.log('router before to', to.matched)
  // console.log('router before from', from)
  console.log(to)
  
  if (to.path !== '/admin') {
    Nprogress.start()
  }

  next()
})

router.afterEach((to, from) => {
  // ...
  // console.log('router after to', to)
  // console.log('router after from ', from)
  if (to.path !== '/admin') {
    Nprogress.done()

  }
  document.title = to.matched[0].meta.title

})

Vue.config.productionTip = false

let _Vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
