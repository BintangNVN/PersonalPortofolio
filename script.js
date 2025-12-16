const header= document.querySelector("header");

window.addEventListener ("scroll", function() {
    header.classList.toggle ("sticky", this.window.scrollY > 120)
})

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
};

// Portfolio data
const portfolioData = {
    'dicoding-web': {
        title: 'Dasar Pemrograman Web',
        company: 'Dicoding',
        image: 'asset/dicoding 1.png',
        description: 'Sertifikat dari Dicoding yang menunjukkan pemahaman dasar dalam pemrograman web. Mencakup konsep HTML, CSS, dan JavaScript untuk membangun website yang responsif dan interaktif.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Web Development']
    },
    'dicoding-frontend': {
        title: 'Front-end Untuk Pemula',
        company: 'Dicoding',
        image: 'asset/dicoding frontend.png',
        description: 'Sertifikat yang membuktikan kemampuan dalam pengembangan front-end. Mencakup teknik-teknik modern untuk membuat antarmuka pengguna yang menarik dan fungsional.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'Front-end', 'Responsive Design']
    },
    'k3lh': {
        title: 'K3LH (Keselamatan dan Kesehatan Kerja)',
        company: 'ILO',
        image: 'asset/k3lh.png',
        description: 'Sertifikat K3LH dari ILO yang menunjukkan pemahaman tentang keselamatan dan kesehatan kerja di lingkungan teknologi informasi.',
        technologies: ['K3LH', 'Workplace Safety']
    },
    'dasar-js': {
        title: 'Dasar Javascript',
        company: 'Codepolitan',
        image: 'asset/dasar js.png',
        description: 'Sertifikat yang menunjukkan penguasaan dasar-dasar JavaScript, termasuk variabel, fungsi, array, object, dan konsep pemrograman fundamental lainnya.',
        technologies: ['JavaScript', 'Programming Fundamentals']
    },
    'git': {
        title: 'GIT Untuk Pemula',
        company: 'Codepolitan',
        image: 'asset/git.png',
        description: 'Sertifikat yang membuktikan kemampuan menggunakan Git untuk version control, termasuk commit, branch, merge, dan kolaborasi dalam pengembangan software.',
        technologies: ['Git', 'Version Control', 'GitHub']
    },
    'kasir': {
        title: 'Website Kasir',
        company: 'Kasir',
        image: 'asset/kasir.png',
        description: 'Aplikasi web untuk sistem kasir yang memungkinkan pengelolaan transaksi penjualan, pencatatan produk, dan laporan keuangan secara digital.',
        technologies: ['Laravel', 'CSS', 'PHP', 'MySQL']
    },
    'rental-motor': {
        title: 'Website Rental Motor',
        company: 'Rental Motor',
        image: 'asset/rental motor.png',
        description: 'Sistem manajemen rental motor berbasis web yang memudahkan pengelolaan pemesanan, ketersediaan kendaraan, dan transaksi rental.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL']
    },
    'data-siswa': {
        title: 'Website Data Siswa',
        company: 'Data Siswa',
        image: 'asset/data siswa.png',
        description: 'Aplikasi web untuk mengelola data siswa, termasuk informasi pribadi, nilai akademik, dan administrasi sekolah secara terpusat.',
        technologies: ['HTML', 'PHP', 'Css']
    },
    'perpustakaan': {
        title: 'Website Perpustakaan',
        company: 'Perpus',
        image: 'asset/perpustakaan.png',
        description: 'Sistem manajemen perpustakaan digital yang memungkinkan pencarian buku, peminjaman, pengembalian, dan pengelolaan koleksi perpustakaan.',
        technologies: ['HTML', 'CSS', 'JavaScript', 'PHP', 'MySQL', 'Laravel']
    },
    'bunga-mtk': {
        title: 'Website Bunga Matematika',
        company: 'Bunga',
        image: 'asset/bunga mtk.png',
        description: 'Website edukatif yang menjelaskan konsep bunga matematika dengan interaktif, termasuk kalkulator bunga sederhana dan majemuk.',
        technologies: ['HTML', 'CSS', 'JavaScript']
    },
    'web-pandu': {
        title: 'Website Event Anniversary PHC',
        company: 'Anniversary PHC',
        image: 'asset/WEBSITE PANDU HOLDING.png',
        description: 'Website event yang menjelaskan acara anniversary PHC, termasuk jadwal, lokasi, dan informasi terkait.',
        technologies: ['Odoo', 'Website Modul']
    },
    'qweb-odoo': {
        title: 'Print QWEB Odoo',
        company: 'Odoo',
        image: 'asset/qweb.png',
        description: 'Print QWEB Odoo yang menjelaskan hasil print QWEB Odoo, termasuk desain, layout, dan informasi terkait.',
        technologies: ['Python', 'XML']
    }
};

// Portfolio Modal Functionality
const portfolioRows = document.querySelectorAll('.row[data-project]');
const modal = document.getElementById('portfolio-modal');
const closeModal = document.querySelector('.close-modal');
const modalImage = document.getElementById('modal-image');
const modalTitle = document.getElementById('modal-title');
const modalCompany = document.getElementById('modal-company');
const modalDescription = document.getElementById('modal-description');
const modalTech = document.getElementById('modal-tech');

portfolioRows.forEach(row => {
    row.addEventListener('click', () => {
        const projectId = row.getAttribute('data-project');
        const project = portfolioData[projectId];
        
        if (project) {
            modalImage.src = project.image;
            modalImage.alt = project.title;
            modalTitle.textContent = project.title;
            modalCompany.textContent = project.company;
            modalDescription.textContent = project.description;
            
            // Clear and populate technologies
            modalTech.innerHTML = '';
            project.technologies.forEach(tech => {
                const techTag = document.createElement('span');
                techTag.textContent = tech;
                modalTech.appendChild(techTag);
            });
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

// Email Form Functionality (Formspree)
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');
const formAction = contactForm ? contactForm.getAttribute('action') : null;

if (contactForm && formAction) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const sendBtn = contactForm.querySelector('.send-btn');
        const originalText = sendBtn ? (sendBtn.value || sendBtn.innerText) : '';
        if (sendBtn) {
            sendBtn.value = 'Sending...';
            sendBtn.disabled = true;
        }

        const data = new FormData(contactForm);

        try {
            const response = await fetch(formAction, {
                method: contactForm.method || 'POST',
                headers: { 'Accept': 'application/json' },
                body: data
            });

            if (response.ok) {
                formMessage.textContent = 'Pesan berhasil dikirim! Terima kasih telah menghubungi saya.';
                formMessage.className = 'form-message success';
                formMessage.style.display = 'block';
                contactForm.reset();
            } else {
                formMessage.textContent = 'Terjadi kesalahan. Silakan coba lagi atau kirim langsung ke email.';
                formMessage.className = 'form-message error';
                formMessage.style.display = 'block';
            }
        } catch (error) {
            console.error('Formspree error:', error);
            formMessage.textContent = 'Terjadi kesalahan jaringan. Silakan coba lagi.';
            formMessage.className = 'form-message error';
            formMessage.style.display = 'block';
        } finally {
            if (sendBtn) {
                sendBtn.value = originalText || 'Send Message';
                sendBtn.disabled = false;
            }
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    });
}

// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

const applyTheme = (theme) => {
    if (theme === 'light') {
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
    }
    const icon = themeToggle?.querySelector('i');
    if (icon) {
        icon.className = theme === 'light' ? 'bx bx-sun' : 'bx bx-moon';
    }
    localStorage.setItem('theme', theme);
};

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
applyTheme(storedTheme || (prefersDark ? 'dark' : 'light'));

themeToggle?.addEventListener('click', () => {
    const nextTheme = body.classList.contains('light-theme') ? 'dark' : 'light';
    applyTheme(nextTheme);
});