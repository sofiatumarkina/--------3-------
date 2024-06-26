let slideIndex = 0;

function showSlide(n) {
  const slides = document.querySelectorAll(".avatar");

  if (n >= slides.length) slideIndex = 0;
  if (n < 0) slideIndex = slides.length - 1;

  for (let i = 0; i < slides.length; i++) slides[i].style.display = "none";

  slides[slideIndex].style.display = "flex";
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

showSlide(slideIndex);
