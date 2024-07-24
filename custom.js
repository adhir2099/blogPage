document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel");
    const slides = carousel.querySelectorAll(".carousel-slide");

    let currentSlide = 0;
    const slideCount = slides.length;

    function showSlide(index) {
        slides[currentSlide].style.display = "none";
        slides[index].style.display = "block";
        currentSlide = index;
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % slideCount;
        showSlide(nextIndex);
    }

    setInterval(nextSlide, 3000);
});

function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

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