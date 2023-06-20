
window.onload = function() {
  var images = document.querySelectorAll('.slideshow-image');
  var currentImageIndex = 0;

  function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
  }

  setInterval(showNextImage, 5000); // Change image every 5 seconds

};

var formContainer = document.querySelector('.signup');
var toggleButton = document.querySelector('#toggleButton');
var googleForm = document.querySelector('#googleForm');

document.addEventListener('DOMContentLoaded', function() {
    var formContainer = document.querySelector('.signup');
    var toggleButton = document.querySelector('#toggleButton');
    var googleForm = document.querySelector('#googleForm');

    googleForm.style.display = 'none';

    toggleButton.addEventListener('click', function() {
        if (googleForm.style.display === 'none') {
            googleForm.style.display = 'block';
            formContainer.style.height = '900px';
        } else {
            googleForm.style.display = 'none';
            formContainer.style.height = '250px';
        }
    });
});

window.addEventListener('load', function() {
  var loader = document.querySelector('.loading-animation');
  setTimeout(function() {
    loader.classList.add('loaded');
  }, 1000);
});
