document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('navbar');
    const logo = document.getElementById('logo');
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuOpenIcon = document.getElementById('menu-open');
    const menuCloseIcon = document.getElementById('menu-close');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
        const isHidden = mobileMenu.style.display === 'block';
        mobileMenu.style.display = isHidden ? 'none' : 'block';
        menuOpenIcon.style.display = isHidden ? 'block' : 'none';
        menuCloseIcon.style.display = isHidden ? 'none' : 'block';
    };

    const closeMenu = () => {
        mobileMenu.style.display = 'none';
        menuOpenIcon.style.display = 'block';
        menuCloseIcon.style.display = 'none';
    };

    menuButton.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            logo.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
            logo.classList.remove('scrolled');
        }
    });
    
    const revealElements = document.querySelectorAll('.fade-in-item');

    if ('IntersectionObserver' in window) {
        
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target); 
                }
            });
        }, observerOptions);

        revealElements.forEach(element => {
            if (element.classList.contains('service-card') || 
                element.classList.contains('project-item') || 
                element.classList.contains('stat-item') || 
                element.classList.contains('value-item')) {
                
                const parent = element.parentElement;
                
                if (parent) {
                    const siblings = Array.from(parent.children).filter(child => child.classList.contains('fade-in-item'));
                    const index = siblings.indexOf(element);

                    element.style.transitionDelay = `${index * 0.1}s`; 
                }
            }
            observer.observe(element);
        });
    } else {
        revealElements.forEach(element => {
            element.classList.add('visible');
        });
    }
});

document.addEventListener('wheel', function(event) {
    if (event.ctrlKey && event.cancelable) {
        event.preventDefault();
    }
}, { passive: false });
document.addEventListener('keydown', function(event) {
    if (event.ctrlKey && (event.key === '+' || event.key === '-' || event.key === '0')) {
        event.preventDefault();
    }
});

