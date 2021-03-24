import { Hello } from './Hello.js'

const store = new Vuex.Store({
  strict : true,
  state: {
    counter : 0
  },
  mutations: {
    increment: state => state.counter++,
    incrementonn: (state,n) => state.counter+=n
  },
  actions: {
    increment(context){
      context.commit('increment')
    },
    incrementonn(context, n){
      context.commit('incrementonn', n)
    },
    getbooks({commit}){
    }
  },
  getters: {
    counter: state => state.counter
  },
})

const app = Vue.createApp({
  computed:{
    counter(){
      return store.getters.counter
    }
  },
  components : {
    Hello
  },
  template:`
    <div>
    {{ counter }}
    <button @click="increment()">+</button>
    <button @click="incrementonn(2)">+2</button>
    <button @click="incrementonn(5)">+5</button>
      <hello></hello>
    </div>
  `,
  methods: {
    increment(){
      store.dispatch('increment')
    },
    incrementonn(n){
      store.dispatch('incrementonn', n)
    },
  }
})

app.use(store)
app.mount('#app')