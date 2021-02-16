const formPMB = {
    data(){
        return {
            nama: '',
            jenis_kelamin: '',
            alamat: '',
            no_telp: '',
            email: '',
            password: '',
            tempat_lahir: '',
            tanggal_lahir: '',
            asal_sekolah: '',
            kota: '',
            jurusan: '',
            kotas : [
                { text: 'Pontianak', value: 'Pontianak' },
                { text: 'Samarinda', value: 'Samarinda' },
                { text: 'Bogor', value: 'Bogor' },
                { text: 'Lampung', value: 'Lampung' },
                { text: 'Kubu Raya', value: 'Kubu Raya' },
                { text: 'Singkawang', value: 'Singkawang' },
            ],
            jurusans : [
                { text: 'TKJ', value: 'tkj' },
                { text: 'AKL', value: 'akl' },
                { text: 'BDP', value: 'bdp' }
            ],
            errors : [],
            url: 'http://localhost:8000/api'
        }
    },
    methods: {
        submitForm(event){
            this.errors = [];
            if (this.nama.length < 3){
                this.errors.push('Nama harus lebih dari 3 karakter!')
            }
            else if(this.alamat.length < 1){
                this.errors.push('Alamat tidak boleh kosong!')
            }
            else if(this.no_telp.length < 10){
                this.errors.push('No Telp minimal 10 karakter!')
            }
            else if(this.no_telp.length > 13){
                this.errors.push('No Telp maksimal 13 karakter!')
            }
            else if(this.email.length < 1){
                this.errors.push("Email tidak boleh kosong!")
            }
            else if(this.password.length < 6){
                this.errors.push('Password minimal 6 karakter!')
            }
            else if(this.tanggal_lahir.length < 1){
                this.errors.push('Tempat lahir tidak boleh kosong!')
            }
            else if(this.asal_sekolah.length < 1){
                this.errors.push('Asal sekolah tidak boleh kosong!')
            }
            else if(this.kota.length < 1){
                this.errors.push('Pilih salah satu Kota / Kabupaten!')
            }
            else if(this.jurusan.length < 1){
                this.errors.push('Pilih salah satu Jurusan!')
            }

            if(this.errors.length == 0){
                let formMurid = this.$refs.formMurid;
                formData = new FormData(formMurid);
                
                let ijazah = this.$refs.ijazah.files[0]
                formData.append("ijazah", ijazah);
                let surat = this.$refs.surat.files[0]
                formData.append("surat", surat);
                let rapor = this.$refs.rapor.files[0]
                formData.append("rapor", rapor);

                axios.post(`${this.url}/create_pmb`, formData).then((res)=>{
                    alert('Terima kasih sudah mengisi form!');
                    console.log(res.data);
                })

                // const xhttp = new XMLHttpRequest()
                // xhttp.onreadystatechange = function(){
                //     if (this.readyState == 4 && this.status == 200){
                //         alert('Terima kasih sudah mengisi form!')
                //         console.log(this.responseText)
                //     }
                // }  

                // xhttp.open('POST', 'http://localhost:8000/api/create_pmb', true)
                // xhttp.send(formData);
                
                event.preventDefault();
            }

            
        }
    }
}

Vue.createApp(formPMB).mount('#formPMB');