var introduction = document.querySelector(".introduction");
var navbar = document.querySelector(".navbar");

var offset = introduction.offsetHeight - navbar.offsetHeight;

window.onscroll = function(){
    if (window.pageYOffset > offset) {
        navbar.classList.remove("bottom-bar");
        navbar.classList.add("top-bar");
    }
    else{
        navbar.classList.remove("top-bar");
        navbar.classList.add("bottom-bar");
    }
}