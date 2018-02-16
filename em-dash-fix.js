jQuery(function ($) {
    $('input[type="text"], input[type="email"]').keyup(function (e) {
        if($(this).val().indexOf('–') != -1) {
            $(this).val($(this).val().replace('–', '-'));
        }
    });
});
