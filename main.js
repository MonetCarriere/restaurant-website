//this controls the slidshow in the about section

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myslides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//JS for the auto scroll for food
var slideIndex = 0;
let playing = true;
let pauseButton = document.getElementById("pause");
//let slideInterval = setTimeout(showSlides2, 5000); // Change image every 5 seconds
showSlides2();

function showSlides2() {
  let i;
  let slides = document.getElementsByClassName("mySlides2");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].style.transition = "1.5";
  setTimeout(showSlides2, 5000); //make sure to turn this back on before deploying
}

//this code controls the pause button
// function pauseSlideshow() {
//   pauseButton.innerHTML = `<i class="fas fa-pause"></i>`;
//   playing = false;
//   clearTimeout(slideInterval);
// }
// function playSlideshow() {
//   pauseButton.innerHTML = `<i class="fas fa-play"></i>`;
//   playing = true;
//   slideInterval = setTimeout(showSlides2, 5000);
// }

// pauseButton.onclick = function() {
//   if (playing) {
//     pauseSlideshow();
//   } else {
//     playSlideshow();
//   }
// };
