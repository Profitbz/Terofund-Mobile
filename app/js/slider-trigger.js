$(document).ready(function(){
    $('.js-slick-slider-container').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        arrows: false,
        centerPadding: '70px',
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '6vw',
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '6vw',
                    slidesToShow: 1
                }
            }
        ]
    });
});

