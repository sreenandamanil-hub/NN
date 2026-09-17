/* =========================================
   NAVIRA ONAM 3 POSTER SLIDER
========================================= */

let naviraOnamIndex = 0;
let naviraOnamTimer;


function naviraOnamShow(index) {

    const slides = document.querySelectorAll(".naviraOnamSlide");
    const dots = document.querySelectorAll(".naviraOnamDot");

    if (!slides.length) {
        return;
    }

    if (index >= slides.length) {
        naviraOnamIndex = 0;
    }

    if (index < 0) {
        naviraOnamIndex = slides.length - 1;
    }


    slides.forEach(function(slide) {

        slide.classList.remove(
            "active",
            "prev",
            "next"
        );

    });


    dots.forEach(function(dot) {

        dot.classList.remove("active");

    });


    const total = slides.length;

    const previousIndex =
        (naviraOnamIndex - 1 + total) % total;

    const nextIndex =
        (naviraOnamIndex + 1) % total;


    slides[naviraOnamIndex]
        .classList.add("active");


    slides[previousIndex]
        .classList.add("prev");


    slides[nextIndex]
        .classList.add("next");


    if (dots[naviraOnamIndex]) {

        dots[naviraOnamIndex]
            .classList.add("active");

    }
}


function naviraOnamChange(direction) {

    naviraOnamIndex += direction;

    naviraOnamShow(naviraOnamIndex);

    naviraOnamRestart();
}


function naviraOnamGoTo(index) {

    naviraOnamIndex = index;

    naviraOnamShow(naviraOnamIndex);

    naviraOnamRestart();
}


function naviraOnamStart() {

    naviraOnamTimer = setInterval(function() {

        naviraOnamIndex++;

        naviraOnamShow(naviraOnamIndex);

    }, 4000);
}


function naviraOnamRestart() {

    clearInterval(naviraOnamTimer);

    naviraOnamStart();
}


document.addEventListener(
    "DOMContentLoaded",
    function() {

        naviraOnamShow(0);

        naviraOnamStart();

    }
);