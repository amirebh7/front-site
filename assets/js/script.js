const scrollButton = document.getElementById('scrollButton');

// نمایش دکمه با انتقال
window.addEventListener('scroll', () => {
    if (window.scrollY >= 50) {
        scrollButton.style.opacity = 1;
    } else {
        scrollButton.style.opacity = 0;
    }
});

// اسکرول به بالای صفحه با انتقال
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// تابعی برای مخفی کردن دکمه با انتقال
function hideButtonWithTransition() {
    scrollButton.style.opacity = 0;
}


// تاخیری برای مخفی کردن دکمه با انتقال
setTimeout(hideButtonWithTransition, 1000); // به عنوان مثال، بعد از 5 ثانیه مخفی می‌شود
