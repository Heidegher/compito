const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: "auto",
    spaceBetween: 10,
    breakPoints: {
        320: {
            slidesPerView: 1
        },
        480: {
            slidesPerView: 3
        },
        640: {
            slidesPerView: "auto"
        }

    }
})

const hideSection = document.querySelector(".hide-section");

let lastKnownScrollPosition = 0;
 
const showSection = (actualScrollPosition) => {
    if (actualScrollPosition > 100) {
        console.log("funzione eseguita");
        hideSection.classList.remove("hide-section")
    }

}



document.addEventListener("scroll", () => {
    lastKnownScrollPosition = window.scrollY;
    console.log(lastKnownScrollPosition);
    showSection(lastKnownScrollPosition)
}) 