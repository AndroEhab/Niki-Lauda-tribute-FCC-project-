(() => {
    "use strict";
    document.body.classList.add("invisible")

    window.addEventListener('load', () => {
        document.body.classList.remove("invisible")
    });

    let imgs = document.querySelectorAll(".gallery-img");
    let overlay = document.getElementById("overlay");
    let imageFixed = document.getElementById("imageFixed");
    let exitBTN = document.getElementById("exitBTN");

    imgs.forEach((img) => {
        img.addEventListener("click", (e) => {
            let src = e.target.src
            overlay.classList.remove("hidden");
            imageFixed.firstElementChild.src = src;
            imageFixed.classList.remove("hidden");
            exitBTN.classList.remove("hidden");
        })

    })
    
    overlay.addEventListener("click", () => {
        overlay.classList.add("hidden");
        imageFixed.classList.add("hidden");
        exitBTN.classList.add("hidden");
    })
    exitBTN.addEventListener("click", () => {
        overlay.classList.add("hidden");
        imageFixed.classList.add("hidden");
        exitBTN.classList.add("hidden");
    })

})();