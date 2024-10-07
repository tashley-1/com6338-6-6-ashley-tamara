// Select the hamburger button and menu
const hamburgerButton = document.querySelector('.hamburger-btn');
const menu = document.querySelector('.hamburger-menu');

// Function to toggle the menu visibility
function toggleMenu() {
    const isMenuOpen = menu.classList.toggle('show-menu');
    hamburgerButton.setAttribute('aria-expanded', isMenuOpen ? 'true' : 'false');
}

// Function to close the menu and return focus to the hamburger button
function closeMenu() {
    if (menu.classList.contains('show-menu')) {
        menu.classList.remove('show-menu');
        hamburgerButton.setAttribute('aria-expanded', 'false');
        hamburgerButton.focus();
    }
}

// Event listener for hamburger button click to toggle menu
hamburgerButton.addEventListener('click', (event) => {
    toggleMenu();
    event.stopPropagation(); // Prevent click from propagating to the document
});

// Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !hamburgerButton.contains(event.target)) {
        closeMenu();
    }
});

// Prevent the menu from closing when clicking inside of it
menu.addEventListener('click', (event) => {
    event.stopPropagation();
});

// Close the menu when pressing the Escape key and focus the hamburger button
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const isMenuItemFocused = menu.contains(document.activeElement);
        closeMenu();
        if (isMenuItemFocused) {
            hamburgerButton.focus();
        }
    }
});
