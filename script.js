// Burger menu toggle
const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', function() {
    this.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function() {
        burgerMenu.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// CTA Button click handler
const ctaButton = document.querySelector('.cta-button');
ctaButton.addEventListener('click', function() {
    alert('Thank you for your interest! Download links coming soon.');
});

// Add scroll effect to header
let lastScroll = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.padding = '0.5rem 0';
        header.style.boxShadow = '0 4px 30px rgba(0,0,0,0.2)';
    } else {
        header.style.padding = '1rem 0';
        header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animate feature cards on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all feature cards and steps
document.querySelectorAll('.feature-card, .step').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    observer.observe(card);
});

// Feature scroll buttons functionality
const featuresContainer = document.querySelector('.features');
const scrollLeftBtn = document.getElementById('scrollLeft');
const scrollRightBtn = document.getElementById('scrollRight');

scrollLeftBtn.addEventListener('click', () => {
    featuresContainer.scrollBy({
        left: -350,
        behavior: 'smooth'
    });
});

scrollRightBtn.addEventListener('click', () => {
    featuresContainer.scrollBy({
        left: 350,
        behavior: 'smooth'
    });
});

console.log('FoodCheck website loaded successfully!');
