import Vue from 'vue'
import App from './App.vue'

import Button from './components/button'

Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
})
