$(document).ready(function () {
    var pageColor = localStorage.getItem('pageColor');

    if (!pageColor) {
        localStorage.setItem('pageColor', 'white');
        pageColor = 'white';
    }

    function setPageColor() {
        $('.page-wrapper').removeClass('white');
        $('.page-wrapper').removeClass('dark');
        $('.js-color-change').removeClass('active');

        if (pageColor === 'white') {
            $('.js-color-white').addClass('active');
        } else if (pageColor === 'dark') {
            $('.js-color-dark').addClass('active');
        }

        $('.page-wrapper').addClass(pageColor);
    }

    setPageColor();

    $('.js-color-change').click(function () {
        localStorage.setItem('pageColor', $(this).data('color'));
        pageColor = $(this).data('color');

        setPageColor();
    });
});