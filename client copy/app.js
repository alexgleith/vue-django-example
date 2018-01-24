import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import App from './views/App'
import router from './router'
import store from './store'

// Bootstrap javascript components
import 'bootstrap'

// CSS
import 'bootstrap/dist/css/bootstrap.css'
import './css/main.css'

// FONTS
import 'font-awesome-webpack'

sync(store, router)

const app = new Vue({
  router,
  store,
  ...App
})

export { app, router, store }
