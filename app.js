const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 3000;

// SET UP EJS

//Menggunakan ejs
app.set('view engine', 'ejs');
app.use(expressLayouts);
//Menggunakan middleware express.static
app.use(express.static('public'))
//Menggunakan middleware express.urlencoded()
app.use(express.urlencoded( {extended: true} ))

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
app.get('/contact', (req, res) => {
    // res.sendFile('./contact.html', {root: __dirname})
    const contacts = loadContact()
    
    res.render('contact', {
        title: "Halaman Contact",
        layout: "layouts/main-layout",
        contacts,
        msg: req.flash('pesan')
    })
})

app.listen(port, () => {
    console.log(`Mobile App Aplication | Listening at http://localhost:${port}`)
})