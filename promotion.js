/* =====================================================
   NAVIRA SHOPPING PROMOTION SLIDER
===================================================== */

var naviraPromotionIndex = 0;

var naviraPromotionTimer;


/* =====================================================
   SHOW PROMOTION
===================================================== */

function naviraPromotionShow(index) {

    var slides =
        document.querySelectorAll(
            ".naviraPromotionSlide"
        );

    var dots =
        document.querySelectorAll(
            ".naviraPromotionDot"
        );


    if (!slides.length) {
        return;
    }


    /* Keep index inside range */

    if (index < 0) {
        index = slides.length - 1;
    }

    if (index >= slides.length) {
        index = 0;
    }


    naviraPromotionIndex = index;


    /* Remove old classes */

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


    /* ================================================
       PHONE
       ================================================ */

    if (window.innerWidth <= 600) {

        slides[index].classList.add("active");

    }


    /* ================================================
       LAPTOP
       ================================================ */

    else {

        var previous =
            (index - 1 + slides.length)
            % slides.length;

        var next =
            (index + 1)
            % slides.length;


        slides[previous]
            .classList.add("prev");


        slides[index]
            .classList.add("active");


        slides[next]
            .classList.add("next");

    }


    /* Active dot */

    if (dots[index]) {

        dots[index]
            .classList.add("active");

    }

}


/* =====================================================
   GO TO PROMOTION
===================================================== */

function naviraPromotionGoTo(index) {

    naviraPromotionShow(index);

    naviraPromotionStart();
}


/* =====================================================
   NEXT PROMOTION
===================================================== */

function naviraPromotionNext() {

    naviraPromotionShow(
        naviraPromotionIndex + 1
    );

}


/* =====================================================
   AUTO SLIDER
===================================================== */

function naviraPromotionStart() {

    clearInterval(
        naviraPromotionTimer
    );


    naviraPromotionTimer =
        setInterval(function() {

            naviraPromotionNext();

        }, 4000);

}


/* =====================================================
   INITIALIZE
===================================================== */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        naviraPromotionShow(0);

        naviraPromotionStart();

    }
);


/* =====================================================
   UPDATE AFTER PHONE / LAPTOP CHANGE
===================================================== */

window.addEventListener(
    "resize",
    function() {

        naviraPromotionShow(
            naviraPromotionIndex
        );

    }
);