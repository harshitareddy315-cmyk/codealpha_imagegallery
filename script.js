// Store all gallery images

const images = [
    "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1501854140801-50d01698950b?auto=format&fit=crop&w=1200&q=80",

    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80"
];

let currentImage = 0;


// Open Lightbox

function openLightbox(index) {

    currentImage = index;

    document.getElementById("lightbox-image").src =
        images[currentImage];

    document.getElementById("lightbox").style.display =
        "flex";
}


// Close Lightbox

function closeLightbox() {

    document.getElementById("lightbox").style.display =
        "none";
}


// Next Image

function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("lightbox-image").src =
        images[currentImage];
}


// Previous Image

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightbox-image").src =
        images[currentImage];
}


// Image Category Filter

function filterImages(category) {

    const galleryItems =
        document.querySelectorAll(".gallery-item");

    const buttons =
        document.querySelectorAll(".filter-btn");


    // Remove active class

    buttons.forEach(function(button) {

        button.classList.remove("active");

    });


    // Add active class to selected button

    event.target.classList.add("active");


    // Show / Hide images

    galleryItems.forEach(function(item) {

        if (category === "all") {

            item.style.display = "block";

        }

        else if (item.classList.contains(category)) {

            item.style.display = "block";

        }

        else {

            item.style.display = "none";

        }

    });

}


// Close lightbox when clicking outside image

document.getElementById("lightbox").addEventListener(
    "click",
    function(event) {

        if (event.target === this) {
            closeLightbox();
        }

    }
);


// Keyboard Navigation

document.addEventListener("keydown", function(event) {

    const lightbox =
        document.getElementById("lightbox");

    if (lightbox.style.display === "flex") {

        if (event.key === "ArrowRight") {
            nextImage();
        }

        if (event.key === "ArrowLeft") {
            previousImage();
        }

        if (event.key === "Escape") {
            closeLightbox();
        }

    }

});