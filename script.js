const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel img'); 
const nextButton = document.querySelector('.next-arrow');
const prevButton = document.querySelector('.prev-arrow');
const dots = document.querySelectorAll('.dot');

let containerWidth;
let currentIndex = 0;
let slideInterval;

function setContainerWidth() {
    containerWidth = images[0].clientWidth;
    carousel.style.width = `${containerWidth}px`;
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

function goToNextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showSlide(currentIndex);
}

function startSlideShow() {
    slideInterval = setInterval(goToNextSlide, 5000); // Change interval duration as needed
}

function stopSlideShow() {
    clearInterval(slideInterval);
}

carousel.addEventListener('mouseover', stopSlideShow);
carousel.addEventListener('mouseout', startSlideShow);

setContainerWidth();
showSlide(currentIndex);
updateButtons();
startSlideShow();
