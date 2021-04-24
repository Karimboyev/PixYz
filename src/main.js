import Vue from 'vue'
// import Home from './pages/Home.vue'
// import AboutUs from './pages/AboutUs.vue'
// import Services from './pages/Services.vue'
// import Portfolio from './pages/Portfolio.vue'
// import Contact from './pages/Contact.vue'
import changePage from './changePage.vue'
import router from './router/router.js'


Vue.config.productionTip = false

new Vue({
  render: h => h(changePage),
  router 
}).$mount('#app')


