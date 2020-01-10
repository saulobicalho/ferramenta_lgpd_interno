import Vue from 'vue'
import App from './App.vue'
import Menu from './components/Menu.vue'
import Footer from './components/Footer.vue'
import Content from './components/Content.vue'
Vue.config.productionTip = false

Vue.component('app-menu', Menu)
Vue.component('app-footer', Footer)
Vue.component('app-content', Content)



new Vue({
  render: h => h(App),
}).$mount('#app')
