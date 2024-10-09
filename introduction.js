let currentSlideIndex = 0;
const slides = document.querySelectorAll(".slide");
const prevArrow = document.getElementById('prev');
const nextArrow = document.getElementById('next');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = slides.length - 1; // Stop at the last slide
    } else if (index < 0) {
        currentSlideIndex = 0; // Stop at the first slide
    } else {
        currentSlideIndex = index;
    }

    // Hide all slides
    slides.forEach((slide) => {
        slide.style.display = "none";
    });

    // Show the current slide
    slides[currentSlideIndex].style.display = "flex";

    // Hide the "Prev" arrow on the first slide
    if (currentSlideIndex === 0) {
        prevArrow.style.display = 'none';
    } else {
        prevArrow.style.display = 'block';
    }

    // Hide the "Next" arrow on the last slide
    if (currentSlideIndex === slides.length - 1) {
        nextArrow.style.display = 'none';
    } else {
        nextArrow.style.display = 'block';
    }
}

// Initialize the first slide and arrows
showSlide(currentSlideIndex);

function changeSlide(step) {
    showSlide(currentSlideIndex + step);
}
