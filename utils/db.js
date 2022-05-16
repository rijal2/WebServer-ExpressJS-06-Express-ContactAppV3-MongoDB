const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/mern1', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})

// Membuat Schema
const Contact = mongoose.model('Contact', {
    nama : {
        type: String,
        required: true
    },
    nohp : {
        type: String,
        required: true
    },
    email : {
        type: String,
        
    }
})

// Mencoba menambahkan 1 data
const contact1 = new Contact({
    nama: "Qulo Piyambak",
    nohp: "082233537777",
    email: "okkjek@gmail.com"
})

// Menyimpan Kontak
contact1.save().then((con) => {
    console.log(con)
})