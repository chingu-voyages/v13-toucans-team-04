// let slideIndex = 0;

// const showSlides = () => {
//   let i;
//   let slides = document.getElementsByClassName("sliders");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;

//   if (slideIndex > slides.length) {
//       slideIndex = 1
//     }    
//   slides[slideIndex-1].style.display = "block";  
//   setTimeout(showSlides, 5000); // Change image every 3 seconds
// }

// showSlides();


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

  //this function watches size of the window and closes the mobile navbar once you reach specific width
  function width() {
    var w = window.outerWidth;
    var h = window.outerHeight;
    if (w > 1249) {
     closeNav()
    }
  }

//Mobile navbar end/////////////

