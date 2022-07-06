$(document).ready(function () {
    $('.carousel').slick({
        infinite: false,
        arrows: true,
        responsive: [
            {
                breakpoint: 966,
                settings: {
                    arrows: false,
                },
            },
        ],
    })
});