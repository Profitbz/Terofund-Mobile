$(document).ready(function () {
    var isOpened = true;

    function openPage() {
        $('.page-aside').toggleClass('hidden');
        $('.page-main').toggleClass('opened');
        $('.main-container').toggleClass('opened');
        $('.programm-chart__container').toggleClass('opened');
        $('.header-info_sub').fadeToggle("fast");
        $('.main-logo_header').toggleClass('visible');
        $('.hamburger').toggleClass('is-active');
    }

    $('.aside-btn').click(function () {
        if (isOpened) {
            openPage();
            isOpened = !isOpened;
        } else {
            setTimeout(function () {
                openPage();
                isOpened = !isOpened;
            }, 150);
        }
    });
});