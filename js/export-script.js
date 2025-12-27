function generateStarRating(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-yellow-400"></i>';
    }

    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-yellow-400"></i>';
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-yellow-400"></i>';
    }

    return stars;
}
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
    if (mobileServicesDropdown) {
        mobileServicesDropdown.classList.add('hidden');
    }
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
const productsData = {
    "products": [
        {
           "id": 1,
              "image": "Images/ForProducts/Garbage_Bag/Garbage_Bag_white.png",
            "gallery": [
                "Images/ForProducts/Garbage_Bag/Garbage_Bag_white1.jpg",
               "Images/ForProducts/Garbage_Bag/Garbage_Bag_white2.jpg",
                "Images/ForProducts/Garbage_Bag/Garbage_Bag_white3.jpg"
            ],
            "name": "Garbage Bag white",
            "category": "Garbage bags",
            "description": "Kitchen small trash can, 24in X 27in , 1000 bags, 8 micron, clear. ",
            "discount":10,
            "rating": 4.4 ,
            "basePrice": 10.00
        },
        {
            "id": 2,
              "image": "Images/ForProducts/Platss/plats.png",
            "gallery": [
                "Images/ForProducts/Platss/plats1.jpg",
                "Images/ForProducts/Platss/plats2.jpg",
                "Images/ForProducts/Platss/plats3.jpg"
            ],
            "name": " Plats",
            "category": "Restaurant",
            "description": "Kraft plats 320 GSM with plastic lids pet. Material: Made of high quality thickened food grade paper material,safe and reliable use,better choice compared to plastic and foam trays.",
            "discount": 11,
            "rating": 4.8
        },
        {
            "id": 3,
             "image": "Images/ForProducts/P_O_S_ROOL/P.O.S_ROOL1.jpg",
            "gallery": [
                "Images/ForProducts/P_O_S_ROOL/P.O.S_ROOL1.jpg",
                "Images/ForProducts/P_O_S_ROOL/P.O.S_ROOL2.jpg",
                "Images/ForProducts/P_O_S_ROOL/P.O.S_ROOL3.jpg"
            ],
            "name": "P.O.S ROOL",
            "category": "Restaurant",
            "description": "High quality thermal paper 50 GSM, 2.25in ,15 meters 100 roll in box..",
            "discount": 20,
            "rating": 4.9,
             "basePrice":8.842
        },
        {
            "id": 4,
             "image": "Images/ForProducts/Thermal_Roll/Thermal_Roll1.jpg",
            "gallery": [
                "Images/ForProducts/Thermal_Roll/Thermal_Roll1.jpg",
                "Images/ForProducts/Thermal_Roll/Thermal_Roll2.jpg",
                "Images/ForProducts/Thermal_Roll/Thermal_Roll3.jpg"
            ],
            "name": "Thermal Roll",
            "category": "Restaurant",
            "description": "High quality thermal paper 50 GSM, 3 1/8in ,230ft, 50 rolls in box..",
            "discount": 9,
            "rating": 4.7
        },
        {
            "id": 5,
             "image": "Images/ForProducts/fine/fine1.png",
            "gallery": [
                "Images/ForProducts/fine/fine1.png",
                "Images/ForProducts/fine/fine2.jpg",
                "Images/ForProducts/fine/fine3.jpg"
            ],
            "name": "Toilet Tissue",
            "category": "Tissue",
            "description": "High quality toilet tissue pulp pure, 2 ply, 32 GSM, 470 sheets, 48 rolls in packet.",
            "discount": 12,
            "rating": 4.5,
             "basePrice": 8.5
        },
        {
            "id": 6,
            "image": "Images/ForProducts/Facial_Tissue/Facial_Tissue1.jpg",

            "gallery": [
                "Images/ForProducts/Facial_Tissue/Facial_Tissue1.jpg",
                "Images/ForProducts/Facial_Tissue/Facial_Tissue2.png",
                "Images/ForProducts/Facial_Tissue/Facial_Tissue3.jpg"
            ],
            "name": "Facial Tissue",
            "category": "Tissue",
            "description": "High quality facial tissue pulp pure, 2 ply, 32 GSM, 100 sheets in the box, 66 boxes in carton..",
            "discount": 11,
            "rating": 4.8,
             "basePrice": 14.5
        },
        {
            "id": 7,
           "image": "Images/ForProducts/Coffee_Cup/Coffee_Cup.jpg",
            "gallery": [
                "Images/ForProducts/Coffee_Cup/Coffee_Cup1.jpg",
                "Images/ForProducts/Coffee_Cup/Coffee_Cup2.jpg",
                "Images/ForProducts/Coffee_Cup/Coffee_Cup3.jpg"
            ],
            "name": "Coffee Cup",
            "category": "Cups",
            "description": "High-quality disposable coffee cups, 250 GSM material, packed 1000 cups per box (12oz),* (16oz) 250 gsm price 14.526$, (20oz) 280 gsm 26.842$",
            "discount": 13,
            "rating": 4.7,
            "basePrice": 13.157
        },
        {
            "id": 8,
           "image": "Images/ForProducts/Coffee_Cups_Sleeve/Coffee_Cups_Sleeve.jpg",
            "gallery": [
                "Images/ForProducts/Coffee_Cups_Sleeve/Coffee_Cups_Sleeve1.jpg",
                "Images/ForProducts/Coffee_Cups_Sleeve/Coffee_Cups_Sleeve2.jpg",
                "Images/ForProducts/Coffee_Cups_Sleeve/Coffee_Cups_Sleeve.jpg"
            ],
            "name": "Coffee Cups Sleeve",
            "category": "Cups",
            "description": "High quality coffee cups sleeves 12oz, 16oz, 20oz materials kraft paper.",
            "discount": 14,
            "rating": 4.8,
             "basePrice":11.578

        },
        {
            "id": 9,
           "image": "Images/ForProducts/Paper_Bags/Paper_Bags.jpg",
            "gallery": [
                "Images/ForProducts/Paper_Bags/Paper_Bags.jpg",
                "Images/ForProducts/Paper_Bags/Paper_Bags1.jpg",
                "Images/ForProducts/Paper_Bags/Paper_Bags2.png  "
            ],
            "name": "Paper Bags",
            "category": "Paper Bags",
            "description": "kraft Paper Bag 70GSM, 500 bags in carton, 100% recycle.",

            "discount": 16,
            "rating": 4.8
        },
        {
           "id": 10,
           "image": "Images/ForProducts/Pizza_box/Pizza_box.jpg",
            "gallery": [
                "Images/ForProducts/Pizza_box/Pizza_box1.jpg",
                "Images/ForProducts/Pizza_box/Pizza_box2.jpg",
                "Images/ForProducts/Pizza_box/Pizza_box3.jpg"
            ],
            "name": "Pizza box ",
            "category": "Pizza box",
            "description": "High quality Kraft pizza box, print one color, 50 box in the packet,size (30X30) price 7.105$ ,(40x40) price 9.473$.",
            "discount": 11,
            "rating": 4.8,
            "basePrice": 7.105
        },
        {
            "id": 11,
           "image": "Images/ForProducts/Pizza_box_print/Pizza_box_print.jpg",
            "gallery": [
                "Images/ForProducts/Pizza_box_print/Pizza_box_print.jpg1",
                "Images/ForProducts/Pizza_box_print/Pizza_box_print.jpg2",
                "Images/ForProducts/Pizza_box_print/Pizza_box_print.jpg3"
            ],
            "name": "Pizza box print",
            "category": "Pizza box",
            "description": "High quality white pizza box, print one color, 50 box in the packet.",
            "discount": 11,
            "rating": 4.7
        },
         {
            "id": 12,
           "image": "Images/ForProducts/Coffee_Cup_Covers/Coffee_Cup_Covers.jpg",
            "gallery": [
                "Images/ForProducts/Coffee_Cup_Covers/Coffee_Cup_Covers1.jpg",
                "Images/ForProducts/Coffee_Cup_Covers/Coffee_Cup_Covers2.jpg",
                "Images/ForProducts/Coffee_Cup_Covers/Coffee_Cup_Covers1.jpg"
            ],
            "name": "Coffee Cup Lids",
            "category": "Cups",
            "description": "High quality Coffee Lids (12oz), Leak-Proof Plastic Coffee Lid, Heat-Resistant & strong hot cup lids for Everyday Convenience. materials plastic pet.",
            "discount":10,
            "rating": 4.8,
            "basePrice": 6.842
        },
        {
           "id": 13,
           "image": "Images/ForProducts/New_Plates/plates.jpg",
            "gallery": [
                "Images/ForProducts/New_Plates/plates.jpg",
                "Images/ForProducts/New_Plates/plates1.jpg",
                "Images/ForProducts/New_Plates/plates2.jpg"
            ],
            "name": "Covered plates",
            "category": "Restaurant",
            "description": "100%Compostable No Plastic Heavy Knives Disposable Forks Spoons Plastic Utensils, The Heavyweight Heavy Duty Flatware is Eco Friendly Products for Lounge Party Wedding BBQ Picnic Camping [150 Count].",
            "discount": 12,
            "rating": 4.8
        },
        {
            "id": 14,
           "image": "Images/ForProducts/Plates_cutlery/Plates_cutlery.png",
            "gallery": [
                "Images/ForProducts/Plates_cutlery/Plates_cutlery.png",
                "Images/ForProducts/Plates_cutlery/Plates_cutlery1.jpg",
                "Images/ForProducts/Plates_cutlery/Plates_cutlery2.jpg",

            ],
            "name": "Plates cutlery",
            "category": "Restaurant",
            "description": "Kraft plats 320 GSM with plastic lids pet. Material: Made of high quality thickened food grade paper material,safe and reliable use,better choice compared to plastic and foam trays.",
            "discount": 15,
            "rating": 4.5
        },
        {
            "id": 15,
           "image": "Images/ForProducts/Diapers/Diapers.jpg",
            "gallery": [
                "Images/ForProducts/Diapers/Diapers.jpg",
                "Images/ForProducts/Diapers/Diapers1.jpg",
                "Images/ForProducts/Diapers/Diapers2.jpg",
            ],
            "name": "Diapers",
            "category": "Medical",
            "description": "Professional quality product designed for institutional use.",
            "discount": 12,
            "rating": 4.6
        },
        {
            "id": 16,
           "image": "Images/ForProducts/Bed_Sheets/Bed_Sheets.jpg",
            "gallery": [
                "Images/ForProducts/Bed_Sheets/Bed_Sheets.jpg",
                "Images/ForProducts/Bed_Sheets/Bed_Sheets1.jpg",
                "Images/ForProducts/Bed_Sheets/Bed_Sheets2.jpg",
            ],
            "name": "Bed Sheets",
            "category": "Medical",
            "description": "Professional quality product designed for institutional use.",
            "discount": 12,
            "rating": 4.5
        },
         {
            "id": 17,
           "image": "Images/ForProducts/Gloves/Gloves.jpg",
            "gallery": [
                "Images/ForProducts/Gloves/Gloves.jpg",
                "Images/ForProducts/Gloves/Gloves1.jpg",
                "Images/ForProducts/Gloves/Gloves2.jpg",
            ],
            "name": "Gloves",
            "category": "Medical",
            "description": " High-quality nitrile gloves offering superior protection, durability, and comfort for medical and industrial use.",
            "discount": 11,
            "rating": 4.4,
            "basePrice": 16.50
        },
         {
            "id": 18,
           "image": "Images/ForProducts/Garbage_Bag_Black/Garbage_Bag.png",
            "gallery": [
                "Images/ForProducts/Garbage_Bag_Black/Garbage_Bag.png",
                "Images/ForProducts/Garbage_Bag_Black/Garbage_Bag1.jpg",
                "Images/ForProducts/Garbage_Bag_Black/Garbage_Bag2.jpg",
            ],
            "name": "Garbage Bag",
            "category": "Garbage Bag",
            "description": "High quality 55 Gallon Trash Bags Heavy Duty | 100 Count | 50 Gallon | Large Black Garbage Bags.",
            "discount": 10,
            "rating": 4.8
        },
         {
            "id": 19,
           "image": "Images/ForProducts/Mask/Mask.jpg",
            "gallery": [
                "Images/ForProducts/Mask/Mask.jpg",
                "Images/ForProducts/Mask/Mask1.jpg",
                "Images/ForProducts/Mask/Mask2.jpg",
            ],
            "name": "Mask",
            "category": "Medical",
            "description": "Protective face masks designed for comfort, breathability, and daily safety.",
            "discount":10,
            "rating": 4.8
        },
        {
            "id": 20,
           "image": "Images/ForProducts/Sauce_cups/Sauce_cups.jpg",
            "gallery": [
                "Images/ForProducts/Sauce_cups/Sauce_cups.jpg",
                "Images/ForProducts/Sauce_cups/Sauce_cups1.jpg",
                "Images/ForProducts/Sauce_cups/Sauce_cups2.png",
            ],
            "name": "Sauce cups",
            "category": "Cups",
            "description": "Disposable Sauce cups materials plastic, 1000 pieces in carton, (2oz) price$ 9.684, (4oz) price$ 11.831",
            "discount":11,
            "rating": 4.8,
            "basePrice":  9.684
        },
        {
            "id": 21,
           "image": "Images/ForProducts/napkin/napkin.jpg",
            "gallery": [
                "Images/ForProducts/napkin/napkin.jpg",
                "Images/ForProducts/napkin/napkin1.png",
                "Images/ForProducts/napkin/napkin2.jpg",
            ],
            "name": "Napkin",
            "category": "Tissue",
            "description": "Brown napkin material pulp pure 2 play 32 GSM, 100 sheets in packet, 30 packets in box.",
            "discount": 12,
            "rating": 4.8,
            "basePrice": 9
        },
        {
            "id": 22,
           "image": "Images/ForProducts/paper_twole/paper_twole.png",
            "gallery": [
                "Images/ForProducts/paper_twole/paper_twole.png",
                "Images/ForProducts/paper_twole/paper_twole1.png",
                "Images/ForProducts/paper_twole/paper_twole2.jpg",
            ],
            "name": "Paper Twole",
            "category": "Tissue",
            "description": "High quality paper towel pulp pure 16 GSM, 1000 feet, 6 rolls in box, (Bale of 1x20) Revive price/Bale 8.5$",
            "discount": 12,
            "rating": 4.9,
            "basePrice": 7.08
        },
        {
            "id": 23,
           "image": "Images/ForProducts/Newnapkin/napkin.png",
            "gallery": [
                "Images/ForProducts/Newnapkin/napkin.png",
                "Images/ForProducts/Newnapkin/napkin1.jpg",
                "Images/ForProducts/Newnapkin/napkin2.jpg",
            ],
            "name": "Napkin",
            "category": "Tissue",
            "description": "White napkin material pulp pure 1 ply 48 GSM, 100 sheets in packet, 30 packets in box.",
            "discount":11,
            "rating": 4.6,
            "basePrice": 13.1
        },
        {
            "id": 24,
           "image": "Images/ForProducts/Cold_Cups/Cold_Cups.jpg",
            "gallery": [
                "Images/ForProducts/Cold_Cups/Cold_Cups.jpg",
                "Images/ForProducts/Cold_Cups/Cold_Cups1.jpg",
                "Images/ForProducts/Cold_Cups/Cold_Cups2.jpg",
            ],
            "name": "Cold Cups",
            "category": "Cups",
            "description": "High quality cold cups materials plastic pet, with Lids 1000 in box,(12oz) price 19.368$, (16oz) price 23.684$, (20oz) price  24.063$",
            "discount": 12,
            "rating": 4.5,
            "basePrice": 19.368
        },

    ]
};
const productModal = document.getElementById('productModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const modalName = document.getElementById('modalName');
const modalCategory = document.getElementById('modalCategory');
const modalDescription = document.getElementById('modalDescription');
const modalRating = document.getElementById('modalRating');
const modalDiscount = document.getElementById('modalDiscount');
const modalMainImage = document.getElementById('modalMainImage');
const galleryThumbnails = document.getElementById('galleryThumbnails');
const prevGalleryBtn = document.getElementById('prevGallery');
const nextGalleryBtn = document.getElementById('nextGallery');
let currentGallery = [];
let currentImageIndex = 0;
function initGallery(images) {
    currentGallery = images;
    currentImageIndex = 0;
    updateGallery();
}
function updateGallery() {
    modalMainImage.src = currentGallery[currentImageIndex];
    galleryThumbnails.innerHTML = '';
    currentGallery.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `thumbnail ${index === currentImageIndex ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="Thumbnail ${index + 1}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgdmlld0JveD0iMCAwIDEwMCAxMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNNTAgMjVDNDMuMzcgMjUgMzggMzAuMzcgMzggMzdDMzggNDMuNjMgNDMuMzcgNDkgNTAgNDlDNTYuNjMgNDkgNjIgNDMuNjMgNjIgMzdDNjIgMzAuMzcgNTYuNjMgMjUgNTAgMjVaTTc0IDYzSDI2QzIzLjI0IDYzIDIxIDY1LjI0IDIxIDY4VjgyQzIxIDg0Ljc2IDIzLjI0IDg3IDI2IDg3SDc0Qzc2Ljc2IDg3IDc5IDg0Ljc2IDc5IDgyVjY4Qzc5IDY1LjI0IDc2Ljc2IDYzIDc0IDYzWiIgZmlsbD0iIzlDQTNBNiIvPjwvc3ZnPg=='">`;
        thumbnail.addEventListener('click', () => {
            currentImageIndex = index;
            updateGallery();
        });
        galleryThumbnails.appendChild(thumbnail);
    });
    prevGalleryBtn.disabled = currentImageIndex === 0;
    nextGalleryBtn.disabled = currentImageIndex === currentGallery.length - 1;
}
prevGalleryBtn.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateGallery();
    }
});
nextGalleryBtn.addEventListener('click', () => {
    if (currentImageIndex < currentGallery.length - 1) {
        currentImageIndex++;
        updateGallery();
    }
});
modalMainImage.addEventListener('click', function() {
    this.classList.toggle('zoomed');
});
function openProductModal(product) {
    modalName.textContent = product.name;
    modalCategory.textContent = product.category;
    modalDescription.textContent = product.description;
    modalRating.innerHTML = generateStarRating(product.rating);
    modalDiscount.textContent = product.discount > 0 ? `${product.discount}% OFF` : '';
    const basePrice = product.basePrice || 0; 
    const priceTier2 = basePrice * 1.25; // زيادة 25%
    const priceTier1 = basePrice * 1.40; // زيادة 40%
    
    // عرض الأسعار من الأغلى للأرخص
    document.getElementById('priceTier1').textContent = `$${priceTier1.toFixed(2)} / unit`;
    document.getElementById('priceTier2').textContent = `$${priceTier2.toFixed(2)} / unit`;
    document.getElementById('priceTier3').textContent = `$${basePrice.toFixed(2)} / unit`;
    
    const galleryImages = product.gallery || [product.image, product.image, product.image];
    initGallery(galleryImages);
    productModal.classList.remove('hidden');
    preventBackgroundScroll(true);
    
    const scrollableContent = document.querySelector('.modal-scrollable');
    if (scrollableContent) {
        scrollableContent.scrollTop = 0;
    }
    
    addTouchEvents();
    
    setTimeout(() => {
        modalContent.classList.remove('scale-95', 'opacity-0');
        modalContent.classList.add('scale-100', 'opacity-100');
        
        setTimeout(() => {
            const getInTouchButton = document.querySelector('.mt-4.lg\\:mt-6 a, .mt-4.lg\\:mt-6 button');
            if (getInTouchButton) {
                getInTouchButton.outerHTML = `
                    <div class="mt-4 lg:mt-6">
                        <button onclick="redirectToProductInquiry(${product.id}, '${encodeURIComponent(product.name)}', '${encodeURIComponent(product.category)}', '${encodeURIComponent(product.image)}')"
                            class="w-full inline-flex items-center justify-center custom-blue hover:bg-customBlue text-white px-4 lg:px-6 py-3 rounded-lg font-semibold transition duration-300 text-center text-sm lg:text-base cursor-pointer">
                            <i class="fas fa-envelope mr-2"></i>
                            Get In Touch for Pricing & Orders
                        </button>
                    </div>
                `;
            }
        }, 100);
    }, 50);
    
    window.currentProduct = product;
}
function preventBackgroundScroll(prevent) {
    if (prevent) {
        document.body.style.overflow = 'hidden';
        document.documentElement.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
    } else {
        document.body.style.overflow = 'auto';
        document.documentElement.style.overflow = 'auto';
        document.body.style.position = 'static';
    }
}
function addTouchEvents() {
    const modalContent = document.getElementById('modalContent');
    let startY = 0;
    let currentY = 0;
    let isDragging = false;

    modalContent.addEventListener('touchstart', (e) => {
        startY = e.touches[0].clientY;
        isDragging = true;
    }, { passive: true });

    modalContent.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        
        currentY = e.touches[0].clientY;
        const diffY = startY - currentY;
        const scrollableContent = document.querySelector('.modal-scrollable');
        if (scrollableContent.scrollTop === 0 && diffY < 0) {
            return;
        }
        const isAtBottom = scrollableContent.scrollHeight - scrollableContent.scrollTop <= scrollableContent.clientHeight + 1;
        if (isAtBottom && diffY > 0) {
            return;
        }
        if (Math.abs(diffY) > 10) {
        }
    }, { passive: true });

    modalContent.addEventListener('touchend', () => {
        isDragging = false;
        startY = 0;
        currentY = 0;
    });
}
function closeProductModal() {
    modalContent.classList.remove('scale-100', 'opacity-100');
    modalContent.classList.add('scale-95', 'opacity-0');
    setTimeout(() => {
        productModal.classList.add('hidden');
        preventBackgroundScroll(false);
        modalMainImage.classList.remove('zoomed');
        if (currentGallery.length > 0) {
            currentImageIndex = 0;
            updateGallery();
        }
    }, 300);
}
if (closeModal) {
    closeModal.addEventListener('click', closeProductModal);
}
if (productModal) {
    productModal.addEventListener('click', (e) => {
        if (e.target === productModal) {
            closeProductModal();
        }
    });
}
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && productModal && !productModal.classList.contains('hidden')) {
        closeProductModal();
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const productsGrid = document.getElementById('productsGrid');
    const showMoreBtn = document.getElementById('showMoreBtn');
    if (!productsGrid) {
        return;
    }
    function renderProducts(showAll = false) {
        productsGrid.innerHTML = '';
        const productsToShow = showAll ? productsData.products.length : 9;
        for (let i = 0; i < productsToShow && i < productsData.products.length; i++) {
            const product = productsData.products[i];
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-xl shadow-md overflow-hidden product-card';
            const stars = generateStarRating(product.rating);
            productCard.innerHTML = `
                <div class="relative">
                    <div class="w-full aspect-square bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-4">
                        <img src="${product.image}" alt="${product.name}" 
                             class="max-w-full max-h-full object-contain drop-shadow-md zoom-image"
                             onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMTUwIDc1QzEyMi4zODYgNzUgMTAwIDk3LjM4NiAxMDAgMTI1QzEwMCAxNTIuNjE0IDEyMi4zODYgMTc1IDE1MCAxNzVDMTc3LjYxNCAxNzUgMjAwIDE1Mi42MTQgMjAwIDEyNUMyMDAgOTcuMzg2IDE3Ny42MTQgNzUgMTUwIDc1Wk0yMjIgMTg5SDc4QzY3LjA3MyAxODkgNTggMTk2LjA3MyA1OCAyMDdWMjM0QzU4IDI0NC45MjcgNjcuMDczIDI1MiA3OCAyNTJIMjIyQzIzMi45MjcgMjUyIDI0MiAyNDQuOTI3IDI0MiAyMzRWMjA3QzI0MiAxOTYuMDczIDIzMi45MjcgMTg5IDIyMiAxODlaIiBmaWxsPSIjOUNBM0E2Ii8+PC9zdmc+'">
                       
                    </div>
                </div>
                <div class="p-6">
                    <span class="text-sm text-blue-600 font-semibold bg-blue-50 px-2 py-1 rounded-full">${product.category}</span>
                    <h3 class="text-xl font-bold text-gray-800 mt-3 mb-3">${product.name}</h3>
                    <p class="text-gray-600 mb-4 line-clamp-3 leading-relaxed">${product.description}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center">
                            ${stars}
                            <span class="text-sm text-gray-500 ml-2">${product.rating}</span>
                        </div>
                    </div>
                </div>
            `;
            productCard.addEventListener('click', () => {
                openProductModal(product);
            });
            productsGrid.appendChild(productCard);
        }
        if (showMoreBtn) {
            if (showAll) {
                showMoreBtn.style.display = 'none';
            } else {
                showMoreBtn.style.display = 'inline-block';
            }
        }
    }
    if (showMoreBtn) {
        showMoreBtn.addEventListener('click', function () {
            renderProducts(true);
            setTimeout(() => {
                productsGrid.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }, 300);
        });
    }
    renderProducts();
});
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.slider-dot');
    if (!slider) return;
    let currentSlide = 0;
    const totalSlides = document.querySelectorAll('.slide').length;
    let slideInterval;
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    }
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    }
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            currentSlide = parseInt(this.getAttribute('data-index'));
            updateSlider();
        });
    });
    function startSlideInterval() {
        slideInterval = setInterval(nextSlide, 5000);
    }
    startSlideInterval();
    const sliderContainer = document.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.addEventListener('mouseenter', () => {
            clearInterval(slideInterval);
        });
        sliderContainer.addEventListener('mouseleave', () => {
            startSlideInterval();
        });
    }
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
document.addEventListener('DOMContentLoaded', function() {
    const stickyProductsBtn = document.getElementById('stickyProductsBtn');
    const productsSection = document.getElementById('productsGrid');
    if (stickyProductsBtn && productsSection) {
        stickyProductsBtn.addEventListener('click', function() {
            productsSection.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start'
            });
            productsSection.parentElement.classList.add('highlight-section');
            setTimeout(() => {
                productsSection.parentElement.classList.remove('highlight-section');
            }, 2000);
        });
    }
})
function redirectToProductInquiry(productId, productName, productCategory, productImage) {
    const decodedName = decodeURIComponent(productName);
    const decodedCategory = decodeURIComponent(productCategory);
    const decodedImage = decodeURIComponent(productImage);
    const encodedName = encodeURIComponent(decodedName);
    const encodedCategory = encodeURIComponent(decodedCategory);
    const encodedImage = encodeURIComponent(decodedImage);
    const baseUrl = 'GetInTouch.html';
    const params = new URLSearchParams({
        product_id: productId,
        product_name: encodedName,
        product_category: encodedCategory,
        product_image: encodedImage
    });
    const modal = document.getElementById('productModal');
    if (modal && !modal.classList.contains('hidden')) {
        if (typeof closeProductModal === 'function') {
            closeProductModal();
        } else {
            modal.classList.add('hidden');
        }
    }
    setTimeout(() => {
        window.location.href = `${baseUrl}?${params.toString()}`;
    }, 300);
}
window.productsData = productsData;