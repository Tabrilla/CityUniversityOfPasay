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

// EYE SHOW & HIDE PASSWORD
const passwordInput = document.getElementById('password-input');
const togglePasswordVisibilityButton = document.getElementById('toggle-password-visibility');
let isPasswordVisible = false;

togglePasswordVisibilityButton.addEventListener('click', () => {
    isPasswordVisible = !isPasswordVisible;
    passwordInput.type = isPasswordVisible ? 'text' : 'password';
});

// LOGIN FORM
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  const username = document.querySelector('input[name="name"]').value;
  const password = document.querySelector('input[name="password"]').value;

  if (username === '' || password === '') {
    alert('Please enter both a username and password.');
    event.preventDefault(); // prevent form submission
  } else if (!username.endsWith('@cup-edu.ph')) {
    alert('Please use a valid cup-edu.ph email address.');
    event.preventDefault(); // prevent form submission
  } else {
    // proceed with form submission
  }
});