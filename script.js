console.log("FoodCheck website loaded.");

// Get nav links and sections
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('.section');
const nav = document.querySelector('nav');

// Create underline if not exists
let underline = document.querySelector('.underline');
if(!underline){
    underline = document.createElement('div');
    underline.classList.add('underline');
    nav.appendChild(underline);
}

// Update underline position
function updateUnderline(element) {
    const navRect = nav.getBoundingClientRect();
    const elRect = element.getBoundingClientRect();
    underline.style.width = elRect.width + 'px';
    underline.style.transform = `translateX(${elRect.left - navRect.left}px)`;
}

// Smooth scroll and underline update
navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        updateUnderline(link);

        // Close mobile menu
        const navLinksContainer = document.getElementById('nav-links');
        if(navLinksContainer.classList.contains('show')) {
            navLinksContainer.classList.remove('show');
        }
    });
});

// Highlight section on scroll
function highlightCurrentSection() {
    const scrollPos = window.scrollY + window.innerHeight / 2;
    sections.forEach((section, index) => {
        if(scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            updateUnderline(navLinks[index]);
        }
    });
}

window.addEventListener('scroll', highlightCurrentSection);

// Initialize underline on page load
updateUnderline(navLinks[0]);

// Hamburger toggle
function toggleMenu() {
    const navLinksContainer = document.getElementById('nav-links');
    navLinksContainer.classList.toggle('show');
}
