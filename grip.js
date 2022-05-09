let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-buttons .bx-x-circle");
let navBtns = document.querySelector(".nav-buttons");

menuOpenBtn.addEventListener("click", ()=>{
    navBtns.style.left="0";
});

menuCloseBtn.addEventListener("click", ()=>{
    navBtns.style.left="-100%";
});

new TypeIt(".grip-quote", {
    speed: 60,
    waitUntilVisible: true,
})

.type('"Good', {delay: 500})
.pause(250)
.type(" gof")
.pause(200)
.type(" begins")
.move(-8)
.type("l")
.move(null, {to:"END"})
.type(" wiht")
.pause(200)
.type(" a")
.pause(200)
.delete(4)
.type("th")
.pause(100)
.type(" a")
.pause(200)
.type(" good")
.pause(150)
.type(' grip."')
.break({delay: 500})
.break({delay: 500})
.type("<em>– Ben Hogan</em>")
.go();

$(function(){ /* creating function */
    $('.postureslide img:gt(0)').hide(); /* hide all the slideshow images after the first (first image's index is 0) */
    setInterval(function(){ /* interval for slideshow images */
      $('.postureslide :first-child').fadeOut() /* fade out first image */
         .next('img').fadeIn() /* the next image fades in */
         .end().appendTo('.postureslide');}, /* appends the first image to the end of the slideshow */
      2500); /* time interval, 2500 = 2.5 seconds */
});

$(function(){
    $('.backswingslide img:gt(0)').hide();
    setInterval(function(){
      $('.backswingslide :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.backswingslide');}, 
      2500);
});

const modalImages = document.querySelectorAll(".practice_modal img"); /* defines modalImages variable, returns all the modal image elements */
let imageSource;
modalImages.forEach((img) => {
    img.addEventListener("click", (i) => { /* click event listener for each image */
        imageSource = i.target.src; /* stores source of image in the variable imageSource */
        imageModal(imageSource);
    });
});

let imageModal = (src) => { /* source of images stored in imageSource variable */
    const modal = document.createElement("div"); 
    modal.setAttribute("class", "modal"); /* creates div with class name "modal" */
    document.querySelector("body").append(modal); /* appends the modal div to the body */
    const newImage = document.createElement("img"); /* adds image to modal div */
    newImage.setAttribute("src", src);
    const modalCloseBtn = document.createElement("i");
    modalCloseBtn.setAttribute("class", "fas fa-plus-circle close"); /* creates the close button, fontawesome icon */
    modalCloseBtn.onclick = () => {
        modal.remove(); /* when the close button is clicked, the modal is removed from the DOM */
    };
    modal.append(newImage, modalCloseBtn);
};