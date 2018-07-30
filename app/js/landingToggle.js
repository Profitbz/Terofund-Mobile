$(document).ready(function () {
    $('.js-toogle-btn').each(function (i, item) {
        $(item).click(function () {

            if ($(this).hasClass('active')) {
                $($('.assets__content')[i]).slideToggle("slow");
                $(this).removeClass('active');
            } else {
                $('.js-toogle-btn').removeClass('active');
                $($('.assets__content')).slideUp("slow");
                $($('.assets__content')[i]).slideToggle("slow");
                $(this).addClass('active');

                isOpened = true;
            }

        });
    });
});