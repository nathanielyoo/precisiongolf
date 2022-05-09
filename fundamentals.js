let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-buttons .bx-x-circle");
let navBtns = document.querySelector(".nav-buttons");

menuOpenBtn.addEventListener("click", ()=>{
    navBtns.style.left="0";
});

menuCloseBtn.addEventListener("click", ()=>{
    navBtns.style.left="-100%";
});

var typed = new Typed(".typedanimation", {
    strings: [
        "the fundamentals. ^1000",
        "the golf grip.",
        "alignment.",
        "position.",
        "posture.",
        "the backswing.",
        "the downswing.",
        "the impact.",
        "the follow through.",
        "the finish."
    ],
    typeSpeed: 60,
    backSpeed: 50,
    loop: true
});