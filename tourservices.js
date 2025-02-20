document.querySelector('.js-logo-backhome').addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "home.html";
})



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