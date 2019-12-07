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

console.log("window.innerWidth is " + window.innerWidth); // this one!!

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

// add something so that if the window size is changed after loading
// it will automatically update what should be in/visible **

// SIGN IN POPUP REVEAL

var signInPop = document.getElementById("sign-in-popup");
var signInButton = document.getElementById("user");
var close = document.getElementById("pop-close");

signInButton.addEventListener("click", function(){
    signInPop.style.display = "flex";
});

close.addEventListener("click", function(){
    signInPop.style.display = "none";
});

// about us popup reveal

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


// navbar js end