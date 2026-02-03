document.addEventListener("DOMContentLoaded", () => {
    // ===== CAROUSEL =====
    const carousel = document.querySelector(".carousel");
    if (carousel) {
        const slidesContainer = carousel.querySelector(".carousel-slides");
        const slides = carousel.querySelectorAll(".carousel-slide");
        const indicators = carousel.querySelectorAll(".indicator");

        let currentSlide = 0;
        const slideCount = slides.length;

        if (slideCount > 0) {
            const showSlide = (index) => {
                slidesContainer.style.transform = `translateX(-${index * 100}%)`;

                slides[currentSlide]?.classList.remove("active");
                indicators[currentSlide]?.classList.remove("active");

                slides[index]?.classList.add("active");
                indicators[index]?.classList.add("active");

                currentSlide = index;
            };

            const nextSlide = () => {
                showSlide((currentSlide + 1) % slideCount);
            };

            indicators.forEach((indicator, index) => {
                indicator.addEventListener("click", () => showSlide(index));
            });

            setInterval(nextSlide, 30000);
        }
    }

    // ===== CACHED ELEMENTS =====
    const header = document.querySelector("header");
    const footer = document.getElementById("main-footer");

    const handleScroll = () => {
        const scrolled = window.scrollY > 50;

        if (header) {
            header.classList.toggle("sticky", scrolled);
        }

        if (footer) {
            const atBottom =
                window.innerHeight + window.scrollY >= document.body.offsetHeight;
            footer.classList.toggle("show", atBottom);
        }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // initial run
});

// ===== MENU TOGGLE =====
function toggleMenu() {
    document.querySelector(".nav-menu")?.classList.toggle("active");
    document.querySelector(".menu-toggle")?.classList.toggle("active");
}
