import Vue from 'vue'
import App from './App'
import router from './router'

// mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.config.productionTip = false

Vue.use(MintUI)
require('promise.prototype.finally').shim() // promise.prototype.finally

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
