let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-buttons .bx-x-circle");
let navBtns = document.querySelector(".nav-buttons");

menuOpenBtn.addEventListener("click", ()=>{
    navBtns.style.left="0";
});

menuCloseBtn.addEventListener("click", ()=>{
    navBtns.style.left="-100%";
});