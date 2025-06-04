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
