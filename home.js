const signOut = document.querySelector(".signout");

signOut.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "login.html";
});

const signOutMB = document.querySelector(".signout-mobi");

signOutMB.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "login.html";
});


//chạy slide review
let currentIndex = 0;
const slides = document.querySelectorAll('.swiper-slider');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides; // Tăng chỉ số và quay lại nếu vượt quá số slide
    showSlide(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; // Giảm chỉ số và quay lại nếu dưới 0
    showSlide(currentIndex);
});


showSlide(currentIndex);