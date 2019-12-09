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
var burger = document.getElementById("veggie-burger");

// if the screen is less than 1200px ...
function toggleLogoDisplay () {
    if(searchIcon.classList.contains("fa-times")) {
        egLogo.style.display = "none";
        fnLogo.style.display = "none";
        burger.style.display = "none";
    } else {
        egLogo.style.display = "flex";
        fnLogo.style.display = "flex";
        burger.style.display = "flex";
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

// listen for window size change and remove/add burger and links as necessary
window.onresize = function(e){
    if(window.innerWidth < 1200){
        navLinks.style.display = "none";
        this.burger.style.display = "flex";
    } else if(window.innerWidth > 1200){
        this.burger.style.display = "none";
        this.navLinks.style.display = "flex";
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
// var langButton = document.getElementById("language");
// var langDrop = document.getElementById("langs-list");

// // if the user is focusing on the langButton
// langButton.addEventListener("focusin", function(){
//     // and if they press enter (keycode 13)
//     document.addEventListener("keypress", function(e){
//         if(e.keyCode === 13){
//             // make the dropdown appear
//             langDrop.style.display = "block";
//             // this also makes the list keyboard accessible
//             // BUT the user must tab through all languages so not ideal
//         }
//     });
// });

// langDrop.addEventListener("focusout", function(){
//     langDrop.style.display="none";
//     // this works but it makes the list inaccessible ...
// });

// navbar js end