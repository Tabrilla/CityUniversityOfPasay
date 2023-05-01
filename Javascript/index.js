// MENU BAR JS
const menuButton = document.querySelector('#menu-toggle');
const menu = document.querySelector('#mobile-menu');
const closeButton = document.querySelector('#menu-close');

menuButton.addEventListener('click', function() {
  menu.classList.add('block');
  menu.classList.remove('hidden');
});

closeButton.addEventListener('click', function() {
  menu.classList.add('hidden');
  menu.classList.remove('block');
});

//IMAGE SLIDER
var slideImg = document.getElementById("slideImg");

    var Images = new Array(
        "Images/1.jpg",
        "Images/2.jpg",
        "Images/3.jpg"
    );

var len = Images.length;
var i = 0;

    function slider() {
        if(i > len-1){
            i = 0;
        }
        slideImg.src = Images[i];
        i++;
        setTimeout('slider()',3000);
    }






