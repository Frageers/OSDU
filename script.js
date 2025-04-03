document.addEventListener("DOMContentLoaded", function() {
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(function(dropdown) {
    const menu = dropdown.querySelector('.dropdown-menu');
    const link = dropdown.querySelector('a'); // The anchor element that opens the dropdown
    
    // Add hover event listeners
    dropdown.addEventListener('mouseenter', function() {
        // Get bounding box of the link
        const linkRect = link.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();

        // Check if the menu overflows on the right side
        const windowWidth = window.innerWidth;
        const menuRight = linkRect.left + menuRect.width;

        // If menu is going off the screen to the right, change the position
        if (menuRight > windowWidth) {
            // Open the menu to the left instead
            menu.style.left = `-${menuRect.width - linkRect.width}px`;
        } else {
            // Default behavior: open to the right
            menu.style.left = '0';
        }
    });

    // Ensure the dropdown is closed when the mouse leaves
    dropdown.addEventListener('mouseleave', function() {
        menu.style.left = '0'; // Reset the left positioning
    });
});
});
