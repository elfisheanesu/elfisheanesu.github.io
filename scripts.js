// Optional JavaScript for smooth scroll effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add interactivity to skill progress bars
window.addEventListener('DOMContentLoaded', (event) => {
    document.querySelectorAll('.skill-progress').forEach((bar) => {
        bar.style.width = bar.style.width || '0';
    });
});
