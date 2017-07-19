// main.js

import Vue from 'vue'

import App from './App'
import store from './store/store.js'

/* eslint-disable no-new */
const v = new Vue({
  el: 'body',
  store: store,
  components: { App }
})

v.$store.dispatch('getTodos')
