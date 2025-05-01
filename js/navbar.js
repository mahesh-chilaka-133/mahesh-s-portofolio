
let navToggler = document.querySelector(".nav-toggler");
let nav = document.querySelector(".nav");

navToggler.addEventListener("click", makeAcross);

function makeAcross(){
    navToggler.classList.toggle("active");
    nav.classList.toggle("open");

    if(nav.classList.contains("open")){
        nav.style.maxHeight = nav.scrollHeight+"px";
    }
    else{
        nav.removeAttribute("style");
    }
}

// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');

// Select menu and toggler
const menu = document.querySelector('.nav');
const menuIcon = document.querySelector('.nav-toggler');

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('open');
        menuIcon.classList.remove('active');
        menu.removeAttribute("style");
    });
});



