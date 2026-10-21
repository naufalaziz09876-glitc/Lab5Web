# Lab5Web
1.Menampilkan output
<img width="1920" height="1051" alt="image" src="https://github.com/user-attachments/assets/284b09d5-457f-4249-a90e-dbe74b4c23b8" />
<img width="1920" height="1051" alt="Code_Yq6emYxfep" src="https://github.com/user-attachments/assets/6b8df43d-b5bd-4c88-b345-9546e2a8a312" />
disini terlihat yang muncul pada bagian web index.html adalah pengenalan Javascript sebagai heading dan Konten awal sebagai paragraf
<img width="1920" height="1051" alt="image" src="https://github.com/user-attachments/assets/45b3f67a-fc4b-4d38-8af6-4f3e65db7509" />11
<img width="1920" height="1051" alt="image" src="https://github.com/user-attachments/assets/fadc0b4d-b922-4414-858f-aebb82218c99" />
lalu Javascript mengubah isi dari paragraf tersebut menjadi hello world dari kode document.getElementById("pesan").textContent = "Hello World";
2.Alert dan Prompt
<img width="1920" height="1051" alt="image" src="https://github.com/user-attachments/assets/8e297abc-e76a-47d7-8741-66a3194f8fd2" />
disini kita menggunakan fungsi const yang digunakan untuk memunculkan pop up ketika user masuk ke web kita
<img width="1920" height="1051" alt="image" src="https://github.com/user-attachments/assets/6f226ae2-b598-4d61-91b5-21333897c5d8" />
nah nanti pop up yang muncul adalah sebagai berikut
<img width="1920" height="1051" alt="image" src="https://github.com/user-attachments/assets/e2e99f40-5da0-4ecb-8b56-f685d171eb62" />
ini output jika kita mengisi kolom tersebut dengan nama kita
<img width="1920" height="1051" alt="image" src="https://github.com/user-attachments/assets/83895708-9804-48fd-b6d9-67aca18ee498" />
nah ini yang terjadi ketika kita tidak mengisi nama kita atau mengklik tombol cancel, kenapa hasilnya sama karena menggunakan if-else yang saat kita mengklik tombol cancel maka sama saja tidak mengisi kolom nama
3.function dan operasi aritmatika
<img width="447" height="81" alt="image" src="https://github.com/user-attachments/assets/be13ba14-f29e-4435-b683-351f65e64805" />
<img width="589" height="496" alt="image" src="https://github.com/user-attachments/assets/dd8d85c2-fa7d-4a76-a5a0-95da9634a6d0" />
<img width="548" height="280" alt="image" src="https://github.com/user-attachments/assets/9877f282-e4cf-4fb9-b775-3af3444b9249" />
-HTML punya kolom dengan id, tombol, dan tempat kosong (hasil).
-Tombol diklik, lalu memanggil hitung() di script.js.
-hitung() mengambil angka dari kolom (getElementById(...).value).
-hitung() menghitung, lalu menulis hasilnya ke hasil (.innerHTML = ...).
<img width="662" height="254" alt="image" src="https://github.com/user-attachments/assets/a880ac30-80f3-4a68-81b0-92c0c7e59e4d" />
<img width="506" height="66" alt="image" src="https://github.com/user-attachments/assets/e0ebb450-c825-41d1-89a9-a8aea9dbe145" />
-prompt(...) memunculkan kotak input, dan jawabannya disimpan di inputNilai dalam bentuk teks (string).
-Number(inputNilai) mengubah teks itu menjadi angka dan menyimpannya di nilaiMahasiswa. Ini yang dimaksud soal: “prompt menghasilkan string sehingga masukan numerik perlu dikonversi”.
-if pertama memeriksa input yang tidak valid:
-inputNilai === null: pengguna menekan Cancel.
-inputNilai.trim() === "": pengguna mengosongkan input atau hanya mengetik spasi. Pemeriksaan ini perlu karena Number("") hasilnya 0, jadi input kosong akan lolos sebagai nilai 0.
-Number.isNaN(nilaiMahasiswa): yang diketik bukan angka, misalnya "abc".
-nilaiMahasiswa < 0 || nilaiMahasiswa > 100: di luar rentang 0-100.
<img width="456" height="155" alt="image" src="https://github.com/user-attachments/assets/42b92450-488f-4b0b-a168-d72fb7ebc78b" />
-else if (nilaiMahasiswa >= 60) berarti input valid dan nilainya minimal 60, jadi Lulus.
<img width="457" height="149" alt="image" src="https://github.com/user-attachments/assets/e8d1d6dc-0b8c-4354-b5d3-bcbdf20992d8" />
-else berarti input valid tetapi nilainya di bawah 60, jadi Belum lulus
<img width="436" height="211" alt="image" src="https://github.com/user-attachments/assets/a2f7bca2-468b-427d-bf68-7823d3006da0" />
<img width="434" height="57" alt="image" src="https://github.com/user-attachments/assets/6089b8ca-4e5d-4654-a8bd-5bbb1bc21f65" />
-Tombol diklik, lalu pilihAngka() jalan.
-prompt(...) memunculkan kotak input, dan jawabannya disimpan di inputPilihan sebagai teks (string).
-switch membandingkan inputPilihan dengan setiap case.
<img width="449" height="154" alt="image" src="https://github.com/user-attachments/assets/bdca16a4-cb9f-45c2-be74-3d537a412d0a" />
-Kalau cocok, alert(...) menampilkan nama bilangannya, lalu break menghentikan switch.
<img width="453" height="149" alt="image" src="https://github.com/user-attachments/assets/9b080d7a-4cd7-4f6a-8d3e-70b362867a48" />
-Kalau tidak ada yang cocok (misalnya 7, abc, atau kosong), default yang jalan.
<img width="497" height="257" alt="image" src="https://github.com/user-attachments/assets/8e5135e4-906b-4176-87f8-fd939334c55e" />
<img width="499" height="94" alt="image" src="https://github.com/user-attachments/assets/76dd2932-0f22-4466-b2d1-09a4095f477d" />
-Pengguna mengetik angka, lalu klik Periksa.
-cekBilangan() mengambil isi kolom dengan .value. Hasilnya berupa teks, jadi disimpan di input.
-Number(input) mengubahnya menjadi angka (angka).
-hasil menyimpan elemen <p id="hasilBilangan">, yaitu tempat pesan akan ditulis.
-if pertama memeriksa input tidak valid:
<img width="438" height="142" alt="image" src="https://github.com/user-attachments/assets/03d7c9f8-62a8-42fe-9570-deda8c9b7ed3" />
-input.trim() === "": kolom kosong. Ini perlu dicek karena Number("") hasilnya 0, sehingga kosong akan dianggap genap.
-!Number.isInteger(angka): bukan bilangan bulat, misalnya 3.5.
-else if (angka % 2 === 0): sisa bagi 2 sama dengan 0, jadi genap.
<img width="458" height="117" alt="image" src="https://github.com/user-attachments/assets/3652257e-8efc-4fbb-93e4-be490c13ca5e" />
-else: sisanya ganjil.
<img width="455" height="133" alt="image" src="https://github.com/user-attachments/assets/0f99ef3b-6e6d-4eec-94f6-02080a8f64c5" />
-hasil.textContent = "..." menulis pesan ke paragraf di halaman.
<img width="424" height="66" alt="image" src="https://github.com/user-attachments/assets/faa79531-04e3-4ff0-bd25-828946306500" />
<img width="668" height="83" alt="image" src="https://github.com/user-attachments/assets/db91c469-d86c-49e2-a116-8660649d48fe" />
-Pengguna klik salah satu tombol, misalnya Latar Hijau.
-Tombol itu memanggil ubahWarnaLatar('lightgreen').
-Teks 'lightgreen' masuk ke parameter warna di function.
<img width="1920" height="1051" alt="image" src="https://github.com/user-attachments/assets/06aa81e3-401c-4b43-bb7d-53776e2dd01f" />
-document.body adalah elemen <body> halaman.
-.style.backgroundColor = warna mengubah warna latar <body> menjadi nilai warna.
<img width="717" height="101" alt="image" src="https://github.com/user-attachments/assets/9eb21876-d013-4951-82a4-ba89baee0089" />
<img width="638" height="151" alt="image" src="https://github.com/user-attachments/assets/f0c455a6-1582-40e3-9bcf-64ff4fd6e0d4" />
-querySelectorAll(".menu") mengambil ketiga checkbox dan menyimpannya di daftarMenu.
-forEach memasang addEventListener("change", hitungTotal) pada setiap checkbox. Artinya: setiap kali checkbox dicentang atau dilepas (event change), jalankan hitungTotal.
-hitungTotal() mulai dari total = 0, lalu mengecek semua checkbox satu per satu.
<img width="242" height="140" alt="image" src="https://github.com/user-attachments/assets/dbd4e075-1baa-4f44-bdf0-7908ce25a9f7" />
-item.checked bernilai true kalau dicentang. Kalau ya, Number(item.value) mengubah value yang berupa teks ("5000") menjadi angka, lalu ditambahkan ke total.
<img width="207" height="137" alt="image" src="https://github.com/user-attachments/assets/34bbddd0-b991-417c-9650-50f4eed07cf2" />
-toLocaleString("id-ID") memformat angka dengan pemisah ribuan gaya Indonesia, jadi 7500 tampil sebagai 7.500.
<img width="224" height="112" alt="image" src="https://github.com/user-attachments/assets/1ebe1017-991f-45cc-a482-fb74972c9c9e" />
-.textContent = ... menulis hasilnya ke <span id="total">.
