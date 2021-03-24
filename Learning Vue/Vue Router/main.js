import { BooksComponent } from './BooksComponent.js'
import { BookComponent } from './BookComponent.js'

const Home = { template : `<div>Halaman Home</div>` }
const About = { template : `<div>Halaman About</div>` }

const routes = [
  {path: '/', component: Home, alias: '/home'},
  {path: '/about', component: About, alias: '/about', meta:{login: true}},
  {path: '/books', component: BooksComponent},
  {path: '/book/:id', name: 'book', component: BookComponent, props: true}
]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.login)) {
    alert('Halaman ini hanya untuk user yang sudah login')
    next(false)
  }
  else{
    next()
  }
})

const main = Vue.createApp({})
main.use(router)
main.mount('#app')