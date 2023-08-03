(function () {
    "use strict";
    
    var $html = document.querySelector("html");
    var $sun = document.querySelector(".sun");
    var $moon = document.querySelector(".moon")
    var $light_mode = document.querySelector("#light-mode")
    var $night_mode = document.querySelector("#night-mode")

    $html.classList = "js"

    $light_mode.addEventListener("change", function () {
        $html.classList.add("light-mode");
    })

    $night_mode.addEventListener("change", function () {
        $html.classList.remove("light-mode");
    })

    var swiper = new Swiper(".review-swiper", {
        slidesPerView: 1,
        spaceBetween: 30,      
        lazy: true,
        navigation: {
            nextEl: ".review-next",
            prevEl: ".review-prev",
        },
        pagination: {
            el: ".review-pagination",
            clickable: false,
        },
        breakpoints: {
            800: {
                slidesPerView: 2,
                spaceBetween: 30,
            },            
        },
    });
})()