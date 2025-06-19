// Load header
fetch('header.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;

        // Highlight active nav item
        const path = window.location.pathname.split("/").pop(); // e.g., "about.html"
        const navLinks = document.querySelectorAll('#header .nav-link');

        navLinks.forEach(link => {
            const href = link.getAttribute('href');

            // Remove existing 'active' classes
            link.parentElement.classList.remove('active');

            // Match current page with link href
            if (href === path || (href === 'index.html' && path === '')) {
                link.parentElement.classList.add('active');
            }
        });
    });
fetch('footer.html')
    .then(res => res.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    });
document.addEventListener('DOMContentLoaded', function () {
    document.body.addEventListener('click', function (e) {
        const toggler = e.target.closest('.navbar-toggler');
        if (toggler) {
            setTimeout(function () {
                const header = document.querySelector('.bg-light-zapster');

                if (header) {
                    if (toggler.classList.contains('collapsed')) {
                        header.classList.remove('bg-black');
                    } else {
                        header.classList.add('bg-black');
                    }
                }
            }, 10); // Small delay to ensure toggler class updates
        }
    });
});