// script.js
document.getElementById("pesan2").textContent = "Hello World";
console.log("Hello World");
const namaPengguna = prompt("Masukkan nama Anda:", "");
if (namaPengguna && namaPengguna.trim() !== "") {
alert("Halo, " + namaPengguna + "!");
document.getElementById("pesan1").textContent = "Selamat datang, " + namaPengguna + ".";
} else {
alert("Nama belum diisi.");
}
function operasiDasar(a, b) {
  console.log("Penjumlahan:", a + b);
  console.log("Pengurangan:", a - b);
  console.log("Perkalian:", a * b);
  console.log("Pembagian:", b !== 0 ? a / b : "Tidak dapat dibagi nol");
  console.log("Modulus:", a % b);
}

function hitung() {
  // 1. Ambil nilai dari kolom input
  var a = Number(document.getElementById("angkaA").value);
  var b = Number(document.getElementById("angkaB").value);

  var pembagian = b !== 0 ? a / b : "Tidak dapat dibagi nol";

  document.getElementById("hasil").innerHTML =
    "Penjumlahan: " + (a + b) + "<br>" +
    "Pengurangan: " + (a - b) + "<br>" +
    "Perkalian: " + (a * b) + "<br>" +
    "Pembagian: " + pembagian + "<br>" +
    "Modulus: " + (a % b);

  operasiDasar(a, b);
}
function cekNilai() {
  const inputNilai = prompt("Masukkan nilai (0-100):");
  const nilaiMahasiswa = Number(inputNilai);

  if (inputNilai === null || inputNilai.trim() === "" ||
      Number.isNaN(nilaiMahasiswa) || nilaiMahasiswa < 0 || nilaiMahasiswa > 100) {
    alert("Input nilai tidak valid.");
  } else if (nilaiMahasiswa >= 60) {
    alert("Lulus");
  } else {
    alert("Belum lulus");
  }
}
function pilihAngka() {
  const inputPilihan = prompt("Masukkan angka 1-5:");
  switch (inputPilihan) {
    case "1": alert("Bilangan satu"); break;
    case "2": alert("Bilangan dua"); break;
    case "3": alert("Bilangan tiga"); break;
    case "4": alert("Bilangan empat"); break;
    case "5": alert("Bilangan lima"); break;
    default: alert("Pilihan tidak tersedia");
  }
}
function cekBilangan() {
  const input = document.getElementById("bilangan").value;
  const angka = Number(input);
  const hasil = document.getElementById("hasilBilangan");

  if (input.trim() === "" || !Number.isInteger(angka)) {
    hasil.textContent = "Masukkan bilangan bulat yang valid.";
  } else if (angka % 2 === 0) {
    hasil.textContent = "Bilangan genap";
  } else {
    hasil.textContent = "Bilangan ganjil";
  }
}
function ubahWarnaLatar(warna) {
  document.body.style.backgroundColor = warna;
}
const daftarMenu = document.querySelectorAll(".menu");
daftarMenu.forEach((item) => {
  item.addEventListener("change", hitungTotal);
});

function hitungTotal() {
  let total = 0;
  daftarMenu.forEach((item) => {
    if (item.checked) total += Number(item.value);
  });
  document.getElementById("total").textContent = total.toLocaleString("id-ID");
}