document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('ul li a');
    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent default link behavior
            const targetId = this.getAttribute('href').substr(1); // Extract target ID from href attribute
            const targetElement = document.getElementById(targetId);
            targetElement.classList.toggle('fade-in'); // Toggle fade-in class on target element
        });
    });
});
