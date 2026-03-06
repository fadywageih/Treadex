let customCollection = [];
let allProducts = [];
let filteredProducts = [];
let currentCategory = 'all';
let searchQuery = '';

document.addEventListener('DOMContentLoaded', function () {
    loadCollection();
    initializeProducts();
    if (document.getElementById('slider')) {
        setupSlider();
    }
});

function loadCollection() {
    const saved = localStorage.getItem('userCollection');
    if (saved) {
        customCollection = JSON.parse(saved);
    }
    updateCollectionDisplay();
}

function saveCollection() {
    localStorage.setItem('userCollection', JSON.stringify(customCollection));
    updateCollectionDisplay();
}

function initializeProducts() {
    if (typeof productsData !== 'undefined' && productsData.products) {
        allProducts = productsData.products.map(p => ({
            ...p,
            quantity: 1
        }));
        filteredProducts = [...allProducts];
        renderProducts();
        updateAvailableCount();
    } else {
        allProducts = [
            { id: 7, name: 'Premium Coffee Cup', category: 'Cups', image: 'Images/ForProducts/Coffee_Cup/Coffee_Cup.jpg', description: 'Professional paper coffee cups designed to keep beverages hot and hands comfortable.', rating: 4.8, discount: 25 },
            { id: 12, name: 'Coffee Cup Lids', category: 'Cups', image: 'Images/ForProducts/Coffee_Cup_Covers/Coffee_Cup_Covers.jpg', description: 'Secure and spill-resistant coffee cup lids for on-the-go drinking.', rating: 4.8, discount: 20 },
            { id: 10, name: 'Premium Pizza Box', category: 'Pizza Box', image: 'Images/ForProducts/Pizza_box/Pizza_box.jpg', description: 'High-quality kraft pizza boxes made to keep pizza hot and fresh.', rating: 4.8, discount: 30 },
            { id: 1, name: 'Garbage Bag white', category: 'Garbage Bag', image: 'Images/ForProducts/Garbage_bag/Garbage_bag.jpg', description: 'High-quality white garbage bags suitable for all purposes.', rating: 4.8, discount: 15 },
            { id: 2, name: 'Plats', category: 'Restaurant', image: 'Images/ForProducts/Plats/Plats.jpg', description: 'Strong and eco-friendly paper plates for parties and catering.', rating: 4.8, discount: 20 },
            { id: 3, name: 'P.O.S ROOL', category: 'Restaurant', image: 'Images/ForProducts/P.O.S_ROOL/P.O.S_ROOL.jpg', description: 'High-quality POS rolls for clear and reliable printing.', rating: 4.9, discount: 10 },
            { id: 4, name: 'Thermal Roll', category: 'Restaurant', image: 'Images/ForProducts/Thermal_Roll/Thermal_Roll.jpg', description: 'Premium thermal rolls with sharp print quality.', rating: 4.7, discount: 12 },
            { id: 5, name: 'Tissue Box', category: 'Tissue', image: 'Images/ForProducts/Tissue_Box/Tissue_Box.jpg', description: 'Soft and durable tissue boxes for home and office use.', rating: 4.8, discount: 15 },
            { id: 6, name: 'Napkins', category: 'Tissue', image: 'Images/ForProducts/Napkins/Napkins.jpg', description: 'Premium quality napkins for restaurants and catering.', rating: 4.7, discount: 18 }
        ];
        filteredProducts = [...allProducts];
        renderProducts();
        updateAvailableCount();
    }
}

function renderProducts() {
    const productsList = document.getElementById('productsList');
    if (!productsList) return;

    productsList.innerHTML = '';

    filteredProducts.forEach(product => {
        const isInCollection = customCollection.some(p => p.id === product.id);
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item fade-in';
        productDiv.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiNGM0Y0RjYiLz48L3N2Zz4='">
            </div>
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h4 class="product-title">${product.name}</h4>
                <div class="product-rating">
                    ${generateStars(product.rating)}
                    <span>${product.rating}</span>
                </div>
                <p class="text-xs text-gray-600 mb-2">${product.description.substring(0, 60)}...</p>
                <div class="product-actions">
                    <input type="number" id="qty-${product.id}" class="quantity-input" value="1" min="1" max="100" ${isInCollection ? 'disabled' : ''}>
                    <button onclick="addToCollection(${product.id})" class="add-btn" ${isInCollection ? 'disabled' : ''}>
                        <i class="fas ${isInCollection ? 'fa-check' : 'fa-plus'} mr-1"></i>
                        ${isInCollection ? 'Added' : 'Add'}
                    </button>
                </div>
            </div>
        `;
        productsList.appendChild(productDiv);
    });

    updateAvailableCount();
}

function generateStars(rating) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        if (i <= Math.floor(rating)) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i - rating < 1 && i - rating > 0) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function addToCollection(productId) {
    const product = allProducts.find(p => p.id === productId);
    if (!product) return;

    const quantity = parseInt(document.getElementById(`qty-${productId}`)?.value || '1');
    
    if (customCollection.some(p => p.id === productId)) {
        showNotification('Product already in collection!', 'warning');
        return;
    }

    customCollection.push({
        ...product,
        quantity: quantity
    });

    saveCollection();
    renderProducts();
    showNotification(`Added ${quantity} x ${product.name} to collection`, 'success');
}

function removeFromCollection(productId) {
    const product = customCollection.find(p => p.id === productId);
    customCollection = customCollection.filter(p => p.id !== productId);
    saveCollection();
    renderProducts();
    showNotification(`Removed ${product?.name} from collection`, 'info');
}

function updateCollectionQuantity(productId, newQuantity) {
    const index = customCollection.findIndex(p => p.id === productId);
    if (index !== -1) {
        customCollection[index].quantity = parseInt(newQuantity) || 1;
        saveCollection();
    }
}

function clearCollection() {
    if (confirm('Are you sure you want to clear your entire collection?')) {
        customCollection = [];
        saveCollection();
        renderProducts();
        showNotification('Collection cleared', 'info');
    }
}

function updateCollectionDisplay() {
    const collectionList = document.getElementById('collectionList');
    const collectionCount = document.getElementById('collectionCount');
    const collectionActions = document.getElementById('collectionActions');
    const availableCount = document.getElementById('availableCount');

    if (collectionCount) {
        collectionCount.textContent = customCollection.length;
    }

    if (!collectionList) return;

    if (customCollection.length === 0) {
        collectionList.innerHTML = `
            <div class="text-center py-12">
                <i class="fas fa-inbox text-6xl text-gray-300 mb-4"></i>
                <p class="text-gray-500">Your collection is empty</p>
                <p class="text-sm text-gray-400 mt-2">Add products from the left side</p>
            </div>
        `;
        if (collectionActions) collectionActions.classList.add('hidden');
    } else {
        collectionList.innerHTML = '';
        customCollection.forEach((product, index) => {
            const item = document.createElement('div');
            item.className = 'collection-item';
            item.style.animationDelay = `${index * 0.1}s`;
            item.innerHTML = `
                <div class="collection-item-info">
                    <h5 class="collection-item-title">${product.name}</h5>
                    <div class="collection-item-meta">
                        <span>${product.category}</span>
                        <span>•</span>
                        <span>Discount: ${product.discount}%</span>
                    </div>
                    <div class="mt-2 flex items-center gap-2">
                        <span class="text-xs text-gray-600">Qty:</span>
                        <input type="number" class="quantity-input text-sm" value="${product.quantity || 1}" min="1" max="100" style="width: 50px;" onchange="updateCollectionQuantity(${product.id}, this.value)">
                    </div>
                </div>
                <div class="collection-item-actions">
                    <button onclick="removeFromCollection(${product.id})" class="remove-btn" title="Remove">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            `;
            collectionList.appendChild(item);
        });
        if (collectionActions) collectionActions.classList.remove('hidden');
    }

    if (availableCount) {
        availableCount.textContent = filteredProducts.length;
    }
}

function filterByCategory(category) {
    currentCategory = category;
    
    document.querySelectorAll('.category-filter').forEach(btn => {
        btn.classList.remove('active');
    });
    document.getElementById(`filter-${category === 'all' ? 'all' : category}`)?.classList.add('active');

    applyFilters();
}

function filterProducts() {
    searchQuery = document.getElementById('searchProducts')?.value.toLowerCase() || '';
    applyFilters();
}

function applyFilters() {
    filteredProducts = allProducts.filter(product => {
        if (currentCategory !== 'all' && product.category !== currentCategory) {
            return false;
        }
        
        if (searchQuery && !product.name.toLowerCase().includes(searchQuery) && 
            !product.description.toLowerCase().includes(searchQuery)) {
            return false;
        }
        
        return true;
    });

    renderProducts();
}

function updateAvailableCount() {
    const countEl = document.getElementById('availableCount');
    if (countEl) {
        countEl.textContent = filteredProducts.length;
    }
}

function sendCollectionWhatsApp() {
    if (customCollection.length === 0) {
        showNotification('Please add products to your collection first!', 'warning');
        return;
    }

    const message = generateCollectionMessage(customCollection);
    const phoneNumber = '201221523127';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function generateCollectionMessage(products) {
    const timestamp = new Date().toLocaleString();
    let message = `*🛍️ My Custom Collection Order 🛍️*\n\n`;
    message += `📋 *Order Details:*\n`;
    message += `⏰ Date/Time: ${timestamp}\n\n`;
    message += `*📦 Products:*\n`;

    let totalItems = 0;
    products.forEach((product, index) => {
        const qty = product.quantity || 1;
        totalItems += qty;
        message += `\n${index + 1}. *${product.name}*\n`;
        message += `   📂 Category: ${product.category}\n`;
        message += `   🔢 Quantity: ${qty}\n`;
        message += `   💰 Discount: ${product.discount}%\n`;
    });

    message += `\n\n*📊 Summary:*\n`;
    message += `✅ Total Products: ${products.length}\n`;
    message += `📦 Total Items: ${totalItems}\n`;
    message += `\n*📞 Please contact us for pricing.*\n`;
    message += `🌐 *Trade X Global Solutions*\n`;
    message += `📱 WhatsApp: +201221523127\n`;
    message += `📧 Email: info@tradexeg.com`;

    return message;
}

function getCollectionNow() {
    const featuredProducts = [
        { id: 7, name: 'Premium Coffee Cup', category: 'Cups', discount: 25, quantity: 1 },
        { id: 12, name: 'Coffee Cup Lids', category: 'Cups', discount: 20, quantity: 1 },
        { id: 10, name: 'Premium Pizza Box', category: 'Pizza Box', discount: 30, quantity: 1 }
    ];
    const message = generateCollectionMessage(featuredProducts);
    const phoneNumber = '201221523127';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-20 right-4 p-4 rounded-lg text-white z-[9999] fade-in ${
        type === 'success' ? 'bg-green-500' :
        type === 'warning' ? 'bg-yellow-500' :
        type === 'error' ? 'bg-red-500' :
        'bg-blue-500'
    }`;
    notification.innerHTML = `
        <div class="flex items-center gap-2">
            <i class="fas ${
                type === 'success' ? 'fa-check-circle' :
                type === 'warning' ? 'fa-exclamation-circle' :
                type === 'error' ? 'fa-times-circle' :
                'fa-info-circle'
            }"></i>
            <span>${message}</span>
        </div>
    `;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transition = 'opacity 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

function setupSlider() {
    const slider = document.getElementById('slider');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (!slider || !prevBtn || !nextBtn) return;

    let currentIndex = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function updateSlider() {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlider();
        });
    });

    setInterval(() => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlider();
    }, 5000);
}

function addToCustomCollection(product) {
    const exists = customCollection.some(p => p.id === product.id);
    if (!exists) {
        customCollection.push({...product, quantity: 1});
        saveCollection();
        showNotification('Product added to your collection!', 'success');
    } else {
        showNotification('This product is already in your collection!', 'info');
    }
}