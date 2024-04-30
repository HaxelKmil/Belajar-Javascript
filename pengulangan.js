// Latihan Pengulangan
// var angkotAwal = 1;
// while(angkotAwal <= 10) {
//     console.log('Angkot No. ' + angkotAwal + ' beroperasi dengan baik.')
//     angkotAwal++;
// }

// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// var noAngkot = 1; 

// var jmlAngkot = 10;
// var angkotAwal = 1;
// var angkotBeroperasi = 6;

// while (angkotAwal <= angkotBeroperasi) {
//     console.log('Angkot No. ' + angkotAwal + '  beroperasi dengan baik')
//     angkotAwal++;
// }

// for (angkotAwal = angkotBeroperasi + 1; angkotAwal <= jmlAngkot; angkotAwal++) {
//     console.log('Angkot No. ' + angkotAwal + ' tidak beroperasi dengan baik')
// }

// Latihan Pengulangan


// latihan sisa bagi / modulus
// var angka = prompt (`Masukkan angka :`);
// if (angka % 2 === 0) {
//     alert(angka + ' bilangan genap')
// } else if (angka % 2 === 1) {
//     alert(angka + ' bilangan ganjil')
// } else {
//     alert(``);
// }

// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//     if (noAngkot <= 6 && noAngkot !== 5) {
//         console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
//     } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5){
//         console.log('Angkot No. ' + noAngkot + ' sedang Mudik');
//     } else {
//         console.log('Angkot No. ' + noAngkot + ' tidak beroperasi dengan baik.');
//     }
// }

// let a = '';

// for (var i = 0; i <= 5; i++) {
//     a += '*';
// }
// console.log(a);

// Contoh switch case
// let huruf = prompt("Masukkan sebuah huruf ");

// switch (huruf.toLowerCase()) {
//     case 'a':
//     case 'b':
//     case 'c':
//     case 'd':
//     case 'e':
//     case 'f':
//     case 'g':
//     case 'h':
//     case 'i':
//     case 'j':
//     case 'k':
//     case 'l':
//     case 'm':
//     case 'n':
//     case 'o':
//     case 'p':
//     case 'q':
//     case 'r':
//     case 's':
//     case 't':
//     case 'u':
//     case 'v':
//     case 'w':
//     case 'x':
//     case 'y':
//     case 'z':
//         alert('kamu memilih huruf ' + huruf);
//         break;
//     default:
//         alert('Huruf ini bukan huruf alfabet');
// }


// // huruf alfabet
// let huruf = prompt ('masukan huruf ');

// if (huruf === 'a') {
//     alert('Huruf ini termasuk huruf alfabet');
// } else if (huruf === 'b') {
//     alert('Huruf ini termasuk huruf alfabet');
// } else if (huruf === 'c') {
//     alert('Huruf ini termasuk huruf alfabet');
// } 
// // Lanjutkan untuk huruf-huruf lainnya hingga z
// else if (huruf === 'z') {
//     alert('Huruf ini termasuk huruf alfabet');
// } else {
//     alert('Huruf ini bukan huruf alfabet');
// }


// Menghitung Volume Balok
// const itungVlmBalok = function (p, l, t) {
//     let hasil;
//     hasil = p * l * t;
 
//     return hasil;
// }
// console.log(itungVlmBalok(2, 2, 2));

// const tambah = (a, b) => a + b;
// console.log(tambah(2, 2))

// Latihan Array
// let array = ["hazel", "kamil", "widodo"]
  
// for ( a = 0; a < 3; a++) {
//     console.log(array[a])
// }

//  Latiham Array menggunakan method

// let array = ['hazel', 'kamil', 'yanto']

// array.push('asep');
// console.log(array);


// let array = ['hazel', 'kamil', 'yanto']

// array.unshift('jes');
// console.log(array);

// let array = ['hazel', 'kamil', 'yanto']

// array.shift();
// console.log(array);

// latihan array splice
// let array = ['hazel', 'kamil', 'yanto']
// // menambahkan element di index 1 yaitu 'udin'
// array.splice(1, 0, 'udin');
// console.log(array); // Output: ['hazel', 'udin', 'kamil', 'yanto']

// latihan array Slice
// let array = ['hazel', 'kamil', 'yanto', 'udin', 'asep'];
// let trySliced = array.slice(1, 4);
// console.log(trySliced.join('  ')); // Output: [kamil yanto udin]

// method length
// let array = ['ajel', 'rony', 'ridwan']
// console.log(array.length); 

// latihan array foreach
// const murid = ['ajel', 'rony', 'ridwan'];
// let olahraga = ['voli', 'bultang', 'sepakbola'];

// murid.forEach(function(m, o) {
//     console.log(m + ' suka olahraga ' + o);
// })

// latihan map
// const nomer = [2,4,6,8,10];
// const nomer2 = nomer.map(function(element) {
//     return element * 2;
// })
// console.log(nomer2.join(' ')); // output 4 8 12 20

// latihan sort
// let nomer = [1,2,4,3,6,5,8,7,10,9];
// nomer.sort();
// console.log(nomer.join(' ')); // output 1 10 2 3 4 5 6 7 8 9 ( mengurutkan dari angka pertamanya)

// let nomer = [1,2,4,3,6,5,8,7,10,9];
// nomer.sort(function (a, b){
//     return a-b;
// });
// console.log(nomer.join(' ')); // output  1 2 3 4 5 6 7 8 9 10

// latihan filter
// let nomer = [1,2,4,3,6,5,8,7,10,9];
// let nomer2 = nomer.filter(function (n) {
//     return n < 5;
// })
// console.log(nomer2.sort());

// latihan find
// let nomer = [10,2,4,3,6,5,8,7,1,9];
// let nomer2 = nomer.find(function (n) {
//     return n < 5;
// })
// console.log(nomer2);

// Membuat Objek Barang Keluar 

// let barangMasuk = {
//     kodeBarang : Math.random(),
//     jumlahBarang : '15',    
//     keterangan : 'sudahDipake',
//     Tgl_keluar : '2024-04-04'  ` `
// }

// // function declarasion
// function barangMasukObject( jumlah, 
//     keterangan, Tgl) {
//     let barangMasuk = {};
//     barangMasuk.kode = Math.random();           
//     barangMasuk.jumlah = jumlah;           
//     barangMasuk.keterangan = keterangan;           
//     barangMasuk.Tgl = Tgl;
//     return barangMasuk;           
// }                               

// //  Construktor
// function Barangmasuk(jumlah, keterangan, Tgl) {
//     this.kode = Math.random();
//     this.jumlah = jumlah;
//     this.keterangan= keterangan;
//     this.Tgl = Tgl;
// }

// let barangMasuk1 = barangMasukObject('15', 'sudahDipakai', '2024-04-04');
// let barnangMasuk2 = new barangMasuk('15', 'sudahDipakai', '2024-04-04') 

// Latihan Membuat Object di dalam Array 
// let hewan = [{
//     nama : "lumbaLumba",
//     jenis : "mamalia",
// },
// {
//     nama : "ayam",
//     jenis : "unggas",
// }
// ];

// hewan.forEach(function(e){
//     console.log(e.jenis)
// });

// latihan object literal
// let hewan = {
//     nama : "ayam",
//     jenis : "unggas", 
//     telur : 10,
//     makan: function (bertelur) {
//         this.telur += bertelur; 
//         console.log(`hai ${this.nama}, kamu sudah bertelur`)
//     }
// }

// latihan object function deklarasi
// function Pahlawan(nama, kekuatanAkhir) {
//     let pahlawan = {};
//     pahlawan.nama = nama;
//     pahlawan.kekuatan = kekuatanAkhir;

//     pahlawan.tambahKekuatan = function(marah) {
//         this.kekuatan += marah;
//         console.log(`Wow ${this.nama}, FullPower`)
//     }

//     pahlawan.terhit = function(hit) {
//         this.kekuatan -= hit;
//         console.log(`Duh ${this.nama}, kekutanmu melemah`)
//     }
//     return pahlawan;
// }
// let hazel = Pahlawan('hazel', 20);

// latihan object constraktor function
// function Pahlawan(nama, kekuatanAkhir) {
//     this.nama = nama;
//     this.kekuatan = kekuatanAkhir;

//     this.tambahKekuatan = function(marah) {
//         this.kekuatan += marah;
//         console.log(`Wow ${this.nama}, FullPower`)
//     }

//     this.terhit = function(hit) {
//         this.kekuatan -= hit;
//         console.log(`Duh ${this.nama}, kekutanmu melemah`)
//     }
// }
// let hazel =  new Pahlawan('hazel', 20);

// latihan Object Class
// class Murid {
//     constructor(nama, kelas, tanggalLahir, tempatLahir) {
//         this.nama = nama;
//         this.kelas = kelas;
//         this.tanggalLahir = tanggalLahir;
//         this.tempatLahir = tempatLahir;
//     }

//     hitungUmur() {
//         const hariIni = new Date();
//         const tanggalLahir = new Date(this.tanggalLahir);
//         let umur = hariIni.getFullYear() - tanggalLahir.getFullYear();
//         const selisihBulan = hariIni.getMonth() - tanggalLahir.getMonth();

//         if (selisihBulan < 0 || (selisihBulan === 0 && hariIni.getDate() < tanggalLahir.getDate())) {
//             umur--;
//         }

//         return umur;
//     }

//     perkenalan() {
//         const umur = this.hitungUmur();
//         return `Halo, nama aku ${this.nama}. Aku berumur ${umur} tahun.`;
//     }
// }

// const awalPerkenalan = new Murid("HAZEL", "XI RPL", "2006-08-26", "BOGOR");
// console.log(awalPerkenalan.perkenalan());

// let nama = 'hazel';
// let username = '@hazelft';

// function cetakUrl(username) {
//     let instragramUrl = 'http://instagram.com/';
//     return instragramUrl + username;
// } 
// console.log(cetakUrl(username))

// contoh closure
// function outerFunction() {
//     let outerVariable = 'Ini variabel luar';

//     function innerFunction() {
//         console.log(outerVariable); // Inner function memiliki akses ke variabel dari outer function
//     }

//     return innerFunction; // Mengembalikan inner function
// }

// // Panggil outerFunction dan simpan inner function yang dikembalikan
// const myInnerFunction = outerFunction();

// // Ketika myInnerFunction dipanggil, ia masih memiliki akses ke variabel outerVariable melalui closure
// myInnerFunction(); // Output: Ini variabel luar

// latihan execution context
// function satu() {
//     var nama = 'hazel';
//     console.log(nama);
// }
// function dua() {
//     console.log(nama);
// }

// console.log(nama);
// var nama = 'kamil'
// satu();
// dua('asep');
// console.log(nama);

// latihan arrow function 
// let barangMasuk = () => ([{kode: "A1001", namaBarang: "sapu", jumlah: 12, keterangan: "barangBaru"}]);
// console.log(barangMasuk());

// function expression menggunkan arrow function
// let nama = (nama) => {
//     return `halo ${nama}`;
// }
// console.log('hazel);

// let nama = (nama, umur) => {
//     return `${nama}, ${umur} `;
// }
// console.log('hazel, 10');

// latihan reduce
// const array = [2, 3, 4, 5];
// let arr = array.reduce((total, angka) => total + angka, 0); 
// console.log(arr);



// latihan map
// const array = [5, 6, 2, 3, 1];
// const hitungArray = array.map(a => a * 2);
// console.log(hitungArray);


// Tugas Menghitung seluruh di dalam array (arrow function)
// const hargaBarangBeli = [10000, 5000, 7000, 8000];
// let totalHarga = 0;

// const sumArray = (a, b) => { 
//     if (b < a.length) { 
//     totalHarga += a[b];
//     sumArray(a, b + 1)}};

// sumArray(hargaBarangBeli, 0);
// console.log(`10000 + 5000 + 7000 + 8000 = ${totalHarga}`);

// HTML Fragment
// const barangMasuk = {
//     kode : Math.random(),
//     nama : 'Sapu',
//     jumlah : 12,
//     keterangan : '',
// };

// const element = `<div class="barangMasuk">
//     <h2>${barangMasuk.nama}</h2>
//     <span class="jumlah">${barangMasuk.jumlah}</span>
// </div>`;

// console.log(barangMasuk);

// document.body.innerHTML = barangMasuk;

// Looping
// const barangMasuk = [
//     {
//         kode : Math.random(),
//         nama : 'Sapu',
//         jumlah : 12,
//         keterangan : '',
//     },
//     {
//         kode : Math.random(),
//         nama : 'Proyektor',
//         jumlah : 13,
//         keterangan : '',
//     },
//     {
//         kode : Math.random(),
//         nama : 'Mouse',
//         jumlah : 11,
//         keterangan : '',
//     },
// ];

// const element = `<div class="barangMasuk">
//     ${barangMasuk.map(b => `<ul>
//         <li>${b.kode}</li>
//         <li>${b.nama}</li>
//         <li>${b.jumlah}</li>
//         <li>${b.keterangan}</li>
//     `).join('')}
// </div>`;

// document.body.innerHTML = barangMasuk;

// tugas
// const createData = (murid, nilaiMurid, ibu, belanjaanIbu) => ({ murid: [murid, nilaiMurid], ibu: [ibu, belanjaanIbu] });

// const nilaiRatarata = (nilaiMurid, callback) => 
// callback(nilaiMurid.reduce((acc, cur) => acc + cur, 0) / nilaiMurid.length);

// const hitungTotalBelanja = (belanjaanIbu, callback) => 
// callback(belanjaanIbu.reduce((acc, cur) => acc + cur, 0));

// //pemanggilan fungsi
// const [murid, nilaiMurid] = ["Rony", [90, 67, 45]];
// const [ibu, belanjaanIbu] = ["Ibu Rony", [12000, 13000, 15000]];

// const averageNilai = nilaiRatarata(nilaiMurid, nilai => nilai);
// const totalBelanja = hitungTotalBelanja(belanjaanIbu, total => total);

// console.log("Data Murid:", murid);
// console.log("Nilai Rata-rata Murid:", averageNilai);
// console.log("Data Ibu:", ibu);
// console.log("Total Belanjaan Ibu:", totalBelanja);


// latihan synchrounus

// function sapa(nama) {
//     alert(`Selamat Datang , ${nama}`);
// }

// function tampilkanPesan(callback) {
//     const nama = prompt('Masukan Nama anda : ');
//     callback(nama);
// }
// tampilkanPesan(sapa);

// asynchrounus
// function getDatabarangMasuk(url, success, error) {
//     let xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = function() {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 success(xhr.response);
//             } else if (xhr.status === 404) {
//                 error();
//             }
//         }
//     }

//     xhr.open('GET', url); 
//     xhr.send();
// }

// console.log('mulai');
// getDatabarangMasuk('database/barangmasuk.json', results => {
//     const dtm = JSON.parse(results);   
//     dtm.forEach(m => console.log(m.nama))
// }, () => {

// });
// console.log('selesai');

