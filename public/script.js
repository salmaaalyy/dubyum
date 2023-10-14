const slides = document.querySelectorAll('.carousel');
let currentSlide = 0;

function nextSlide(){
    slides[currentSlide].style.transform = 'translateX(-100%)';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.transform = 'translateX(0)';
}
setInterval(nextSlide, 3000);