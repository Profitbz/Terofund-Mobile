$(document).ready(function () {
    $('.js-notify-btn').click(function (e) {
       e.stopPropagation();

       $('.js-notify-list').slideToggle();


    });

    $(document).click(function (e) {
        e.stopPropagation();
        if (!e.target.closest('.js-notify-list')) {
            $('.js-notify-list').slideUp();
        }
    });

    $('.js-notify-list');
});