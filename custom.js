document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slidesContainer = carousel.querySelector(".carousel-slides");
    const slides = carousel.querySelectorAll(".carousel-slide");
    const indicators = carousel.querySelectorAll(".indicator");

    let currentSlide = 0;
    const slideCount = slides.length;

    function showSlide(index) {
        slidesContainer.style.transform = `translateX(-${index * 100}%)`;
        slides[currentSlide].classList.remove("active");
        indicators[currentSlide].classList.remove("active");
        slides[index].classList.add("active");
        indicators[index].classList.add("active");
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slideCount;
        showSlide(nextIndex);
    }

    indicators.forEach((indicator, index) => {
        indicator.addEventListener("click", () => showSlide(index));
    });

    setInterval(nextSlide, 30000);
});

// Toggle Menu Function
function toggleMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuToggle = document.querySelector('.menu-toggle');
    navMenu.classList.toggle('active');

    menuToggle.classList.toggle('active');
}

// Make Header Sticky
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

function toggleFooterVisibility() {
    let footer = document.getElementById('main-footer');
    if (footer) {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
            footer.classList.add('show');
        } else {
            footer.classList.remove('show');
        }
    }
}

window.addEventListener('scroll', toggleFooterVisibility);

toggleFooterVisibility();