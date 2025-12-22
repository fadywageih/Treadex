document.addEventListener('DOMContentLoaded', function() {
    function getUrlParameter(name) {
        name = name.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(window.location.href);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
    const productId = getUrlParameter('product_id');
    const productName = getUrlParameter('product_name');
    const productCategory = getUrlParameter('product_category');
    const productImage = getUrlParameter('product_image');
    if (productId) {
        loadAndDisplayProduct(productId, productName, productCategory, productImage);
        if (productName) {
            document.getElementById('productNameInput').value = decodeURIComponent(productName);
            document.getElementById('productIdInput').value = productId;
            document.getElementById('productCategoryInput').value = productCategory || 'General';
        }
    } else {
        displayDefaultMessage();
    }
    function displayDefaultMessage() {
        const container = document.getElementById('productDetailsContainer');
        container.innerHTML = `
            <div class="text-center py-12 text-gray-400">
                <i class="fas fa-box-open text-5xl mb-4"></i>
                <p class="text-lg">Select a product to view details and submit an inquiry.</p>
                <a href="Export.html" class="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">
                    <i class="fas fa-arrow-left mr-2"></i>Browse our products
                </a>
            </div>
        `;
        document.getElementById('productDetailTitle').textContent = 'Product Inquiry';
    }

    function loadAndDisplayProduct(productId, productName, productCategory, productImage) {
        let product = null;
        if (window.productsData && window.productsData.products) {
            product = window.productsData.products.find(p => p.id.toString() === productId);
        }
        if (product) {
            renderProductDetails(product);
            document.getElementById('productNameInput').value = product.name;
            document.getElementById('productIdInput').value = product.id;
            document.getElementById('productCategoryInput').value = product.category;
            document.getElementById('serviceType').value = 'Export';
        } else {
            const decodedName = decodeURIComponent(productName || 'Selected Product');
            const fallbackProduct = {
                id: productId,
                name: decodedName,
                category: productCategory || 'General',
                image: decodeURIComponent(productImage || 'Images/ForProducts/default-product.png'),
                description: 'This is a product you selected for export inquiry. Please provide more details in your message.',
                rating: 4.5
            };
            renderProductDetails(fallbackProduct);
            document.getElementById('productNameInput').value = fallbackProduct.name;
            document.getElementById('productIdInput').value = fallbackProduct.id;
            document.getElementById('productCategoryInput').value = fallbackProduct.category;
            document.getElementById('serviceType').value = 'Export';
        }
    }

    function renderProductDetails(product) {
        const container = document.getElementById('productDetailsContainer');
        const titleElement = document.getElementById('productDetailTitle');
        const decodedName = decodeURIComponent(product.name || 'Product');
        titleElement.textContent = `Inquiry About: ${decodedName}`;
        const defaultMsg = document.getElementById('defaultProductMessage');
        if (defaultMsg) defaultMsg.style.display = 'none';
        const mainImageSrc = product.image || 'Images/ForProducts/default-product.png';
        const decodedImageSrc = decodeURIComponent(mainImageSrc);
        container.innerHTML = `
            <div class="product-detail-view">
                <div class="flex flex-col md:flex-row gap-6 mb-6">
                    <div class="md:w-1/3">
                        <div class="bg-gray-50 rounded-lg p-4 flex items-center justify-center h-64">
                            <img src="${decodedImageSrc}" 
                                 alt="${decodedName}" 
                                 class="product-image max-w-full max-h-full object-contain"
                                 onerror="handleImageError(this, '${decodedImageSrc}')">
                        </div>
                    </div>
                    <div class="md:w-2/3">
                        <div class="mb-2">
                            <span class="text-sm text-blue-600 font-semibold bg-blue-50 px-3 py-1 rounded-full">
                                ${product.category || 'General'}
                            </span>
                        </div>
                        <h3 class="text-2xl font-bold text-gray-800 mb-3">${decodedName}</h3>
                        <p class="text-gray-600 mb-4">${product.description || 'No detailed description available.'}</p>
                        
                        <!-- عرض معايير/تفاصيل المنتج بشكل منظم -->
                        <div class="mt-6 bg-gray-50 rounded-lg p-4">
                            <h4 class="font-semibold text-gray-700 mb-2">Product Specifications</h4>
                            <ul class="space-y-2 text-sm text-gray-600">
                                <li><span class="font-medium">Product ID:</span> ${product.id}</li>
                                ${product.rating ? `<li><span class="font-medium">Customer Rating:</span> ${product.rating}/5.0</li>` : ''}
                                <!-- تم إزالة السطر الخاص بـ discount -->
                                <li><span class="font-medium">Inquiry Type:</span> Export</li>
                            </ul>
                        </div>
                    </div>
                </div>
                ${product.gallery && product.gallery.length > 1 ? `
                <div class="mt-6">
                    <h4 class="font-semibold text-gray-700 mb-3">Additional Images</h4>
                    <div class="flex space-x-3 overflow-x-auto py-2 gallery-scroll">
                        ${product.gallery.map((img, index) => {
                            const decodedGalleryImg = decodeURIComponent(img);
                            return `
                            <div class="flex-shrink-0">
                                <img src="${decodedGalleryImg}" 
                                     alt="Gallery image ${index + 1}" 
                                     class="gallery-thumb ${index === 0 ? 'active' : ''}"
                                     onerror="handleImageError(this, '${decodedGalleryImg}')"
                                     onclick="changeMainImage('${decodedGalleryImg}', this)">
                            </div>`;
                        }).join('')}
                    </div>
                </div>` : ''}
                <div class="mt-8 pt-6 border-t border-gray-200">
                    <p class="text-gray-700"><i class="fas fa-info-circle text-blue-500 mr-2"></i>
                        Please complete the form on the left to submit your inquiry about this product. Our export team will contact you with pricing and shipping details.
                    </p>
                </div>
            </div>
        `;
    }
    window.changeMainImage = function(imgSrc, element) {
        const decodedImgSrc = decodeURIComponent(imgSrc);
        const mainImg = document.querySelector('.product-image');
        if (mainImg) {
            mainImg.src = decodedImgSrc;
        }
        document.querySelectorAll('.gallery-thumb').forEach(thumb => {
            thumb.classList.remove('active');
        });
        if (element) {
            element.classList.add('active');
        }
    };
    window.handleImageError = function(imgElement, originalSrc) {
        console.log('Error loading image:', originalSrc);
        setTimeout(() => {
            imgElement.src = originalSrc;
        }, 1000);
        imgElement.onerror = function() {
            this.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbGw9IiNGM0Y0RjYiLz48cGF0aCBkPSJNMTUwIDc1QzEyMi4zODYgNzUgMTAwIDk3LjM4NiAxMDAgMTI1QzEwMCAxNTIuNjE0IDEyMi4zODYgMTc1IDE1MCAxNzVDMTc3LjYxNCAxNzUgMjAwIDE1Mi42MTQgMjAwIDEyNUMyMDAgOTcuMzg2IDE3Ny42MTQgNzUgMTUwIDc1Wk0yMjIgMTg5SDc4QzY3LjA3MyAxODkgNTggMTk2LjA3MyA1OCAyMDdWMjM0QzU4IDI0NC45MjcgNjcuMDczIDI1MiA3OCAyNTJIMjIyQzIzMi45MjcgMjUyIDI0MiAyNDQuOTI3IDI0MiAyMzRWMjA3QzI0MiAxOTYuMDczIDIzMi45MjcgMTg5IDIyMiAxODlaIiBmaWxsPSIjOUNBM0E2Ii8+PC9zdmc+';
            this.onerror = null; 
        };
    };
    if (!window.productsData) {
        window.productsData = {
            products: []
        };
    }
});