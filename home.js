const signOut = document.querySelector(".all-links li:last-child");

signOut.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "login.html";
});


document.addEventListener("DOMContentLoaded", function () {
  let slides = document.querySelectorAll(".swiper-slider");
  let currentIndex = 0;

  slides[currentIndex].style.display = "block";
  slides[currentIndex].classList.add("active");

  
  function showSlide(index) {
    slides.forEach(slide => slide.style.display = "none"); // Ẩn tất cả slide

    if (index < 0) {
        currentIndex = slides.length - 1; // Quay về slide cuối cùng
    } else if (index >= slides.length) {
        currentIndex = 0; // Quay về slide đầu tiên
    } else {
        currentIndex = index;
    }

    slides[currentIndex].style.display = "block";
  }
  
  document.getElementById("nextBtn").addEventListener("click", function () {
      showSlide(currentIndex + 1);
  });

  document.getElementById("prevBtn").addEventListener("click", function () {
      showSlide(currentIndex - 1);
  });
});
