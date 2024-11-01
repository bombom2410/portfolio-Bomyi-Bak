let currentImageIndex = 0;
const images = [
    "./img/interstellar.jpg",
    "./img/interstellar2.jpg" 
];

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    document.getElementById("main-image").src = images[currentImageIndex]; 
}
