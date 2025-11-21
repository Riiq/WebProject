document.addEventListener('DOMContentLoaded', () => {

    // ================== DATA UNTUK KONTEN DINAMIS ==================

    const serviceData = [
        {
            imgSrc: 'img/EO.jpeg',
            imgAlt: 'Event Organizer',
            title: 'Event Organizer',
            description: 'Memberikan solusi menyeluruh agar acara berjalan profesional dan sesuai ekspektasi klien.',
            features: [
                'Desain dan konsep event',
                'Manajemen acara dari awal hingga akhir'
            ]
        },
        {
            imgSrc: 'img/MICE.jpeg',
            imgAlt: 'MICE',
            title: 'MICE',
            description: 'Membantu perusahaan mengadakan event profesional dengan koordinasi yang efisien.',
            features: [
                'Akomodasi',
                'Transportasi dan logistik',
                'Manajemen kegiatan dan jadwal acara'
            ]
        },
        {
            imgSrc: 'img/special_booth.jpeg',
            imgAlt: 'Special Booth',
            title: 'Special booth',
            description: 'Meningkatkan daya tarik visual di pameran dan memperkuat branding klien.',
            features: [
                'Pembuatan booth custom',
                'Desain visual dan material pameran',
                'Produksi pendukung seperti banner dan pamflet'
            ]
        },
        {
            imgSrc: 'img/production.jpeg',
            imgAlt: 'Production',
            title: 'Production',
            description: 'Produksi segala keperluan event, kemungkinan merujuk pada segala kebutuhan fisik atau teknis.',
            features: [
                'Jersey dan merchandise',
                'Banner dan backdrop',
                'Pamflet dan materi cetak lainnya'
            ]
        },
        {
            imgSrc: 'img/promotion.jpeg',
            imgAlt: 'Promotion',
            title: 'Promotion',
            description: 'Memperluas jangkauan audiens dan meningkatkan awareness acara atau produk.',
            features: [
                'Produksi jersey promosi',
                'Pembuatan banner dan pamflet',
                'Strategi publikasi event'
            ]
        },
        {
            imgSrc: 'img/equipment.jpg',
            imgAlt: 'Equipment',
            title: 'Equipment event (rent)',
            description: 'Memberikan solusi efisien tanpa harus membeli perlengkapan event.',
            features: [
                'Sewa alat audio, lighting, dan perlengkapan teknis',
                'Aksesori event seperti tas, meja, kursi, dan tenda',
                'Dukungan logistik selama acara'
            ]
        },
        {
            imgSrc: 'img/souvenir.jpg',
            imgAlt: 'Souvenir',
            title: 'Souvenir',
            description: 'Menambah nilai personal dan kenangan positif bagi peserta event.',
            features: [
                'Merchandise custom',
                'Gift set korporasi',
                'Produksi massal souvenir'
            ]
        },
        {
            imgSrc: 'img/conceptor.jpeg',
            imgAlt: 'Conceptor',
            title: 'Conceptor',
            description: 'Mewujudkan acara dengan identitas dan pengalaman yang berkesan.',
            features: [
                'Pengembangan konsep acara unik dan tematik',
                'Desain ide visual dan storytelling event',
                'Desain ide visual dan storytelling event'
            ]
        }
    ];

    const portfolioData = [
        { id: 'pln', imgSrc: 'logo/pln.png', imgAlt: 'Kolaborasi PLN', badgeClass: 'badge-orange', badgeText: 'PLN', title: 'Kerjasama Brand: PT PLN (Persero)', description: 'Total empat acara besar berhasil kami selenggarakan.' },
        { id: 'dpubmtr', imgSrc: 'logo/dpubmtr.png', imgAlt: 'Event DPUBMTR', badgeClass: 'badge-blue', badgeText: 'DPUBMTR', title: 'Pameran Inovasi Infrastruktur', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'pupr', imgSrc: 'logo/pupr.png', imgAlt: 'Event PUPR', badgeClass: 'badge-pink', badgeText: 'PUPR', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'kemenpar_dispar', imgSrc: 'logo/pupr.png', imgAlt: 'Event DISPAR', badgeClass: 'badge-pink', badgeText: 'DISPAR', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'kemenpar_dispar', imgSrc: 'logo/kemenpar.png', imgAlt: 'Event KEMENPAR', badgeClass: 'badge-pink', badgeText: 'KEMENPAR', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'dispora', imgSrc: 'logo/dispora.png', imgAlt: 'Event DISPORA', badgeClass: 'badge-pink', badgeText: 'DISPORA', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'dkni', imgSrc: 'logo/dkni.png', imgAlt: 'Event DKNI', badgeClass: 'badge-pink', badgeText: 'Dewan Kerajinan Nasional', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'pertamina_brightgas', imgSrc: 'logo/brightgas.png', imgAlt: 'Event Brightgas', badgeClass: 'badge-pink', badgeText: 'Brightgas', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'citraland_asrigita', imgSrc: 'logo/asrigita.png', imgAlt: 'Event Asrigita', badgeClass: 'badge-pink', badgeText: 'Asrigita', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'citraland_asrigita', imgSrc: 'logo/citraland.png', imgAlt: 'Event Citraland', badgeClass: 'badge-pink', badgeText: 'Citraland', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'teh_pucuk', imgSrc: 'logo/pucuk.png', imgAlt: 'Event Teh Pucuk', badgeClass: 'badge-pink', badgeText: 'Teh Pucuk', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'indomaret', imgSrc: 'logo/indomaret.png', imgAlt: 'Event Indomaret', badgeClass: 'badge-pink', badgeText: 'Indomaret', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'pertamina_brightgas', imgSrc: 'logo/pertamina.png', imgAlt: 'Event Pertamina', badgeClass: 'badge-pink', badgeText: 'Pertamina Patraniaga', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' },
        { id: 'pertamina_brightgas', imgSrc: 'logo/sunco.png', imgAlt: 'Event Sunco', badgeClass: 'badge-pink', badgeText: 'Sunco', title: 'Konferensi Regional Pembangunan', description: 'Detail event menarik lainnya dari klien ini.' }
    ];

    // Data Acara untuk setiap Proyek (Modal)
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
        'kemenpar_dispar' : {
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


    // ================== FUNGSI UNTUK RENDER KONTEN ==================

    /**
     * Membuat daftar fitur (list item) untuk service card
     */
    function createFeatureList(features) {
        return features.map(feature => `<li>${feature}</li>`).join('');
    }

    /**
     * Mengisi grid layanan dengan data dari serviceData
     */
    function renderServices() {
        const servicesGrid = document.querySelector('.services-grid');
        if (!servicesGrid) return;

        servicesGrid.innerHTML = serviceData.map(service => `
            <div class="service-card fade-in-item">
                <img src="${service.imgSrc}" alt="${service.imgAlt}">
                <div class="card-body">
                    <h3>${service.title}</h3>
                    <p>${service.description}</p>
                    <ul>
                        ${createFeatureList(service.features)}
                    </ul>
                </div>
            </div>
        `).join('');
    }

    /**
     * Mengisi grid portfolio dengan data dari portfolioData
     */
    function renderPortfolio() {
        const portfolioGrid = document.querySelector('.portfolio-grid');
        if (!portfolioGrid) return;

        portfolioGrid.innerHTML = portfolioData.map(item => `
            <div class="project-item fade-in-item portfolio-zoom" data-project="${item.id}">
                <img src="${item.imgSrc}" alt="${item.imgAlt}">
                <div class="overlay">
                    <span class="badge ${item.badgeClass}">${item.badgeText}</span>
                    <h4>${item.title}</h4>
                    <p>${item.description}</p>
                    <button class="btn btn-white-small open-modal-btn" data-modal-target="${item.id}">Lihat Acara Lebih Lanjut</button>
                </div>
            </div>
        `).join('');
    }

    // ================== EKSEKUSI RENDER KONTEN ==================
    
    renderServices();
    renderPortfolio();

    // ================== LOGIKA NAVIGASI & MENU MOBILE ==================
    
    const nav = document.getElementById('navbar');
    const logo = document.getElementById('logo'); // Asumsi .logo-img adalah targetnya, namun logo-img tidak punya ID
    const logoImg = document.querySelector('.logo-img');
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
            if(logoImg) logoImg.classList.add('scrolled'); // Menambahkan check
        } else {
            nav.classList.remove('scrolled');
            if(logoImg) logoImg.classList.remove('scrolled'); // Menambahkan check
        }
    });
    
    // ================== LOGIKA MODAL PORTOFOLIO ==================
    
    // Variabel ini HARUS dideklarasikan SETELAH renderPortfolio() dijalankan
    const openModalButtons = document.querySelectorAll('.open-modal-btn');
    const modal = document.getElementById('project-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalEventList = document.getElementById('modal-event-list');
    const closeButtons = document.querySelectorAll('.close-btn');

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

// ================== REDIRECT BUTTON WHATSAPP ==================

	    function WAredirect() {
      window.open("https://wa.me/6285809859423?text=Halo%2C%20saya%20ingin%20melakukan%20konsultasi.", "_blank");
    }

    // ================== LOGIKA ANIMASI FADE-IN (INTERSECTION OBSERVER) ==================
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
        // Fallback untuk browser lama
        revealElements.forEach(element => {
            element.classList.add('visible');
        });
    }
});

// ================== REDIRECT BUTTON WHATSAPP ==================

    function WAredirect() {
      window.open("https://wa.me/6285809859423?text=Halo%2C%20saya%20ingin%20melakukan%20konsultasi.", "_blank");
    }

// ================== PENCEGAH ZOOM & KEYDOWN ==================
// Diletakkan di luar DOMContentLoaded karena ini adalah event listener global

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


