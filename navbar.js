// navbar.js - Responsive Navigation Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Select elements
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    
    // Only set up if burger menu exists on this page
    if (burger) {
        // Toggle navigation
        burger.addEventListener('click', function() {
            // Toggle nav
            navLinks.classList.toggle('active');
            
            // Toggle burger animation
            burger.classList.toggle('active');
            
            // Prevent body scrolling when menu is open
            document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when a link is clicked
        const navItems = document.querySelectorAll('.nav-links a');
        navItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navLinks.contains(e.target) && !burger.contains(e.target) && 
                navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when window is resized above breakpoint
        window.addEventListener('resize', function() {
            if (window.innerWidth > 900 && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                burger.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
});