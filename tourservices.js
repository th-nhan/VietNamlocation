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



