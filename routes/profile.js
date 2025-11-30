
const express = require('express');
const router = express.Router();


const profiles = [
    { nim: 'FD2200123', nama: 'Budi Santoso', prodi: 'Informatika' },
    { nim: 'FD2200124', nama: 'Siti Aminah', prodi: 'Sistem Informasi' },
    { nim: 'FD2200125', nama: 'Andi Wijaya', prodi: 'Teknik Komputer' },
    { nim: 'F1D022013', nama: 'MUHAMMAD ANHAR SOLIHIN', prodi: 'Teknik INFORMATIKA' }
];


router.get('/', (req, res) => {
    res.json({
        message: 'Daftar Mahasiswa',
        data: profiles
    });
});


router.get('/:nim', (req, res) => {
    const nim = req.params.nim;
    
    const user = profiles.find(p => p.nim === nim);

    if (user) {
        res.json({
            message: 'Detail Mahasiswa Ditemukan',
            data: user
        });
    } else {
        res.status(404).json({
            message: 'Mahasiswa tidak ditemukan',
            requested_nim: nim
        });
    }
});

module.exports = router;