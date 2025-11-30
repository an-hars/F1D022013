
const express = require('express');
const app = express();
const port = 3000;


const math = require('./utils/math');
const profileRouter = require('./routes/profile');


app.use(express.json());


app.get('/', (req, res) => {

    res.send('Halo, nama saya muhammad anhar solihin dengan NIM f1d022013'); 
});


app.get('/hitung', (req, res) => {
    const a = 10;
    const b = 5;
    const hasil = math.tambah(a, b);
    
    res.send(`Hasil penjumlahan ${a} + ${b} adalah ${hasil}`);
});


app.use('/profile', profileRouter);


app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});