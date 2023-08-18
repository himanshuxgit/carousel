const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img'); 
const nextButton = document.querySelector('.next-arrow');
const prevButton = document.querySelector('.prev-arrow');
const dots = document.querySelectorAll('.dot');

let containerWidth; // Width of the container
let currentIndex = 0;

function setContainerWidth() {
    containerWidth = images[0].clientWidth; // Width of the first image
    carousel.style.width = `${containerWidth}px`; // Set the width of the carousel
}

function showSlide(index) {
    carousel.style.transform = `translateX(-${index * containerWidth}px)`;
    
    updateButtons();
    updateDots();
}

function updateButtons() {
    nextButton.disabled = currentIndex === images.length - 1;
    prevButton.disabled = currentIndex === 0;
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}); 

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showSlide(currentIndex);  
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentIndex = index;
        showSlide(currentIndex);
    });
});

setContainerWidth(); // Call this to set the initial container width
showSlide(currentIndex);
updateButtons();
