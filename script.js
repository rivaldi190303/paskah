// Function to handle form submission
    function submitForm() {
      // Mengambil nilai input dari formulir
      var nama = document.getElementById('nama').value;
      var jurusan = document.getElementById('jurusan').value;
      var angkatan = document.getElementById('angkatan').value;

      // Membuat objek data
      var data = {
        nama: nama,
        jurusan: jurusan,
        angkatan: angkatan
      };

      // Mengambil data yang sudah ada atau membuat array baru
      var existingData = JSON.parse(localStorage.getItem('data')) || [];

      // Menambahkan data baru ke array
      existingData.push(data);

      // Menyimpan array data kembali ke localStorage
      localStorage.setItem('data', JSON.stringify(existingData));

      alert('Data berhasil disimpan!');
    }
      
    ;

  // You can perform further actions with the form data here,
  // such as sending it to a server using AJAX or processing it locally

  // For this example, let's just log the form data to the console

// Function to display thank you message
function showThankYou() {
  // Prevent form submission
  event.preventDefault();
  
  // Hide registration form
  document.getElementById('registrationForm').style.display = 'none';

function showThankYou() {
    if (document.getElementById("persetujuan").checked) 
    {
      alert("Anda harus menyetujui persyaratan pendaftaran.");
      return false;
    }
  }
function showThankYou() {
    // Sematkan pesan terima kasih
    var thankYouDiv = document.getElementById("thankYou");
    thankYouDiv.style.display = "block";
var waDiv = document.getElementById("wa");
  waDiv.style.display = "block";
    // Sembunyikan formulir
    var formDiv = document.getElementById("registrationForm");
    formDiv.style.display = "none";

    // Sembunyikan gambar angka dua
    var img2Div = document.getElementById("img2");
    img2Div.style.display = "none";

    // Sembunyikan submit button
    var submitButtonDiv = document.getElementById("submitbutton");
    submitButtonDiv.style.display = "none";
  }
  // Show thank you message
document.getElementById("persetujuan").style.display= "none"; document.getElementById('thankYou').style.display = 'block';
}

// Function to close window
function closeWindow() {
  // Close window
  window.close();
}
// Add event listener to form submission
document.getElementById('registrationForm').addEventListener('submit', submitForm);
