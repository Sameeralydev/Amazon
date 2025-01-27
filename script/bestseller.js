// function myFunction() {
//       let dots = document.getElementById("dots");
//       let moreText = document.getElementById("more");
//       let btnText = document.getElementById("myBtn");
//     if (dots.style.display === "none") {
//         dots.style.display = "inline";
//         btnText.innerHTML = "See more";
//         moreText.style.display = "none";
//   } else {
//         dots.style.display = "none";
//         btnText.innerHTML = "See Less";
//         moreText.style.display = "inline";
//   }
//   }
function myFunction() {
      let dots = document.getElementById("dots");
      let moreText = document.getElementById("more");
      let btnText = document.getElementById("myBtn");
    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "See more";
        moreText.style.display = "none";
  } else {
        dots.style.display = "none";
        btnText.innerHTML = "See Less";
        moreText.style.display = "inline";
  }
  }  
// function myFunction() {
//     let dots = document.getElementById("dots-2");
//     let moreText = document.getElementById("more-2");
//     let btnText = document.getElementById("myBtn-2");
//   if (dots.style.display === "none") {
//       dots.style.display = "inline";
//       btnText.innerHTML = "See more";
//       moreText.style.display = "none";
// } else {
//       dots.style.display = "none";
//       btnText.innerHTML = "See Less";
//       moreText.style.display = "inline";
// }
// }
document.addEventListener('DOMContentLoaded', function() {
      var myCarousel = new bootstrap.Carousel(document.getElementById('imageSlider'), {
          interval: 10000, // Auto slide every 3 seconds
          wrap: true
      });
  });