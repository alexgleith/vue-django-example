import Vue from 'vue'
import Router from 'vue-router'
import App from '../views/App'
import NotFoundPage from '../views/404Page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: App
    },
    {
      path: '*',
      component: NotFoundPage
    }
  ]
})
