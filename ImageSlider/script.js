const carImages = [
  "bmw.jpeg",
  "ferrari.jpeg",
  "lambo.jpeg"
];
let currentIndex = 0;
let imageLink = document.getElementById('imageLink');
function showImage(){
  imageLink.src = carImages[currentIndex];
}

function nextImage(){
  currentIndex++;
  if (currentIndex >= carImages.length) {
    currentIndex = 0;
  }
  showImage();
}

function previousImage(){
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = carImages.length - 1;
  }
  showImage();
}

document.addEventListener("DOMContentLoaded",showImage);