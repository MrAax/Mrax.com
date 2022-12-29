"use strict";


// Example 1
let example1 = new Typed("#example1", {
  stringsElement: "#title",
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Example 2
let example2 = new Typed("#example2", {
  strings: ["Example 2", "Geeky Shows"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Example 3
let example3 = new Typed("#example3", {
  strings: ["Example 3", "Geeky Shows"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Example 4
let example4 = new Typed("#example4", {
  strings: ["Example 4", "Geeky Shows"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
  // fadeOut: true,
  // fadeOutDelay: 2000,
  // cursorChar: "_",
  // startDelay: 2000,
  // backDelay: 2000,
  // showCursor: false,
  // shuffle: true,
  // smartBackspace: false,
});

// Example 5
let example5 = new Typed("#example5", {
  strings: ["You can write", "Your Name"],
  typeSpeed: 100,
  backSpeed: 10,
  loop: true,
  attr: "placeholder",
});

// Example 6
let example6 = new Typed("#example6", {
  strings: ["Example 6 ^3000", "Geeky Shows"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Example 7
let example7 = new Typed("#example7", {
  strings: ["I am Example 7 <br>Subscribe GeekyShows YT Channel"],
  // strings: ["I am Example 7 ^3000 <br>Subscribe GeekyShows YT Channel"],
  // strings: [
  //   "I am Example 7 ^3000 <br>Subscribe GeekyShows ^3000 <br>YT Channel",
  // ],
  // strings: [
  //   "I am Example 7 ^3000 `<br>Subscribe GeekyShows YT Channel`",
  // ],
  // strings: [
  //   "I am Example 7 ^3000 `<br>Subscribe GeekyShows`^3000 `<br>YT Channel`",
  // ],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// Example 8
let example8 = new Typed("#example8", {
  strings: ["Example 8", "Geeky Shows"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});




function myFunction() {
document.getElementById("myDropdown").classList.toggle("show");

}
window.onclick = function(event){
  if (!event.target.matches('.dropbtn')){
    var dropdown = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }
    }
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++