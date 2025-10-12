document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    // This listener handles the actual toggling of the menu
    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            body.classList.add('menu-open');
        } else {
            body.classList.remove('menu-open');
        }
    });

    // Optional: Close menu when a navigation link is clicked (for single-page navigation)
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 480) { // Only close if on mobile
                menuToggle.checked = false; // Uncheck the checkbox
                body.classList.remove('menu-open'); // Remove the class to close the menu
            }
        });
    });

    // Handle window resize to hide menu on large screens
    window.addEventListener('resize', function() {
        if (window.innerWidth > 480) {
            if (body.classList.contains('menu-open')) {
                menuToggle.checked = false;
                body.classList.remove('menu-open');
            }
        }
    });
});