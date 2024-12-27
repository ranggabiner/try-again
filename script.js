// Menunggu seluruh konten HTML selesai dimuat
document.addEventListener("DOMContentLoaded", function () {
  // Ambil nilai count dari localStorage
  let count = localStorage.getItem("visitorCount");

  // Jika belum ada, inisialisasi jadi 0
  if (!count) {
    count = 0;
  } else {
    // Jika sudah ada, ubah tipe data jadi number
    count = parseInt(count, 10);
  }

  // Tambah jumlah pengunjung (+1)
  count++;

  // Simpan kembali ke localStorage
  localStorage.setItem("visitorCount", count);

  // Tampilkan di elemen <span id="visitorCount">
  document.getElementById("visitorCount").textContent = count;
});
