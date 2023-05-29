const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentIndex = 0;

function goToSlide(index) {
  slides[currentIndex].classList.remove('active');
  slides[index].classList.add('active');
  currentIndex = index;
}

prevButton.addEventListener('click', () => {
  goToSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
  goToSlide(currentIndex + 1);
});

// Add infinite looping
prevButton.addEventListener('click', () => {
  if (currentIndex === 0) {
    goToSlide(slides.length - 1);
  }
});

nextButton.addEventListener('click', () => {
  if (currentIndex === slides.length - 1) {
    goToSlide(0);
  }
});

goToSlide(0);

function reloadPage() {
  location.reload();
}