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
            if ((href === 'CBMCalculator.html' || href === './CBMCalculator.html') &&
                (currentPage === 'CBMCalculator.html' || currentPage === '')) {
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
const cmBtn = document.getElementById('cmBtn');
const inchesBtn = document.getElementById('inchesBtn');
const feetBtn = document.getElementById('feetBtn');
const lengthInput = document.getElementById('length');
const widthInput = document.getElementById('width');
const heightInput = document.getElementById('height');
let currentUnit = 'cm';
function convertToCM(value, fromUnit) {
    switch (fromUnit) {
        case 'inches':
            return value * 2.54; // 1 inch = 2.54 cm
        case 'feet':
            return value * 30.48; // 1 foot = 30.48 cm
        default:
            return value;
    }
}
function convertFromCM(value, toUnit) {
    switch (toUnit) {
        case 'inches':
            return value / 2.54;
        case 'feet':
            return value / 30.48;
        default:
            return value;
    }
}
function updateInputPlaceholders(unit) {
    let placeholder = '';
    switch (unit) {
        case 'cm':
            placeholder = 'Enter length in centimeters';
            break;
        case 'inches':
            placeholder = 'Enter length in inches';
            break;
        case 'feet':
            placeholder = 'Enter length in feet';
            break;
    }

    lengthInput.placeholder = placeholder;
    widthInput.placeholder = placeholder.replace('length', 'width');
    heightInput.placeholder = placeholder.replace('length', 'height');
}
function switchUnit(unit) {
    if (unit === currentUnit) return;
    const inputs = [lengthInput, widthInput, heightInput];
    inputs.forEach(input => {
        if (input.value) {
            const valueInCM = convertToCM(parseFloat(input.value), currentUnit);
            const convertedValue = convertFromCM(valueInCM, unit);
            input.value = convertedValue.toFixed(4);
        }
    });
    currentUnit = unit;
    updateInputPlaceholders(unit);
    [cmBtn, inchesBtn, feetBtn].forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white');
        btn.classList.add('bg-gray-200', 'text-gray-700');
    });
    const activeButton = unit === 'cm' ? cmBtn : unit === 'inches' ? inchesBtn : feetBtn;
    activeButton.classList.remove('bg-gray-200', 'text-gray-700');
    activeButton.classList.add('bg-blue-600', 'text-white');
}
cmBtn.addEventListener('click', () => switchUnit('cm'));
inchesBtn.addEventListener('click', () => switchUnit('inches'));
feetBtn.addEventListener('click', () => switchUnit('feet'));
document.getElementById('calculateBtn').addEventListener('click', function () {
    const length = parseFloat(document.getElementById('length').value);
    const width = parseFloat(document.getElementById('width').value);
    const height = parseFloat(document.getElementById('height').value);
    const cartons = parseInt(document.getElementById('cartons').value);
    if (isNaN(length) || isNaN(width) || isNaN(height) || isNaN(cartons) ||
        length <= 0 || width <= 0 || height <= 0 || cartons <= 0) {
        alert('Please enter valid positive numbers for all fields.');
        return;
    }
    const lengthInCM = convertToCM(length, currentUnit);
    const widthInCM = convertToCM(width, currentUnit);
    const heightInCM = convertToCM(height, currentUnit);
    const cbm = (lengthInCM * widthInCM * heightInCM) / 1000000 * cartons;
    const cubicFeetFromM3 = cbm * 35.3147;
    let cubicFeetDirect = 0;
    if (currentUnit === 'inches') {
        cubicFeetDirect = (length * width * height) / 1728 * cartons;
    } else if (currentUnit === 'feet') {
        cubicFeetDirect = length * width * height * cartons;
    } else {
        const lengthInFeet = lengthInCM / 30.48;
        const widthInFeet = widthInCM / 30.48;
        const heightInFeet = heightInCM / 30.48;
        cubicFeetDirect = lengthInFeet * widthInFeet * heightInFeet * cartons;
    }
    const cubicFeet = cubicFeetDirect;
    document.getElementById('totalCbm').textContent = cbm.toFixed(4);
    document.getElementById('totalCubicFeet').textContent = cubicFeet.toFixed(4);
    document.getElementById('result').classList.remove('hidden');
    const resultDiv = document.getElementById('result');
    resultDiv.style.animation = 'none';
    setTimeout(() => {
        resultDiv.style.animation = 'fadeIn 0.5s ease-in-out';
    }, 10);
    resultDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
const style = document.createElement('style');
style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(10px); }
                to { opacity: 1; transform: translateY(0); }
            }
        `;
document.head.appendChild(style);
const clearForm = () => {
    document.getElementById('length').value = '';
    document.getElementById('width').value = '';
    document.getElementById('height').value = '';
    document.getElementById('cartons').value = '';
    document.getElementById('result').classList.add('hidden');
};
const calculateBtn = document.getElementById('calculateBtn');
const clearBtn = document.createElement('button');
clearBtn.type = 'button';
clearBtn.innerHTML = '<i class="fas fa-redo mr-2"></i> Clear Form';
clearBtn.className = 'w-full mt-4 bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg transition duration-300';
clearBtn.onclick = clearForm;
calculateBtn.parentNode.insertBefore(clearBtn, calculateBtn.nextSibling);
