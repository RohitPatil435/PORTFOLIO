// Mobile Menu Toggle
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Phone Number Toggle
const phoneToggle = document.getElementById('phoneToggle');
const phoneNumber = document.getElementById('phoneNumber');

phoneToggle.addEventListener('click', () => {
    phoneNumber.classList.toggle('hidden');
});

// Smooth fade-in animation for elements
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate-fade-in");
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
            el.style.transition = "opacity 1s ease, transform 1s ease";
        }, index * 300);
    });
});