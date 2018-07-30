$(document).ready(function () {

    $('.table').each(function (i, item) {
        $(item).find('.table-item').hover(function () {

            $(item).find('.first').removeClass('first');
        });
    });
});

