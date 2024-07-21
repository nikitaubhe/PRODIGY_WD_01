window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navLinks.forEach(link => link.classList.add('scrolled'));
    } else {
        navbar.classList.remove('scrolled');
        navLinks.forEach(link => link.classList.remove('scrolled'));
    }
});
