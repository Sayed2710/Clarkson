

$(document).ready(function () {

    $('.small_Nav_switch ').on('click', function () {
        $('.Nav_bar .small_Nav').css({ right: '0px' });
        $('.Nav_bar .over').fadeIn(1000);

    })

    $('.Nav_bar .over , .Nav_bar .small_Nav ul li').on('click', function () {
        $('.Nav_bar .small_Nav').css({ right: '-1093px' });
        $('.Nav_bar .over').fadeOut(300);
    })

})
window.onload = function () {
    $('.loading').fadeOut(100, function () { $('body').css('overflow', 'visible') })

}
