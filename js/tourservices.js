document.querySelector('.js-logo-backhome').addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "home.html";
})

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


const moreBtns = document.querySelectorAll('.card_more');

const moreTabs = document.querySelectorAll('.more-basic');

const closeIcons = document.querySelectorAll('.more-closeIcon');


// moreBtn.addEventListener('click', (e) => {
    
//     e.preventDefault();
//     moreTab.classList.add('more-open'); 
// });

// closeIcon.addEventListener('click', (e) => {
//     e.preventDefault();
//     moreTab.classList.remove('more-open'); 
// });


moreBtns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
     
      moreTabs.forEach(tab => tab.classList.remove('more-open'));
      
      moreTabs[index].classList.add('more-open');
    });
});
  
  
closeIcons.forEach((icon, index) => {
icon.addEventListener('click', (e) => {
    e.preventDefault();
    
    moreTabs[index].classList.remove('more-open');
    });
});

const bookingBtns = document.querySelectorAll('.button-booking');

bookingBtns.forEach((bookingBtn,index)=>{
    bookingBtn.addEventListener('click',() =>{
        window.location.href = "bookingform.html";
    });
});










//tabs

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const tabs = $$('.tab-item');
const panes = $$('.tab-pane');


const tabActive = $('.tab-item.active')
const line = $('.tabs .line')

line.style.left = tabActive.offsetLeft +'px';
line.style.width = tabActive.offsetWidth +'px';


tabs.forEach((tab, index)=>{
    const pane = panes[index];

    tab.onclick = function(){
        $('.tab-item.active').classList.remove('active')
        $('.tab-pane.active').classList.remove('active')

        line.style.left = this.offsetLeft +'px';
        line.style.width = this.offsetWidth +'px';

        this.classList.add('active')
        pane.classList.add('active')

    }
})



//chay slide

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
    currentIndex = (currentIndex + 1) % totalSlides; 
    showSlide(currentIndex);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides; 
    showSlide(currentIndex);
});


showSlide(currentIndex);

// services
document.getElementById('tour-services').addEventListener('click',() => {
    window.location.href = 'tourservices.html';
})

// toast msg
function toast({
    title ='',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast');
    if(main) {
        const toast = document.createElement('div');
        //auto remove
        const autoRemove = setTimeout(function() {
            main.removeChild(toast);
        },duration + 1000);

        //remove when clicked
        toast.onclick = function(e) {
            if(e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemove)
            }
        }
        const icons = {
            info: 'ti-info-alt',
            success: 'ti-check',
            warning: 'ti-help-alt',
            error: 'ti-face-sad',

        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast',`toast--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s 3s forwards`
        toast.innerHTML = `
         <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="ti-close"></i>
        </div>
        `;
        main.appendChild(toast);
    }
}
function showInfoToast () {
    toast ({
    title: 'Succees',
    message: 'You have successfully sent feedback',
    type: 'success',
    duration: 5000
    });
}

function showWarningToast () {
    toast ({
    title: 'Warning',
    message: 'Please enter your feedback before submitting!',
    type: 'warning',
    duration: 5000
    });
}


function validateFeedback() {
    let feedbackTextarea = document.getElementById("feedbackText");
    let feedback = document.getElementById("feedbackText").value.trim();
    if (feedback === "") {
        showWarningToast ()
        return;
    }
    showInfoToast();
    feedbackTextarea.value = ""; 
}