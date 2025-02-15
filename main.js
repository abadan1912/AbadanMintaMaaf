 // Fungsi untuk mengontrol slider
 let currentSlide = 0;
 const slides = document.querySelectorAll('.slide');
 const prevBtn = document.getElementById('prevBtn');
 const nextBtn = document.getElementById('nextBtn');
 const playMusicBtn = document.getElementById('playMusic');
 const music = document.getElementById('music');

 function showSlide(index) {
     // Sembunyikan semua slide
     slides.forEach(slide => slide.style.display = 'none');
     // Tampilkan slide aktif
     slides[index].style.display = 'block';
 }

 // Tombol untuk pindah ke slide berikutnya
 nextBtn.addEventListener('click', function() {
     currentSlide = (currentSlide + 1) % slides.length;
     showSlide(currentSlide);
 });

 // Tombol untuk pindah ke slide sebelumnya
 prevBtn.addEventListener('click', function() {
     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
     showSlide(currentSlide);
 });

 // Tombol Play Musik
 playMusicBtn.addEventListener('click', function() {
     music.play();
     playMusicBtn.style.display = "none"; // Sembunyikan tombol setelah musik diputar
 });

 // Menampilkan slide pertama saat halaman dimuat
 showSlide(currentSlide);

 // Timer untuk menghitung waktu sejak 23 September 2024
 const startDate = new Date('2024-09-23');
 const timePassedElement = document.getElementById('timePassed');

 function updateTimer() {
     const now = new Date();
     const timeDiff = now - startDate; // Menghitung selisih waktu
     const daysPassed = Math.floor(timeDiff / (1000 * 60 * 60 * 24)); // Menghitung jumlah hari
     timePassedElement.innerText = `${daysPassed} Hari`;
 }

 setInterval(updateTimer, 1000); // Update setiap detik
 updateTimer(); // Panggil sekali untuk inisialisasi