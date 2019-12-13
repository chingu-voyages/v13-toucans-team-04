//  MOBILE CAROUSAL EFFECT: LAZY LOADER

$(document).on('ready', function () {
    $(".lazy").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        slidesToShow: 1.3,
        slidesToScroll: 1,
        infinite: false
    });
});

// JQUERY CODE FOR LOAD MORE BUTTON

$(document).ready(function () {
    $("#loadButton").click(function () {
        $("#hideShow").toggleClass("show");
    });
});



//Mobile navbar start/////////////

 //toggle navbar animation text
const animation = () => {
    document.getElementsByTagName("LI")[0].classList.add('animated', 'bounceInDown', 'delay-1s');
    document.getElementsByTagName("LI")[6].classList.add('animated', 'zoomInDown', 'delay-2s');
   const array = [1,2,3,4,5]
   for (let index = 0; index < array.length; index++) {
       const element = array[index];
       document.getElementsByTagName("LI")[element].classList.add('animated', 'bounceIn', `delay-${element}s`);
   }
  }

   //toggle navbar
function openNav() {
    document.getElementById("myNav").style.width = "100%";
    const height = () => document.getElementById('mobile-body').style.height = "100vh";
    if(window.innerWidth > 1000){
        setTimeout(height, 500)
    }
    animation()
  }

  //toggle navbar
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
    document.getElementById('mobile-body').style.height = "100%";
    document.getElementsByTagName("LI")[0].classList.remove('animated', 'bounceInDown', 'delay-1s');
    document.getElementsByTagName("LI")[6].classList.remove('animated', 'zoomInDown', 'delay-2s');
    const array = [1,2,3,4,5]
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        document.getElementsByTagName("LI")[element].classList.remove('animated', 'bounceIn', `delay-${element}s`);
    }
  }

//Mobile navbar end/////////////

// navbar JS start 

// SEARCH BUTTON FORM REVEAL
// select the search icon
var searchButton = document.getElementById("search");
var searchIcon = document.getElementById("searchIcon");
var navLinks = document.getElementById("nav-ul");
var searchForm = document.getElementById("searchForm");

// toggle between search and X icons:
function toggleSearchIcon(){
    if (searchIcon.classList.contains("fa-search")) {
        searchIcon.classList += " fa-times";
        searchIcon.classList.remove("fa-search");
        searchButton.style.backgroundColor = "#CCCCCC";
        searchIcon.style.color = "#2a2a2a";
    } else {
        searchIcon.classList += " fa-search";
        searchIcon.classList.remove("fa-times");
        searchButton.style.backgroundColor = "#2a2a2a";
        searchIcon.style.color = "#ccc";
    }
}

// make the search input appear and disappear:
function toggleSearchInput(){
    if(searchIcon.classList.contains("fa-times")){
        searchForm.style.display = "inline-block";
    } else {
        searchForm.style.display = "none";
    }
}

// select stuff on the left
var egLogo = document.getElementById("eg-logo");
var fnLogo = document.getElementById("fn-logo");

// if the screen is less than 1200px ...
function toggleLogoDisplay () {
    if(searchIcon.classList.contains("fa-times")) {
        egLogo.style.display = "none";
        fnLogo.style.display = "none";
    } else {
        egLogo.style.display = "flex";
        fnLogo.style.display = "flex";
    }
}

function ifSmallScreen(){
    if(window.innerWidth < 1200){
        // make left logos dis/appear
        toggleLogoDisplay();
    }
}

// make the nav links disappear and reappear:
function toggleNavDisplay(){
    if(searchIcon.classList.contains("fa-times")){
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
    }
}

function ifBigScreen(){
    if(window.innerWidth > 1200){
        // make nav dis/appear
        toggleNavDisplay();
    }
}

// When the search button is clicked ...
searchButton.addEventListener("click", function(){
    // change to x and back:
    toggleSearchIcon();
    // toggle search form visibility:
    toggleSearchInput();
    // remove left nav if small screen:
    ifSmallScreen();
    // toggle nav links visibility if big screen:
    ifBigScreen();
});

// listen for window size change and remove/add links as necessary
window.onresize = function(e){
    if(window.innerWidth < 1200){
        navLinks.style.display = "none";
    } else if(window.innerWidth > 1200){
        this.closeNav();
    } else if(window.innerWidth > 1200 && window.innerWidth < 1450){
        navLinks.style.display = "none";
    } else if(window.innerWidth > 1450){
        navLinks.style.display = "flex";
    }
}

// SIGN-IN POPUP REVEAL
var signInPop = document.getElementById("sign-in-popup");
var signInButton = document.getElementById("user");
var close = document.getElementById("pop-close");

signInButton.addEventListener("click", function(){
    signInPop.style.display = "flex";
});

close.addEventListener("click", function(){
    signInPop.style.display = "none";
});

// DEVELOPERS POPUP REVEAL
var devsPop = document.getElementById("devs-popup");
var devsButton = document.getElementById("developers");
var topClose = document.getElementById("bio-close-top");
var bottomClose = document.getElementById("bio-close-bottom");

devsButton.addEventListener("click", function(){
    devsPop.style.display = "flex";
});

topClose.addEventListener("click", function(){
    devsPop.style.display = "none";
});

bottomClose.addEventListener("click", function(){
    devsPop.style.display = "none";
});

// MAKE LANGUAGE DROPDOWN ACCESSIBLE AND NAVIGABLE FOR KEYBOARD USERS
var langButton = document.getElementById("language");
var langDrop = document.getElementById("langs-list");
var lastLang = document.getElementById("last-lang");

langButton.addEventListener("focusin", function(){
    document.addEventListener("keypress", function(e){
        if(e.keyCode === 13){
            langDrop.style.display = "block";
        }
    });
});

lastLang.addEventListener("focusout", function(){
    langDrop.style.display="none";
});

// navbar js end
