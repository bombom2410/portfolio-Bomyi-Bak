let currentImageIndex = 0;
const images = [
    "./img/fireworksfestival.jpg",
    "./img/fireworksfestival2.jpg" 
];

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length; 
    document.getElementById("main-image").src = images[currentImageIndex]; 
}
