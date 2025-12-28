// owl carousel start
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    nav: true,
    margin: 15,
    autoplay: true,
    autoplayhoverpause: true,
    autoplaytimeout: 500,
    responsive: {
      0: {
        items: 1,
        dots: false,
      },
      600: {
        items: 2,
        dots: false,
      },
      1000: {
        items: 3,
        dots: false,
      },
    },
  });
});
// owl carousel end

// copy start
const rek1 = document.getElementById("rek1");
const salin1 = document.getElementById("salin1");

salin1.onclick = () => {
  rek1.select(); // Selects the text inside the input
  document.execCommand("copy"); // Simply copies the selected text to clipboard
  Swal.fire({
    icon: "success",
    title: "No. Rekening Berhasil di Salin",
    showConfirmButton: false,
    timer: 1000,
  });
};
// copy end

// waktu start
   // Set the date we're counting down to (Pernikahan Hidayat & Soimah)
   const countDownDate = new Date("October 7, 2024 00:00:00").getTime();

   // Update the countdown every 1 second
   const x = setInterval(function () {
       const now = new Date().getTime();
       
       // Find the distance between now and the count down date
       const distance = countDownDate - now;

       // Time calculations for days, hours, minutes and seconds
       const days = Math.floor(distance / (1000 * 60 * 60 * 24));
       const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
       const seconds = Math.floor((distance % (1000 * 60)) / 1000);

       // Output the results in the corresponding elements
       document.getElementById("hari").innerHTML = days;
       document.getElementById("jam").innerHTML = hours;
       document.getElementById("menit").innerHTML = minutes;
       document.getElementById("detik").innerHTML = seconds;

       // If the countdown is finished, write some text
       if (distance < 0) {
           clearInterval(x);
           document.getElementById("Carasingkat").innerHTML = "EXPIRED";
       }
   }, 1000);
// waktu end

// modal start
window.onload = function () {
  document.getElementById("klikmodal").click();
};
// modal end

// lagu start
const lagu = document.getElementById("lagu");
function playAudio() {
  lagu.play();
}
function stopAudio() {
  lagu.pause();
}
// lagu end

// undngan start
function GetURLParameter(sParam) {
  var sPageURL = window.location.search.substring(1);
  var sURLVariables = sPageURL.split("&");
  for (var i = 0; i < sURLVariables.length; i++) {
    var sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] == sParam) {
      return sParameterName[1];
    }
  }
}
var to = GetURLParameter("to");
document.getElementById("nama").innerHTML = to ? decodeURI(to) : "-";

// hover blur effect
$('.blur').mouseenter(function(){
  $('.blur').css('filter','blur(5px)'); // Blurs each .blur div
  $(this).css('filter','blur(0px)');    // Removes blur from the currently hovered .blur div
})
$('.blur').mouseleave(function(){
  $('.blur').css('filter','blur(0px)'); // Removes blur from all when none are hovered
})

// undngan end

// wa 
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form dikirim secara normal

    // Ambil nilai dari form
    const nama = document.querySelector('input[name="nama"]').value;
    const ucapan = document.querySelector('textarea[name="ucapan"]').value;
    const konfirmasi = document.querySelector('select[name="konfirmasi"]').value;

    // Cek apakah semua field diisi
    if (nama && ucapan && konfirmasi) {
        // Buat pesan yang akan dikirim
        const pesan = `Nama: ${nama}\nUcapan: ${ucapan}\nKonfirmasi Kehadiran: ${konfirmasi}`;
        
        // URL WhatsApp untuk mengirim pesan ke nomor Anda
        const waUrl = `https://wa.me/+6283862115903?text=${encodeURIComponent(pesan)}`;

        // Buka URL WhatsApp
        window.open(waUrl, '_blank');
    } else {
        alert("Silakan isi semua field.");
    }
});
