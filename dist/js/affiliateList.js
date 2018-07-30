$(document).ready(function () {
    $('.js-network-1').find('.affiliate-table__icon').click(function () {
        $(this).find('svg').toggleClass('rotate');
        $('.js-network-1-container').slideToggle("slow");
    });

    $('.js-network-2').find('.affiliate-table__icon').click(function () {
        $(this).find('svg').toggleClass('rotate');
        $('.js-network-2-container').slideToggle("slow");
    });
});