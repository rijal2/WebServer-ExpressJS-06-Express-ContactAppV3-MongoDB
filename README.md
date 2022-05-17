# WebServer-ExpressJS-06-Express-ContactAppV3-MongoDB
Melanjutkan sesi sebelumnya.
Kali ini akan mengubah database dari JSON ke MongoDB

01. Buat terlebih dahulu file entri point app.js
02. Tambahkan juga file .gitignore, agar tidak semua file terbaca oleh git
03. Inisialisasi NPM dengan mengetikkan perintah "npm init -y" pada terminal
04. Install express dengan perintah "npm i express@4.17.1"
05. Install ejs dengan perintah "npm i ejs@3.1.6"
06. Install express ejs layouts dengan perintah "npm i express-ejs-layouts@2.5.0"
07. Require ketiga module yang sudah diinstall tersebut pada file entri point nya, app.js
08. Jangan lupa instal juga nodemon agar aplikasi dapat aktif secara otomatis ketika terjadi perubahan.

SKENARIONYA adalah mengopy file maupun folder yang dibutuhkan dari sesi latihan sebelumnya.

01. Copy metode app.get() yang merespon halaman home.
02. Copy folder beserta isinya, yang berkaitan dengan halaman home. Yaitu folder view dan public. Copy semuanya. Sampai disini tampilan dibrowser masih error, tinggal melakuka setup tampilan ejs.
03. Setup tampilan ejs.
04. Copy metode app.get() yang merespon halaman about.
05. Copy metode app.get() yang merespon halaman contact. Jangan jalankan dulu metode ini karena didalamnya terdapat function yang tidak dikenali, yaitu function loadContact().
const contacts = loadContact()

Ket: Function tersebut adalah yang bertugas untuk menampilkan data-data yang disimpan didalam file JSON. Karena pada sesi ini akan menggunakna mongoDB sebagai penimpanan datanya maka function ini sudah tidak dibutuhkan lagi.

MENGHUBUNGKAN APLIKASI DENGAN MONGODB MENGGUNAKAN MONGOOSE
01. Sebelum melakukan download module mongoose, buat folder "utils" terlebih dahulu. Pada latihan sebelumnya folder ini berfungsi sebagai penyimpan file js yang berisi function-function untuk pengolahan data dan pengubah isi file contacts.json
02. Didalam folder "utils" buat file "db.js", didalam file ini lah konfigurasi agar terhubung dengan mongoose dilakukan.
03. Lakukan download module mongoose terlebih dahulu dengan menjalankan perintah berikut pada terminal
    npm i mongoose@5.12.13
04. Lakukan konfigurasi agar mongoos eterhubung dengan aplikasi.

05. Buat Schema data di dalam file db.js, kemudian trial hingga berhasil.
06. Pisahkan schema yang telah dibuat ke dalam folder tersendiri, sebab bisa jadi akan ada banyak schema yang nanti dibutuhkan. Buat Folder Bernama "Model", di dalam nya buat file js yang akan berfungsi untuk mendfinisikan masing-masing schema.

07. Export dan require ke dalam app.js
08. Pada file app.js Require juga koneksi ke MongoDB nya yang ada di './utils/db.js'
09. Copy metode app.get() yang merespon halaman contact yang ada di dalam file app.js di sesi latihan sebelumnya.
10. Ubah function loadContact() yang sebelumnya mengelola data dari file JSON, menjadi function yang mengelola data di mongoDB, yaitu Contact.find().
11. Funtion tersebut masih berbentuk promise, sehingga untuk menampilkan datanya perlu diubah menjadi bentuk async await. Jadi ubah dulu menjadi async await.

    Ket:
    Seharusnya semua sudah sesuai dan bisa di tampilkan, tapi karena ada beberapa detail yang perlu di instal maka muncul error seperti berikut

    "TypeError: req.flash"

    error tersebut berasal dari module flash massage yang diterapkan di view, tetapi belum diinstall di module kerja saat ini. Oleh karena itu install dan konfigurasi dulu semua kebutuhan terkait flash massage seperti pada sesi latihan sebelumnya.

INSTALL FLASH MASSAGE
01. Install module express-session, "npm i express-session@1.17.2"
02. Install module cookie-parser, "npm i cookie-parser@1.4.5"
03. Install module connect-flash, "npm i connect-flash@0.1.1"
04. Lakukan require dan konfigurasi seperti pada sesi latihan sebelumnya

TAMPILKAN HALAMAN DETAIL
01. Copy metode app.get() yang merespn halaman detail contact.
02. ubah Function findContact(), menjadi Contact.findOne(), sebab aplikasi sudah terhubung dengan mongoDB bukan lagi dengan file JSON.
03. Sesuaikan function tersebut menjadi async await, karena sebelumnya masih berupa promise.
04. Masukkan filter nya, mau dicari berdasarkan nama, maka tulis:

    Contact.findOne({nama: req.params.nama})

MENAMPILKAN HALAMAN FORM TAMBAH DATA
01. Copy metode app.get() yang merespon halaman form tambah data
02. Copy metode app.post() yang menangani proses tambah data
03. Karena didalam metode app.post() terdapat validasi, maka install express-validator@6.12.0 dan require kedalam app.js .
04. Ubah function cekDuplikat() menjadi Contact.findOne() . Ingat bentuk function tersebut masih berupa promise, agar bisa digunakan dan datanya tebaca maka tambahkan async-await.

MENGATUR PROSES DELETE CONTACT
Pada sesi latihan ini sudah tidak akan menggunakan metode app.get() lagi dalam melakukan penghapusan data, tetapi menggunakan app.delete() . Sedangkan Didalam node js hanya dikenal dua metode yaitu app.get() dan app.post(), untuk mengatasi hal itu maka kita butuh modul npm yang bernama methode-override.

01. Lakuakn instalasi modul npm i method-override@3.0.0