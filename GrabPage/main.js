const bodyThings = Vue.createApp({
  data(){
    return{
      motto: 'Di saat penuh ketidakpastian ini, kami pasti ada untuk melayanimu'
    }
  } 
}).mount('#motto');

const Category = Vue.createApp({
  data(){
    return{
      categories: [
        {title: "Transportasi", detail: 'Mengantarkanmu dari titik A ke B dengan tarif transparan di awal.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152142/01-icon-transport.png', link:''},
        {title: "Makanan", detail: 'Siap antarkan makanananmu saat kamu sibuk (atau terlalu lelah) untuk pergi ke luar.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152145/02-icon-food.png', link:'http://localhost:5500/GrabPage/food'},
        {title: "Mart", detail: 'Temukan semua yang kamu butuhkan.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2020/08/26172955/Mart-Icon.png', link:''},
        {title: "Pengiriman", detail: 'Kirimkan dokumen atau paket ke berbagai tujuan, kapan pun kamu butuhkan.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152145/03-icon-delivery-700x700.png', link:''},
        {title: "Pembayaran", detail: 'Membantumu lakukan pemayaran tanpa tunai yang cepat, aman, dan mudah.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152157/15-icon-pay-700x700.png', link:''},
        {title: "Belanja", detail: 'Antarkan belanjaan sampai dengan pintu rumahmu..Lupakan ribetnya belanja dengan troli supermarket yang rusak.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152152/09-icon-groceries.png', link:''},
        {title: "Kesehatan", detail: 'Tanya jawab dengan dokter professional tentang kesehatanmu', image:'https://assets.grab.com/wp-content/uploads/sites/9/2020/05/19182715/Icon-Health-700x700.png', link:''},
        {title: "Pulsa", detail: 'Membantumu tetap terhubung dengan pembelian pulsa telepon yang cepat.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152147/05-icon-airtime-700x700.png', link:''},
        {title: "Pembayaran Tagihan", detail: 'Membuat pembayaran tagihan jadi jauh lebih mudah.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152149/06B-icon-billpay-ID-700x700.png', link:''},
        {title: "Rewards", detail: 'Memungkinkanmu kumpulkan poin, dan dapatkan reward seru tiap kamu gunakan Grab.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152153/11-icon-rewards-700x700.png', link:''},
        {title: "Gifts", detail: 'Kirimkan kartu (voucher) GrabGifts yang menyenangkan dan praktis ini ke Keluarga dan teman-temanmu', image:'https://assets.grab.com/wp-content/uploads/sites/9/2020/02/24123118/icon-grabgift-700x700.png',link:'http://localhost:5500/GrabPage/gift'},
        {title: "Paket Langganan", detail: 'Membantumu hemat lebih banyak untuk pakai Grab berkali-kali tanpa perlu hitung-hitung lagi.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152154/12-icon-subscription-700x700.png',link:''},
        {title: "Hotel", detail: 'Membuat booking hotel jadi mudah.', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152146/04-icon-hotels-700x700.png', link:''},
        {title: "Pembelian Tiket", detail: 'Memberikan pengalaman pembelian tiket nonton yang simpel', image:'https://assets.grab.com/wp-content/uploads/sites/9/2019/09/20152156/14-icon-ticketing.png', link:''},
        {title: "Asuransi", detail: ' Akses mudah perlindungan asuransi untuk kebutuhan sehari-hari kamu', image:'https://assets.grab.com/wp-content/uploads/sites/9/2021/03/05130134/icon-insurance1.png', link:'http://localhost:5500/GrabPage/insurance'}
      ]
    }
  }
});

Category.component('category-items', {
  props: ['cat'],
  template: `
  <div class="col-lg-3">
    <a :href='cat.link'>
      <div class="cat-card">
        <div class="card-body">
          <div class="cat-img-div">
            <img class="cat-img" :src='cat.image' alt="image">
          </div>
          <h5 class="card-title">{{ cat.title }}</h5>
          <p style="font-size:12px" class="card-text">{{ cat.detail }}</p>
        </div>
      </div>
    </a>
  </div>
  `
});

Category.mount('#category');