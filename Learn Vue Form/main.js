const form1 = {
    data(){
        return {
            nama: "Alex",
            deskripsi: "Ini Deskripsi",
            judul: "Judul",
            harga: 0,
            paket: "",
            aktif: true,
            hobi: [],
            categories: [],
            categories2: [],
            options: [
                { text: "Graphic Programming 2", value: '01' },
                { text: "Mobile Application Development 2", value: '02' },
                { text: "Virtual & Augmented Reality 2", value: '03' },
            ]
        }
    }
}

Vue.createApp(form1).mount('#form1');

const form2 = {
    data(){
        return{
            keyword: '',
            books: [
                'C++ High Performance',
                'Mastering Linux Security and Hardening',
                'Python Programming Blueprints',
                'Mastering PostgreSQL 10'
            ]
        }
    },
    computed: {
        filterBooks(){
            return this.books.filter((book) => {
                return book.includes(this.keyword)
            })
        }
    }
}

Vue.createApp(form2).mount('#form2');

const form3 = {
    data(){
        return{
            title: '',
            description: '',
            authors: '',
            price: 0,
            categories: [],
            options: [
                { text: "Graphic Programming", value: '01' },
                { text: "Mobile Application Development", value: '02' },
                { text: "Virtual & Augmented Reality", value: '03' },
            ]
        }
    },
    methods: {
        submitForm(event){
            console.log(event)
            alert('Terima Kasih')
            event.preventDefault()
        }
    }
}

Vue.createApp(form3).mount('#form3');

const form4 = {
    data(){
        return{
            title: '',
            description: '',
            authors: '',
            price: 0,
            categories: [],
            options: [
                { text: 'Graphic Programming', value: '01' },
                { text: 'Mobile Application Development', value: '02' },
                { text: 'Virtual & Augmented Reality', value: '03' }
            ]
        }
    },
    methods: {
        submitForm(event){
            let error = 0
            if (this.title.length < 3){
                error++
                alert('Title must be at least 3 characters!')
            }
            else if(this.description.length > 500){
                error++
                alert('Description max 500 characters!')
            }
            else if(this.authors.length < 3){
                error++
                alert('Authors must be at least 3 characters!')
            }
            else if(this.price < 0){
                error++
                alert("Price can't be minus!")
            }
            else if(this.categories.length === 0){
                error++
                alert('Choose at least 1 category!')
            }

            if(error == 0){
                alert('Thank you for filling the form!')
            }
            event.preventDefault()
        }
    }
}

Vue.createApp(form4).mount('#form4');

const form5 = {
    data(){
        return{
            title: 'VueJS',
            description: '',
            authors: '',
            price: 75000,
            categories: [],
            options: [
                { text: 'Graphic Programming', value: '01' },
                { text: 'Mobile Application Development', value: '02' },
                { text: 'Virtual & Augmented Reality', value: '03' }
            ],
            errors: []
        }
    },
    methods: {
        submitForm(event){
            this.errors = []
            if (this.title.length < 3){
                this.errors.push('Title must be at least 3 characters!')
                this.$refs.title.select()
            }
            else if(this.description.length > 500){
                this.errors.push('Description max 500 characters!')
                this.$refs.description.select()
            }
            else if(this.authors.length < 3){
                this.errors.push('Authors must be at least 3 characters!')
                this.$refs.authors.select()
            }
            else if(this.price < 0){
                this.errors.push("Price can't be minus!")
                this.$refs.price.select()
            }
            else if(this.categories.length === 0){
                this.errors.push('Choose at least 1 category!')
                this.$refs.categories.focus()
            }

            if(this.errors.length == 0){
                alert('Thank you for filling the form!')
                const formData = new FormData()
                formData.append('title', this.title)
                formData.append('description', this.description)
                formData.append('authors', this.authors)
                formData.append('price', this.price)
                formData.append('categories', this.categories)
            }
            event.preventDefault()
        }
    }
}

Vue.createApp(form5).mount('#form5')

const form6 = {
    data(){
        return{
            title: 'VueJS',
            description: '',
            authors: '',
            price: 75000,
            categories: [],
            options: [
                { text: 'Graphic Programming', value: '01' },
                { text: 'Mobile Application Development', value: '02' },
                { text: 'Virtual & Augmented Reality', value: '03' }
            ],
            errors: []
        }
    },
    methods: {
        submitForm(event){
            this.errors = []
            if (this.title.length < 3){
                this.errors.push('Title must be at least 3 characters!')
                this.$refs.title.select()
            }
            else if(this.description.length > 500){
                this.errors.push('Description max 500 characters!')
                this.$refs.description.select()
            }
            else if(this.authors.length < 3){
                this.errors.push('Authors must be at least 3 characters!')
                this.$refs.authors.select()
            }
            else if(this.price < 0){
                this.errors.push("Price can't be minus!")
                this.$refs.price.select()
            }
            else if(this.categories.length === 0){
                this.errors.push('Choose at least 1 category!')
                this.$refs.categories.focus()
            }

            if(this.errors.length == 0){
                alert('Thank you for filling the form!')
                let formBook = this.$refs.formBook
                const formData = new FormData(formBook)

                const xhttp = new XMLHttpRequest()
                xhttp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                        console.log(this.responseText)
                    }
                }

                xhttp.open('POST', 'http://localhost:8080/vue/simpan.php', true)
                xhttp.send(formData);
            }
        }
    }
}

Vue.createApp(form6).mount('#form6');

const form7 = {
    data(){
        return{
            title: 'VueJS',
            description: '',
            authors: '',
            price: 75000,
            categories: [],
            options: [
                { text: 'Graphic Programming', value: '01' },
                { text: 'Mobile Application Development', value: '02' },
                { text: 'Virtual & Augmented Reality', value: '03' }
            ],
            errors: []
        }
    },
    methods: {
        submitForm(event){
            this.errors = []
            if (this.title.length < 3){
                this.errors.push('Title must be at least 3 characters!')
                this.$refs.title.select()
            }
            else if(this.description.length > 500){
                this.errors.push('Description max 500 characters!')
                this.$refs.description.select()
            }
            else if(this.authors.length < 3){
                this.errors.push('Authors must be at least 3 characters!')
                this.$refs.authors.select()
            }
            else if(this.price < 0){
                this.errors.push("Price can't be minus!")
                this.$refs.price.select()
            }
            else if(this.categories.length === 0){
                this.errors.push('Choose at least 1 category!')
                this.$refs.categories.focus()
            }

            if(this.errors.length == 0){
                alert('Thank you for filling the form!')
                let formBook = this.$refs.formBook
                const formData = new FormData(formBook)
                
                let cover = this.$refs.cover.files[0]
                formData.append("cover", cover);

                const xhttp = new XMLHttpRequest()
                xhttp.onreadystatechange = function(){
                    if (this.readyState == 4 && this.status == 200){
                        console.log(this.responseText)
                    }
                }  

                xhttp.open('POST', 'http://localhost:8080/vue/simpan.php', true)
                xhttp.send(formData);
            }
        }
    }
}

Vue.createApp(form7).mount('#form7');