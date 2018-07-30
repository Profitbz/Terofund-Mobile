$(document).ready(function(){
    $('.js-slick-slider-container').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        centerPadding: '70px',
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '6vw',
                    slidesToShow: 3
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
    })
});