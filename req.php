if(isset($_POST['submit'])) {
    $nama = $_POST['nama'];
    $jurusan = $_POST['jurusan'];
    $angkatan = $_POST['angkatan'];
    
    $to = 'panggabeanrivaldy@gmail.com'; // Ganti dengan alamat email developer
    $subject = 'Pesan dari Formulir Website';
    $message = 'Nama: ' . $nama . "\r\n" .
               'jurusan: ' . $jurusan . "\r\n" .
               'angkatan: ' . $angkatan;
    
    // Kirim email
    mail($to, $subject, $message);
    
    // Redirect kembali ke halaman awal atau halaman "terima kasih"
    header('Location: form.html');
}
