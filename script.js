let elemContainer = document.querySelector("#elem-container");
let fixedImage = document.querySelector("#fixed-image");

elemContainer.addEventListener("mouseenter", function () {
    fixedImage.style.display = "block";
});
elemContainer.addEventListener("mouseleave", function () {
    fixedImage.style.display = "none";
});


let allImages = document.querySelectorAll(".elem");
allImages.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        let image = e.getAttribute("data-image");
        // console.log(image);
        fixedImage.style.backgroundImage = `url(${image})`;
    })
});