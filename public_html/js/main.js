$(document).ready(function () {

    $("#slider__container").owlCarousel(
        {
            loop: true,
            margin: 10,
            navText : ["",""],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true,
                },
                600: {
                    items: 1,
                    nav: false,
                },
                1000: {
                    items: 1,
                    nav: true,
                }
            }
        }
    );
});