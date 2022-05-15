const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express()
const port = 3000;

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

app.listen(port, () => {
    console.log(`Mobile App Aplication | Listening at http://localhost:${port}`)
})