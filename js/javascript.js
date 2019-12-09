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
    setTimeout(height, 500)
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

// listen for window size change and remove/add burger and links as necessary
window.onresize = function(e){
    if(window.innerWidth < 1200){
        navLinks.style.display = "none";
        this.burger.style.display = "flex";
    } else if(window.innerWidth > 1200){
        this.burger.style.display = "none";
        this.navLinks.style.display = "flex";
          closeNav()
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
