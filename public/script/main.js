document.addEventListener("DOMContentLoaded", function () {
    const images = [
        "/images/workout1.jpg",
        "/images/workout2.jpg",
        "/images/workout3.jpg",
        "/images/workout4.jpg",
        "/images/workout5.jpg",
        "/images/workout6.jpg",
        "/images/workout7.jpg",
        "/images/workout8.jpeg",
        "/images/workout9.jpg",
        "/images/workout10.jpg"
    ];

    let index = 0;
    const imgElement = document.getElementById("slideshow-img");

    setInterval(() => {
        index = (index + 1) % images.length; // Cycle through images
        imgElement.src = images[index];
    }, 5000); // Change image every 5 seconds
});