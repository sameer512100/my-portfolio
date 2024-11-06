// Smooth scrolling effect
// Smooth scrolling effect for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default anchor click behavior

        const targetId = this.getAttribute('href'); // Get the target section's ID from the href attribute
        const targetElement = document.querySelector(targetId); // Select the target section element

        if (targetElement) { // Check if the target element exists
            targetElement.scrollIntoView({
                behavior: 'smooth', // Enable smooth scrolling
                block: 'start' // Align to the start of the target element
            });
        }
    });
});
// script.js

function scrollToHome() {
    // Get the home section element
    const homeSection = document.getElementById('home');
    
    // Scroll to the home section smoothly
    homeSection.scrollIntoView({ behavior: 'smooth' });
}
