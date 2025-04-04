// Xử lý hiệu ứng cuộn
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Xử lý hiển thị các phần khi cuộn
const observerOptions = {
    threshold: 0.2
};

// Khởi tạo observer cho hiệu ứng xuất hiện
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Xử lý cuộn mượt cho menu
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Thêm hiệu ứng khi tải trang
document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('fade-in');
});