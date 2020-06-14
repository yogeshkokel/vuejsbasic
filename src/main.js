import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

Vue.config.productionTip = false

Vue.filter('uppercase', value => {
  return value.toUpperCase();
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
