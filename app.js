const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 3000;

const session = require('express-session');
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')

const { body, validationResult, check } = require('express-validator');

require('./utils/db');
const Contact = require('./model/contact')

// SET UP EJS

//Menggunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
//Menggunakan middleware express.static
app.use(express.static('public'))
//Menggunakan middleware express.urlencoded()
app.use(express.urlencoded( {extended: true} ))

//Konfigurasi Flash
app.use(cookieParser('secret'));
app.use(session({
    cookie: { maxAge: 6000},
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(flash())

// Halaman Home
app.get('/', (req, res) => {
    const mhs = [
        {
            nama: "mhs1",
            email: "emailmhs1@gmail.com"
        },
        {
            nama: "mhs2",
            email: "emailmhs2@gmail.com"
        },
        {
            nama: "mhs3",
            email: "emailmhs2@gmail.com"
        },
        {
            nama: "mhs4",
            email: "emailmhs2@gmail.com"
        }
    ]
    res.render('index', {
        title: "Halaman Home",
        mhs,
        layout: "layouts/main-layout"
    });
})

// Halaman About
app.get('/about', (req, res) => {
    // res.sendFile('./about.html', {root: __dirname})
    res.render('about', {
        title: "Halaman About",
        layout: "layouts/main-layout"
    })
})

//Halaman Contact
app.get('/contact', async (req, res) => {
    const contacts = await Contact.find()
    
    res.render('contact', {
        title: "Halaman Contact",
        layout: "layouts/main-layout",
        contacts,
        msg: req.flash('pesan')
    })
})

//Halaman Form Tambah data kontak
app.get('/contact/add', (req, res) => {
    res.render('add-contact', {
        title: "Form Tambah Data Contact",
        layout: "layouts/main-layout"
    })
})

//Setting halaman Detail Contact
app.get('/contact/:nama', async (req, res) => {
    const contact = await Contact.findOne({nama: req.params.nama})

    res.render('detail', {
        title: "Halaman Detail Contact",
        layout: "layouts/main-layout",
        contact,
    })
})

//Proses penyimpanan data
app.post('/contact', [
    body('nama').custom(async (value) => {
        const duplikat = await Contact.findOne({nama: value})
        if(duplikat){
            throw new Error('Nama yang diinput sudah ada. Silahkan gunakan nama lain!')
        }
        return true
    }),
    check('email', 'Email yang diinput tidak valid!').isEmail(),
    check('nohp', 'No HP yang diinput tidak valid!').isMobilePhone('id-ID')
], (req, res) => {
    const errors = validationResult(req);

    //Lakukan pengecekan errors, apakah ada isinya atau tidak
    if(!errors.isEmpty()){
        // return res.status(400).json({ errors: errors.array() });
        res.render('add-contact', {
            title: "Form Tambah Data Contact",
            layout: "layouts/main-layout",
            errors: errors.array()
        })
    
    } else{
        Contact.insertMany(req.body, (error, Result) => {
            req.flash('pesan', 'Data contact berhasil ditambahkan') // Setting flash massage
            res.redirect('/contact') //Setelah data disimpan maka langsung tampil halaman '/contact'

        });
    }
})


app.listen(port, () => {
    console.log(`Mobile App Aplication | Listening at http://localhost:${port}`)
})