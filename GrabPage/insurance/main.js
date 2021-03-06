const body2 = Vue.createApp({
  data(){
    return{
      title: 'Cepat. Fleksibel. Aman.',
      desc: 'Grab menawarkan solusi yang fleksibel dan inovatif untuk kebutuhan asuransi sehari-harimu. Kami menyediakan platform teknologi yang inovatif dan aman sehingga kamu bisa menikmati kebebasan untuk mengasuransikan diri kapan pun kamu butuhkan – semuanya bisa dilakukan secara online.'
    }
  }
}).mount('#body-2');

const body4 = Vue.createApp({
  data(){
    return{
      pakets: [
        {title:'Sobat Proteksi',desc:'Dengan harga secangkir kopi, bisa dapat proteksi penyakit kanker',img:'https://assets.grab.com/wp-content/uploads/sites/9/2021/02/01165213/Community-Cover-KV-w-logo_1200x660_ID-1.png'},
        {title:'Proteksi Rawat Inap',desc:'Proteksi Rawat Inap memberikan manfaat uang tunai harian selama dirawat di rumah sakit',img:'https://assets.grab.com/wp-content/uploads/sites/9/2020/09/02151551/ProductPageFA_ID_Desktop_r1_1920x640.png'},
        {title:'Proteksi COVID-19',desc:'Lindungi diri & keluargamu dari COVID-19',img:'https://assets.grab.com/wp-content/uploads/sites/9/2020/05/13153339/GrabInsure-COVID-19_1300x550.jpg'},
        {title:'Proteksi Perjalanan',desc:'Tenangkan pikiran untuk tiap perjalanan',img:'https://assets.grab.com/wp-content/uploads/sites/9/2020/05/14114921/grab-idride-webbanner-4w-bh.jpg'},
      ]
    }
  }
})

body4.component('paket', {
  props: ['paket'],
  template: `
    <div class="col-lg-6">
      <div class="paket-card text-left">
        <div style="overflow:hidden">
          <div class="paket-img" :style="'background-image: url(' + paket.img + ')'"></div>
        </div>
        <div class="card-body">
          <p style="font-size: 22px;color: #55595c;" class="card-title">{{ paket.title }}</p>
          <p style="font-weight: 400;" class="card-text">{{ paket.desc }}</p>
          <br>
          <button type="button" class="btn btn-outline-success">SELENGKAPNYA</button>
        </div>
      </div>
    </div>
  `
})
body4.mount('#body-4')