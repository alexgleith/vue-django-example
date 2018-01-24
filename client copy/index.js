import './promise-polyfill'
import { app } from './app'

console.log('Web host: ', process.env.WEB_HOST)
console.log('API host: ', process.env.API_HOST)

app.$mount('#app')
