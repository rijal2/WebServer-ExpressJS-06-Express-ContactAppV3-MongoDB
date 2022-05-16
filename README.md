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




