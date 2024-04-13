document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector("header");
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');

    // Sticky Header Functionality
    window.addEventListener("scroll", function() {
        if (window.scrollY > 70) {
            header.classList.add("sticky");
        } else {
            header.classList.remove("sticky");
        }
    });

    // Toggle Menu Functionality
    menu.addEventListener("click", function() {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
    });

    // Close Menu on Scroll
    window.addEventListener("scroll", function() {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
    });
});
