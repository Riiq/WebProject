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

document.addEventListener('DOMContentLoaded', () => {
    // ... (Pastikan kode JS yang sudah ada, seperti Navbar dan Fade-in, tetap ada di atas) ...
    
    // ================== LOGIC UNTUK MODAL PORTOFOLIO ==================
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalEventList = document.getElementById('modal-event-list');
    const closeButtons = document.querySelectorAll('.close-btn');

    // Data Acara untuk setiap Proyek
    const projectData = {
        'pln': {
            title: 'PLN: Gathering, Hari Besar & Peresmian Unit',
            events: [
             'Peresmian Gedung PLN UP3 Lubuk Linggau',
             'Raker PLN Semester 1',
             'Seleksi Penghargaan PLN U1D S2JB',
             'Light Up The Dream PLN lokasi Gandus',
             'Employee Gathering PLN UID S2JB',
             'Employee Gathering PLN UP3 Lubuk Linggau',
             'Customer Gathering PLN UP3 Palembang',
             'Hari Listrik Nasional PLN UID S2JB',
             'Hari Listrik Nasional PLN UP3 Palembang',
             'Hari Listrik Nasional PLN UP3 Lubuk Linggau',
             'Hari Listrik Nasional PLN UP3 Ogan Ilir',
             'Light Up The Dream PLN lokasi KM 14',
             'Media Gathering PLN UID S2JB',
             'Pameran Inovasi Motor Listrik PLN UID S2JB',
             'Gathering Transaksi Energi PLN UP3 Lubuk Linggau',
             'Employee Gathering PLN UP3 Palembang'
            ]
        },
        'dpubmtr': {
            title: 'PUPR & PUBMTR: Peresmian Infrastruktur & Launching Program',
            events: [
             'Launching BLUD Dinas PU BM TR Sumsel',
             'Peresmian IPAL',
             'Peresmian Jalan Baru Pali-Lubuk Linggau',
             'Peresmian Jembatan Bong',
             'Peresmian Infrastruktur Jembatan Air Bayau',
             'Peresmian Infrastruktur Jalan Lingkar Desa Pelang Kenidai'
            ]
        },
        'pupr' : {
			title: 'PUPR : Pekerjaan Umum dan Perumahan Rakyat',
			events: [
			 'Launching BLUD Dinas PU BM TR Sumsel',
             'Peresmian IPAL',
             'Peresmian Jalan Baru Pali-Lubuk Linggau',
             'Peresmian Jembatan Bong',
             'Peresmian Infrastruktur Jembatan Air Bayau',
             'Peresmian Infrastruktur Jalan Lingkar Desa Pelang Kenidai'
			]
		},
        'kemenpar_dispar': {
            title: 'KEMENPAR & DISPAR: Festival, Award, & Promosi Wisata Daerah',
            events: [
             'G20 KLHK Bali',
             'Anugerah Pesona Indonesia (API)',
             'Festival Sriwijaya',
             'Launching Calender of Event 2025',
             'HUT OKU Selatan',
             'HUT OKU Timur',
             'HUT Muba Batik Karnaval',
             'HUT Pagaralam',
             'Festival Sleman',
             'Jakarta Travel Fair'
            ]
        },
        'dispora': {
            title: 'DISPORA: Pekan Olahraga Daerah',
            events: [
             'Porda DIY',
             'Launching Logo Porprov Lahat'
            ]
        },
        'pertamina_brightgas': {
            title: 'PERTAMINA PATRANIAGA & BRIGHTGASS: Kompetisi Memasak',
            events: [
             'Bright Gas Cooking Competition'
            ]
        },
        'teh_pucuk': {
            title: 'TEH PUCUK: Konser Musik Anak Muda (Cool Jam)',
            events: [
             'Pucuk Cool Jam Palembang',
             'Pucuk Cool Jam Lampung'
            ]
        },
        'indomaret': {
            title: 'INDOMARET: Acara Lari Rekreasi (Fun Run)',
            events: [
             'Indomaret Fun Run'
            ]       
        },
        'citraland_asrigita': {
            title: 'ASRIGITA & CITRALAND: Perayaan Ulang Tahun Properti',
            events: [
             'Anniversary CitraLand 7th'
            ]
        },
    };
    
    // Fungsi untuk membuka modal dan mengisi konten
    openModalButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-modal-target');
            const data = projectData[targetId];

            if (data) {
                modalTitle.textContent = data.title;
                
                modalEventList.innerHTML = ''; // Kosongkan list
                data.events.forEach(eventText => {
                    const li = document.createElement('li');
                    li.textContent = eventText;
                    modalEventList.appendChild(li);
                });

                modal.style.display = 'block';
                document.body.style.overflow = 'hidden'; 
            }
        });
    });

    // Fungsi untuk menutup modal
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        });
    });

    // Fungsi untuk menutup modal jika mengklik di luar konten modal
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; 
        }
    });
});



