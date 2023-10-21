// import express
import express from "express";

// init express router
const router = express.Router();

router.get('/biodata/:nama/:tempat/:tanggal/:jenisKelamin/:agama/:alamat/:telepon/:email/:hobi/:citacita', (req, res) => {
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat;
    var tanggal_lahir = req.params.tanggal;
    var jenis_kelamin = req.params.jenisKelamin;
    var agama = req.params.agama;
    var alamat = req.params.alamat;
    var telepon = req.params.telepon;
    var email = req.params.email;
    var hobi = req.params.hobi;
    var cita_cita = req.params.citacita;
    res.send(
        'Nama : ' + nama + '<br>' +
        'Tempat Lahir : ' + tempat_lahir + '<br>' +
        'Tanggal lahir : ' + tanggal_lahir + '<br>' +
        'Jenis kelamin : ' + jenis_kelamin + '<br>' +
        'Agama : ' + agama + '<br>' +
        'Alamat : ' + alamat + '<br>' +
        'Telepon : ' + telepon + '<br>' +
        'Email : ' + email + '<br>' +
        'Hobi : ' + hobi + '<br>' +
        'Cita-cita : ' + cita_cita + '<br>'
    );
});

router.get('/aritmatika', (req, res) => {
    var bilangan1 = 10;
    var bilangan2 = 5;
    var tambah = bilangan1 + bilangan2;

    var bilangan3 = 15;
    var bilangan4 = 5;
    var kurang = bilangan3 - bilangan4;

    var bilangan5 = 20;
    var bilangan6 = 5;
    var bagi = bilangan5 / bilangan6;

    var bilangan7 = 20;
    var bilangan8 = 5;
    var kali = bilangan7 * bilangan8;

    res.send(
        '<h3>Penjumlahan</h3>' +
        'Bilangan ke 1 : ' + bilangan1 + '<br>' +
        'Bilangan ke 2 : ' + bilangan2 + '<br>' +
        'Hasil : ' + tambah + '<hr>' +

        '<h3>Pengurangan</h3>' +
        'Bilangan ke 1 : ' + bilangan3 + '<br>' +
        'Bilangan ke 2 : ' + bilangan4 + '<br>' +
        'Hasil : ' + kurang + '<hr>' +

        '<h3>Pembagian</h3>' +
        'Bilangan ke 1 : ' + bilangan5 + '<br>' +
        'Bilangan ke 2 : ' + bilangan6 + '<br>' +
        'Hasil : ' + bagi + '<hr>' +

        '<h3>Perkalian</h3>' +
        'Bilangan ke 1 : ' + bilangan7 + '<br>' +
        'Bilangan ke 2 : ' + bilangan8 + '<br>' +
        'Hasil : ' + kali + '<hr>' 

    );
});


router.get('/bangun_datar', (req, res) => {
    var panjang = 5;
    var lebar = 5;
    var kali = panjang * lebar;

    var panjang1 = 20;
    var lebar1 = 10;
    var kali1 = panjang1 * lebar1;

    var sisi1 = 20;
    var sisi2 = 20;
    var sisi3 = 20;
    var tambah = sisi1 + sisi2 + sisi3;

    var v = 3.14;
    var jari_jari = 6;
    var kali3 = v * jari_jari;

    res.send(
        '<h3>Persegi</h3>' +
        'Luas = panjang x lebar <br>' +
        'Panjang : ' + panjang + '<br>' +
        'Lebar : ' + lebar + '<br>' +
        'Hasil : ' + kali + '<hr>' +

        '<h3>Persegi panjang</h3>' +
        'Luas = panjang x lebar <br>' +
        'Panjang : ' + panjang1 + '<br>' +
        'Lebar : ' + lebar1 + '<br>' +
        'Hasil : ' + kali1 + '<hr>' +

        '<h3>Segitiga sama sisi</h3>' +
        'sisi + sisi + sisi <br>' +
        'sisi 1 : ' + sisi1 + '<br>' +
        'sisi 2 : ' + sisi2 + '<br>' +
        'sisi 3 : ' + sisi3 + '<br>' +
        'Hasil : ' + tambah + '<hr>' +

        '<h3>Lingkaran</h3>' +
        'v x jari-jari <br>' +
        'v : ' + v + '<br>' +
        'jari-jari : ' + jari_jari + '<br>' +
        'Hasil : ' + kali3 + '<hr>'
        
    );
});

router.get('/tes/:nama/:kelas/:pts/:pas', (req, res) => {
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pas + pts) / 2;

    if (rapot >= 90 && rapot <= 100) {
        var grade = "Grade A";
    } else if(rapot >= 80) {
        var grade = "Grade B";
    } else if (rapot >= 70) {
        var grade = "Grade C";
    } else if (rapot >= 60) {
        var grade = "Grade D";
    } else if (rapot >= 50) {
        var grade = "Grade E";
    } else if (rapot >= 0) {
        var grade = "Sing getol diajar";
    } else {
        var grade = "Nilai tidak valid";
    }

    res.send(
        'Nama : ' + nama + '<br>' +
        'Kelas : ' + kelas + '<br>' +
        'Nilai PTS : ' + pts + '<br>' +
        'Nilai PAS : ' + pas + '<br>' +
        'Nilai Rapot : ' + rapot + '<br>' +
        'Keterangan : ' + grade 
    );
});

router.get('/bersarang/:nama/:jurusan/:kelas', (req, res) => {
    
    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;

    if (jurusan == 'RPL') {
        if (kelas == '10 RPL') {
            var ket = "Anda kelas 10 RPL";
        } else if (kelas == '11 RPL') {
            var ket = "Anda kelas 11 RPL";
        } else if (kelas == '12 RPL') {
            var ket = "Anda kelas 12 RPL";
        } else {
            var ket = "Anda alumni coyyy";
        }
    } else if (jurusan == 'TKRO') {
        if (kelas == '10 TKRO 1') {
            var ket = "Anda kelas 10 TKRO";
        } else if (kelas == '11 TKRO') {
            var ket = "Anda kelas 11 TKRO";
        } else if (kelas == '12 TKRO') {
            var ket = "Anda kelas 12 TKRO";
        } else {
            var ket = "Anda alumni coyyy";
        }
    } else if (jurusan == 'TBSM') {
        if (kelas == '10 TBSM 1') {
            var ket = "Anda kelas 10 TBSM";
        } else if (kelas == '11 TBSM') {
            var ket = "Anda kelas 11 TBSM";
        } else if (kelas == '12 TBSM') {
            var ket = "Anda kelas 12 TBSM";
        } else {
            var ket = "Anda alumni coyyy";
        }
    } else {
        var ket = "Jurusan tidak tersedia";
    }

    res.send(
        'Nama : ' + nama + '<br>' +
        'Jurusan : ' + ket
    );
});

router.get('/starbak/:nama/:tanggal/:jeniss/:pesanan/:jumlah', (req, res) => {
    var nama = req.params.nama;
    var tanggal = req.params.tanggal;
    var jeniss = req.params.jeniss;
    var pesanan = req.params.pesanan;
    var jumlah = req.params.jumlah;
    
    
    if (jeniss == 'Makanan') {
        if (pesanan == 'Nasi Goreng') {
            var harga = 20000;
        } else if (pesanan == 'Mie Goreng') {
            var harga = 30000;
        } else if (pesanan == 'Ayam Goreng') {
            var harga = 40000;
        } else {
            var harga = "Harga tidak tersedia";
        }
    } else if (jeniss == 'Minuman') {
        if (pesanan == 'Air Mineral') {
            var harga = 10000;
        } else if (pesanan == 'Jus') {
            var harga = 20000;
        } else if (pesanan == 'Kopi') {
            var harga = 30000;
        } else {
            var harga = "Harga tidak tersedia";
        }
    } else {
        var harga = "Makanan dan minuman tidak tersedia";
    }

    var total = jumlah * harga
    if (total >= 100000) {
        var diskon = total * 0.5
    } else {
        var diskon = 0
    }
    var totalbayar = total - diskon

    res.send(
        '<h3>Sturbuck Lokal</h3>' +
        'Nama Pembeli : ' + nama + '<br>' +
        'Tanggal : ' + tanggal + '<br>' +
        'Jenis : ' + jeniss + '<br>' +
        'Pesanan : ' + pesanan + '<br>' +
        'Jumlah : ' + jumlah + '<br>' +
        'Harga : ' + harga + '<br>' +
        '-----------------------------------------------------' + '<br>' +
        'Total : ' + total + '<br>' +
        'Diskon 50% : ' + diskon + '<br>' +
        'Total Bayar : ' + totalbayar + '<br>' +
        '-----------------------------------------------------' + '<br>' +
        '>>>>> TERIMA KASIH <<<<<'
    );
});

router.get('/sample', (req, res) => {
    
    res.send(
        '<h3>Selamat Datang</h3>'
    );
});

// express default router
export default router;