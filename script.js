// Function to show a specific section
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = 'block';

    // Highlight the active navigation button
    document.querySelectorAll('.navigation a').forEach(item => {
        item.classList.remove('active');
    });
    document.querySelector('[data-target="' + sectionId + '"]').classList.add('active');
}

// Function to show the hire me popup
function showHireMePopup() {
    var hireMePopup = document.getElementById('hire-me-popup');
    hireMePopup.style.display = 'block';
}

// Function to close the hire me popup
function closeHireMePopup() {
    var hireMePopup = document.getElementById('hire-me-popup');
    hireMePopup.style.display = 'none';
}

// Add click event listeners to navigation links
document.addEventListener('DOMContentLoaded', function () {
    // Show the home section by default
    showSection('home');

    // Add click event listeners to each navigation item
    document.querySelectorAll('.navigation a').forEach(item => {
        item.addEventListener('click', function () {
            var target = this.getAttribute('data-target');
            showSection(target);
        });
    });
});

// JavaScript code to show active navigation button

// Get all navigation links
const navLinks = document.querySelectorAll('.navigation a');

// Function to highlight the active navigation button
function highlightActiveNavLink(activeTabId) {
    // Loop through all navigation links
    navLinks.forEach(link => {
        // Remove 'active' class from all navigation links
        link.classList.remove('active');
        // Get the data-target attribute of the navigation link
        const target = link.getAttribute('data-target');
        // Check if the data-target matches the active section id
        if (target === activeTabId) {
            // Add 'active' class to the navigation link
            link.classList.add('active');
        }
    });
}

// Call the function to highlight the active navigation button initially
highlightActiveNavLink('home'); // Assuming 'home' is the initially active section
