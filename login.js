const navbarMenu = document.querySelector(".navbar .links");
const menuBtn = document.querySelector(".menu-icon");
const hideMenuBtn = navbarMenu.querySelector(".close-icon");

const showPopupBtn = document.querySelector(".login-btn");
const formPopup = document.querySelector(".form-popup");
const hidePopupBtn = formPopup.querySelector(".close-icon");
const signupLoginLink = formPopup.querySelectorAll(".bottom-link a");


menuBtn.addEventListener("click",()=>{
    navbarMenu.classList.toggle("show-menu");
});

hideMenuBtn.addEventListener("click",()=>
    menuBtn.click()
);

showPopupBtn.addEventListener("click", () => {
    document.body.classList.toggle("show-popup");
});


hidePopupBtn.addEventListener("click", () => showPopupBtn.click());

signupLoginLink.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        formPopup.classList[link.id === 'signup-link' ? 'add' : 'remove']("show-signup");
    });
});


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
    title: 'Notification',
    message: 'Bạn cần đăng nhập!!',
    type: 'info',
    duration: 3000
    });
}
function signUpSuccess(){
    toast({
        title: 'Notification',
        message: 'Bạn đã đăng kí thành công',
        type: 'success',
        duration: 3000
    });
}


const loginSM = document.querySelector(".submit-login");
const signupSM = document.querySelector(".submit-signup");

loginSM.addEventListener("click",()=>{
    window.location.href = "home.html"
});

signupSM.addEventListener("click",()=>{

    hidePopupBtn.click();
    signUpSuccess();
})
