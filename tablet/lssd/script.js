let isAppOpen = false;

$(document).ready(function() {
    $('.app-item').on('click', function() {
        const link = $(this).data('link');
        $('#app-iframe').attr('src', link);
        $('.app-list-container').hide();
        $('.app').show();
        $('.app').addClass('show');
        isAppOpen = true;
    });

    $('#return-btn').on('click', function() {
        $('#app-iframe').attr('src', '');
        $('.app').hide();
        $('.app-list-container').show();
        $('.app').removeClass('show');
        isAppOpen = false;
    });
});