import Vue from 'vue'
import App from './App.vue'
import Routes from './routes.js'

// Step 1 - Import and use VueRouter
import VueRouter from 'vue-router' // (Step 1)
Vue.use(VueRouter) // (Step 2)
Vue.config.productionTip = false

// Step 3 - Register Routes
const myRouter = new VueRouter({
  routes: Routes,
  mode: 'history'
});

new Vue({
  render: h => h(App),
  router:myRouter
}).$mount('#app')