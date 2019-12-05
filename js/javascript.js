// // VEGBURGER MENU
// // select the vegburger and patties
// var burger = document.getElementById("veggie-burger");
// var patty = document.getElementsByClassName("veggie-patty");

// burger.addEventListener("click", function(){
//     // alert("you clicked the burger") works;
//     // make the background blue: 
//     burger.style.backgroundColor = "#1EB8F4";
//     // remove the burger lines:
//     // replace with X
//     // make it toggle back and forth
// })









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

// make the nav links disappear and reappear:
function toggleNavDisplay(){
    if(searchIcon.classList.contains("fa-times")){
        navLinks.style.display = "none";
    } else {
        navLinks.style.display = "flex";
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

// When the search button is clicked ...
searchButton.addEventListener("click", function(){
    // toggle between search and X icons:
    toggleSearchIcon();
    // make the nav links disappear:
    toggleNavDisplay();
    // make the search input visible
    toggleSearchInput();
});

// searchbar ideas: 
// 1. make it phase in and out between blue inside like a special item in a video game
// 2. make toucans appear when you type in it



