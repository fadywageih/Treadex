
const mobileMenuButton = document.getElementById('mobileMenuButton');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenu = document.getElementById('mobileMenu');
const mobileServicesButton = document.getElementById('mobileServicesButton');
const mobileServicesDropdown = document.getElementById('mobileServicesDropdown');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('open');
    mobileMenuOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
});
function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
    mobileServicesDropdown.classList.add('hidden');
}
closeMobileMenu.addEventListener('click', closeMenu);
mobileMenuOverlay.addEventListener('click', closeMenu);
mobileServicesButton.addEventListener('click', (e) => {
    e.preventDefault();
    mobileServicesDropdown.classList.toggle('hidden');
});
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a, .mobile-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if ((href === 'trading.html' || href === './trading.html') &&
                (currentPage === 'trading.html' || currentPage === '')) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                if (mobileMenu && mobileMenu.classList.contains('open')) {
                    closeMenu();
                }
                this.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            }
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                if (mobileMenu && mobileMenu.classList.contains('open')) {
                    closeMenu();
                }
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slide').length;
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    nextBtn.addEventListener('click', function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
    prevBtn.addEventListener('click', function () {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            currentSlide = parseInt(this.getAttribute('data-index'));
            updateSlider();
        });
    });
    setInterval(function () {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }, 5000);
});
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => {
        observer.observe(el);
    });
});
