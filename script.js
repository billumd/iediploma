// Existing code...

// Add mobile menu functionality
function setupMobileMenu() {
    const layout = document.querySelector('.layout');
    
    // Add menu button and overlay
    const menuButton = document.createElement('button');
    menuButton.className = 'menu-toggle';
    menuButton.innerHTML = '<span></span><span></span><span></span>';
    
    const overlay = document.createElement('div');
    overlay.className = 'overlay';
    
    layout.prepend(menuButton);
    layout.prepend(overlay);
    
    // Toggle menu
    function toggleMenu() {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.toggle('active');
        overlay.classList.toggle('active');
        
        // Toggle aria-expanded
        const isExpanded = sidebar.classList.contains('active');
        menuButton.setAttribute('aria-expanded', isExpanded);
    }
    
    // Event listeners
    menuButton.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);
    
    // Close menu when clicking a link (mobile only)
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMenu();
            }
        });
    });
    
    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            const sidebar = document.querySelector('.sidebar');
            overlay.classList.remove('active');
            sidebar.classList.remove('active');
        }
    });
}

// Update the existing initialization
document.addEventListener('DOMContentLoaded', () => {
    createNavigation();
    updateActiveNavLink();
    setupFormAutoSave();
    setupMobileMenu(); // Add this line
});

// Rest of your existing code...
