let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Highlight nav links on scroll
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
            });
            let activeLink = document.querySelector('header nav a[href*=' + id + ']');
            if (activeLink) activeLink.classList.add('active');
        }
    });
};

// Toggle menu on mobile
if (menuIcon) {
    menuIcon.onclick = (e) => {
        e.stopPropagation(); // Prevent body click from firing
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

// Close menu when clicking anywhere outside menu or icon
document.body.addEventListener('click', function (e) {
    if (
        navbar.classList.contains('active') &&
        !navbar.contains(e.target) &&
        e.target !== menuIcon
    ) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// Prevent clicks inside navbar from closing it
if (navbar) {
    navbar.addEventListener('click', function (e) {
        e.stopPropagation();
    });
}

// "Hire" button opens mail
let hireBtn = document.querySelector('.btn-group .btn');
if (hireBtn) {
    hireBtn.onclick = function (e) {
        if (hireBtn.textContent.trim().toLowerCase() === 'hire') {
            e.preventDefault();
            window.location.href = "mailto:nirmankumar1999@gmail.com?subject=Hire%20Me";
        }
    };
}

document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact form');
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            const inputs = e.target.querySelectorAll('input, textarea');
            const data = {
                name: inputs[0].value,
                email: inputs[1].value,
                phone: inputs[2].value,
                subject: inputs[3].value,
                message: inputs[4].value
            };
            const res = await fetch('/contact', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
            });
            const result = await res.json();
            alert(result.message);
            if(result.success) e.target.reset();
        });
    }
});
