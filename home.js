const signOut = document.querySelector(".all-links li:last-child");

signOut.addEventListener("click", (e)=>{
    e.preventDefault();
    window.location.href = "login.html";
});


