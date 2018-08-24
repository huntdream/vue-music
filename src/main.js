import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ripple from './directives/ripple'

Vue.config.productionTip = false

Vue.directive('ripple', ripple)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
