const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

document.body.style.background = `url(img/background/${chosenImage}) no-repeat`;
document.body.style.backgroundSize = "110%";



