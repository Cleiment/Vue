import { BooksComponent } from './BooksComponent.js'
import { BookComponent } from './BookComponent.js'

const Home = { template : `<div>Halaman Home</div>` }
const About = { template : `<div>Halaman About</div>` }

const routes = [
  {path: '/', component: Home, alias: '/home'},
  {path: '/about', component: About, alias: '/about'},
  {path: '/books', component: BooksComponent},
  {path: '/book/:id', component: BookComponent}
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

const main = Vue.createApp({})
main.use(router)
main.mount('#app')