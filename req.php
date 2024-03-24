<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nama = $_POST['nama'];
    $jurusan = $_POST['jurusan'];
    $angkatan = $_POST['angkatan'];
    // Email pengembang
    $email_pengembang = 'panggabeanrivaldy@gmail.com';

    // Subjek dan isi email
    $subjek = 'Data dari Formulir';
    $pesan = "Nama: $nama\nJurusan: $jurusan\nAngkatan: $angkatan";

    // Kirim email
    $status = mail($email_pengembang, $subjek, $pesan);
    
 
}
?>
