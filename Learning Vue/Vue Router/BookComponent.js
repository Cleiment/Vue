export const BookComponent = {
    data(){
        return{
            books: [
                {
                    id: 99,
                    title: 'C++ High Performance',
                    description: 'Write code that scales across CPU registers, multi-core, and machine clusters',
                    authors: 'Viktor Sehr, Bjorn Andrist',
                    publish_year: 2010,
                    price: 100000,
                    image: 'c++-high-performance.png'
                },
                {
                    id: 100,
                    title: 'Mastering Linux Security and Hardening',
                    description: 'A comprehensive guide to mastering the art of preventing your Linux system from getting compromised',
                    authors: 'Donald A. Tevault',
                    publish_year: 2012,
                    price: 125000,
                    image: 'c++-high-performance.png'
                },
                {
                    id: 101,
                    title: 'C++',
                    description: 'Write code ',
                    authors: 'Viktor Sehr',
                    publish_year: 2014,
                    price: 110000,
                    image: 'c++-high-performance.png'
                },
                {
                    id: 101,
                    title: 'C++ High',
                    description: ' that scales across CPU registers, multi-core, and machine clusters',
                    authors: 'Bjorn Andrist',
                    publish_year: 2011,
                    price: 145000,
                    image: 'c++-high-performance.png'
                },
            ],
            selectedBook: ''
        }
    },
    computed: {
        book(){
            return this.books.filter((book) => {
                return book.id == parseInt(this.$route.params.id)
            })[0]
        }
    },
    template: `
    <div v-if="book">
        <h1>Buku {{ book.title }}</h1>
        <ul>
            <li v-for="(num, value) of book">
                {{ value + ' : ' + num }} <br>
            </li>
        </ul>
    </div>`
};