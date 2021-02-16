const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(()=>{
            this.counter++
        }, 1000)
    }
}

Vue.createApp(Counter).mount('#counter');

const AttributeBinding = {
    data() {
        return {
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    }
}

Vue.createApp(AttributeBinding).mount('#bind-attribute');

const EventHandling = {
    data() {
        return {
            message: 'Hello, Vue.js!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
                .split('')
                .reverse()
                .join('')
        }
    }
}

Vue.createApp(EventHandling).mount('#event-handling');

const TwoWayBinding = {
    data() {
        return {
            message: "Hello Vue!"
        }
    }
}

Vue.createApp(TwoWayBinding).mount('#two-way-binding')

const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    },
    methods: {
        toggleSeen(){
            if (this.seen) {
                this.seen = false
            }
            else{
                this.seen = true
            }
        }
    }
}

Vue.createApp(ConditionalRendering).mount('#conditional-rendering')

const ListRendering = {
    data() {
        return {
            todos: [
                { text: 'Learn Javascript' },
                { text: 'Learn Vue' },
                { text: 'Build something awesome' }
            ]
        }
    }
}

Vue.createApp(ListRendering).mount('#list-rendering')

const TodoList = {
    data() {
        return {
            groceryList: [
                { id: 0, text: 'Vegetables'},
                { id: 1, text: 'Cheese'},
                { id: 2, text: 'Whatever else human supposed to eat'},
            ]
        }
    }
}

const app = Vue.createApp(TodoList)

app.component('todo-item', {
    props: ['todo'],
    template: `<li>{{ todo.text }}</li>`
})

app.mount('#todo-list-app')

// const BookComponent = Vue.createApp({});
// BookComponent.component('book', {
//     data(){
//         return{
//             classCard: 'card'
//         }
//     },
//     props: ['title', 'description', 'image'],
//     template: `
//     <div :class="classCard">
//         <h3>{{ title }}</h3>
//         <img :src="'images/books'+image" style="width: 100%">
//         <p v-html="description"></p>
//     </div>`
// });
// BookComponent.mount('#book-comp');

import { BookData } from "./BookData.js";

const BookComponent = Vue.createApp(BookData);
BookComponent.component('book', {
    data(){
        return{
            classCard : 'card'
        }
    },
    props: ['book'],
    template: `
    <div :class="classCard">
        <h3>{{ book.title }}</h3>
        <img :src="'images/books'+book.image" style="width: 100%">
        <p v-html="book.description"></p>
    </div>`
}).mount('#book-comp');

const BookCompSelected = Vue.createApp(BookData);
BookCompSelected.component('book', {
    data(){
        return{
            classCard : 'card'
        }
    },
    props: ['book'],
    emits: ['selected'],
    template: `
    <div @click="$emit('selected', book.title)" :class="classCard">
        <h3>{{ book.title }}</h3>
        
        <img :src="'images/books'+book.image" style="width: 100%">
        <p v-html="book.description"></p>
    </div>`
    // `
    // <div :class="classCard">
    //     <h3>{{ book.title }}</h3>
        
    //     <img :src="'images/books'+book.image" style="width: 100%">
    //     <p v-html="book.description"></p>

    //     <button @click="$emit('selected', book.title)">Select</button>
    // </div>`
}).mount('#book-comp-selected');

const slot = Vue.createApp({});
slot.component('information' , {
    template: `
        <div class="card">
            <strong>Informasi</strong>
            <hr>
            <slot></slot>
        </div>
    `
}).mount('#slot')

const slots = Vue.createApp({});
slots.component('information' , {
    template: `
        <div class="card">
            <slot name="judul"></slot>
            <hr>
            <slot name="isi"></slot>
        </div>
    `
}).mount('#slots')

const dobComp = Vue.createApp({
    data(){
        return{
            currentComponent: 'list'
        }
    }
});
dobComp.component('list', {
    template: `
    <div class="card">
        <strong>Bahasa Pemrograman</strong>
        <ul>
            <li>Javascript</li>
            <li>PHP</li>
            <li>Java</li>
        </ul>
    </div>`
});
dobComp.component('detail', {
    template: `
    <div class="card">
        <strong>PHP</strong>
        <p>PHP adalah singkatan dari PHP Hypertext Preprocessor</p>
    </div>`
});
dobComp.mount('#dobComp');

const MixinHello = {
    created: function(){
        this.hello()
    },
    methods: {
        hello(){
            console.log('Hello From Mixin!');
        }
    }
}

Vue.createApp({
    mixins: [MixinHello]
}).mount('#mixin');