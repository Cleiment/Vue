const axiosny = {
    data(){
        return{
            
        }
    },
    mounted(){
        this.getData();
    },
    methods: {
        getData(){
            axios.get('https://aws.random.cat/meow').then(res=>{
                console.log(res);
            });
            fetch('https://aws.random.cat/meow')
            .then(res=>res.json())
            .then(data=>console.log(data));
        }
    }
}

Vue.createApp(axiosny).mount('#app');