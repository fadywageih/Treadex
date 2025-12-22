
const mobileMenuButton = document.getElementById('mobileMenuButton');
const closeMobileMenu = document.getElementById('closeMobileMenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
const mobileMenu = document.getElementById('mobileMenu');
const mobileServicesButton = document.getElementById('mobileServicesButton');
const mobileServicesDropdown = document.getElementById('mobileServicesDropdown');
if (mobileMenuButton) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('open');
        mobileMenuOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    });
}
function closeMenu() {
    mobileMenu.classList.remove('open');
    mobileMenuOverlay.classList.remove('open');
    document.body.style.overflow = 'auto';
    mobileServicesDropdown.classList.add('hidden');
}
if (closeMobileMenu) {
    closeMobileMenu.addEventListener('click', closeMenu);
}
if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMenu);
}
if (mobileServicesButton) {
    mobileServicesButton.addEventListener('click', (e) => {
        e.preventDefault();
        mobileServicesDropdown.classList.toggle('hidden');
    });
}
const mobileMenuLinks = mobileMenu.querySelectorAll('a');
mobileMenuLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});
let currentSlide = 0;
const slides = document.querySelectorAll('[id^="slide"]');
const dots = document.querySelectorAll('.slider-dot');
function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.opacity = index === n ? '1' : '0';
    });

    dots.forEach((dot, index) => {
        dot.style.opacity = index === n ? '1' : '0.5';
    });
    currentSlide = n;
}
if (dots.length > 0) {
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            showSlide(parseInt(dot.dataset.slide));
        });
    });
    setInterval(() => {
        showSlide((currentSlide + 1) % slides.length);
    }, 5000);
}
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        alert(`Thank you for your message, ${name}! We will contact you at ${email} soon.`);
        console.log('Form data:', { name, email, message });
        this.reset();
    });
}
function initializeProductsSlider() {
    const sliderTrack = document.getElementById('productsSliderTrack');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    console.log('Initializing slider...');
    console.log('Slider Track:', sliderTrack);
    console.log('Prev Button:', prevBtn);
    console.log('Next Button:', nextBtn);
    if (!sliderTrack) {
        console.error('Slider track not found!');
        return;
    }
    if (!prevBtn || !nextBtn) {
        console.error('Slider buttons not found!');
        return;
    }
    let currentPosition = 0;
    const slideWidth = 320;
    const totalSlides = sliderTrack.children.length;
    const visibleSlides = 4;
    console.log('Total slides:', totalSlides);
    console.log('Visible slides:', visibleSlides);
    for (let i = 0; i < visibleSlides; i++) {
        const clone = sliderTrack.children[i].cloneNode(true);
        sliderTrack.appendChild(clone);
    }
    sliderTrack.style.transition = 'transform 0.5s ease';
    function updateSliderPosition() {
        console.log('Updating position to:', currentPosition);
        sliderTrack.style.transform = `translateX(${currentPosition}px)`;
    }
    function slideNext() {
        console.log('Sliding next...');
        currentPosition -= slideWidth;
        updateSliderPosition();
        if (Math.abs(currentPosition) >= slideWidth * totalSlides) {
            setTimeout(() => {
                currentPosition = 0;
                sliderTrack.style.transition = 'none';
                updateSliderPosition();
                setTimeout(() => {
                    sliderTrack.style.transition = 'transform 0.5s ease';
                }, 50);
            }, 500);
        }
    }
    function slidePrev() {
        console.log('Sliding previous...');
        if (currentPosition >= 0) {
            currentPosition = -slideWidth * (totalSlides - visibleSlides);
            updateSliderPosition();
        } else {
            currentPosition += slideWidth;
            updateSliderPosition();
        }
    }
    nextBtn.addEventListener('click', slideNext);
    prevBtn.addEventListener('click', slidePrev);
    let autoSlideInterval = setInterval(slideNext, 3000);
    console.log('Auto-slide interval started');
    sliderTrack.addEventListener('mouseenter', () => {
        console.log('Mouse entered - pausing auto-slide');
        clearInterval(autoSlideInterval);
    });

    sliderTrack.addEventListener('mouseleave', () => {
        console.log('Mouse left - resuming auto-slide');
        autoSlideInterval = setInterval(slideNext, 3000);
    });
    updateSliderPosition();
    console.log('Products slider initialized successfully');
}
document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM loaded - initializing slider');
    initializeProductsSlider();
});
window.addEventListener('load', function () {
    console.log('Window loaded - reinitializing slider');
    initializeProductsSlider();
});
function closeBanner() {
    const banner = document.getElementById('exportBanner');
    if (banner) {
        banner.style.animation = 'slideUp 0.5s ease-in-out forwards';
        setTimeout(() => {
            banner.style.display = 'none';
        }, 500);
    }
}
window.addEventListener('load', function () {
    const banner = document.getElementById('exportBanner');
    if (banner) {
        banner.style.display = 'block';
    }
});

const exportRectangle = document.querySelector('.export-rectangle');
if (exportRectangle) {
    exportRectangle.addEventListener('click', () => {
        window.location.href = 'Export.html';
    });

    exportRectangle.addEventListener('mouseenter', () => {
        exportRectangle.style.transform = 'scale(1.1)';
    });

    exportRectangle.addEventListener('mouseleave', () => {
        exportRectangle.style.transform = 'scale(1)';
    });
}
