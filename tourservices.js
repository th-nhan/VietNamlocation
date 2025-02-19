document.querySelector('.js-logo-backhome').addEventListener('click',(e)=>{
    e.preventDefault();
    window.location.href = "home.html";
})


// const more_btn = document.querySelector('.more-card');
// const more_tab = document.querySelector('.available-more');
// const closeIcon = document.querySelector('.more-closeIcon');

// more_btn.addEventListener('click',()=>{
//     more_tab.classList.add('open');
// })

// closeIcon.addEventListener('click', () => {
//     more_tab.classList.remove('open'); 
// });

const moreBtn = document.querySelector('.card_more');
const moreTab = document.querySelector('.available-more');
const closeIcon = document.querySelector('.more-closeIcon');

moreBtn.addEventListener('click', () => {
    moreTab.classList.add('open'); // Thêm class open
});

closeIcon.addEventListener('click', () => {
    moreTab.classList.remove('open'); // Xóa class open
});
