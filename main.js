// main.js - Responsive Navbar Functionality

// Toggle mobile menu
function setupNavbar() {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    
    // Check if navbar elements exist on this page
    if (!hamburger || !navLinks) {
        return; // Exit if not found (for pages without navbar)
    }
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle aria-expanded for accessibility
        const isExpanded = hamburger.getAttribute('aria-expanded') === 'true';
        hamburger.setAttribute('aria-expanded', !isExpanded);
    });
    
    // Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideNav = navLinks.contains(event.target) || hamburger.contains(event.target);
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburger.setAttribute('aria-expanded', 'false');
        }
    });
}

// Initialize navbar when DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    setupNavbar();
    
    //  other existing JavaScript code can go here
    // For example:
    // initializeSlider();
    // setupEventListeners();
});