$(document).ready(function() {
    // $(document).on('click', '.zub', function () {
    //     $(this).toggleClass('zub-active');
    //     var info = $(this).attr('data-number');
    //     if ($(this).hasClass('zub-active')){
    //         $('.zub-main-right-form-zubs__text').append('<span id="'+ info +'"><i>, </i>'  + info + '</span>');
    //
    //     } else {
    //         $('.zub-main-right-form-zubs__text').find('#'+ info).remove();
    //     }
    // });
    // $(".form-phone").mask("+7(999) 999-9999");
    $('.item-main-left-slider-smal').slick({
        arrows: false,
        dots: false,
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 4,
        asNavFor: '.item-main-left-slider-big',
        focusOnSelect: true
    });
    $('.item-main-left-slider-big').slick({
        arrows: false,
        dots: false,
        asNavFor: '.item-main-left-slider-smal',
    });
    var slider = $('.item-copy-list').slick({
        arrows: false,
        dots: false,
        slidesToShow: 5,
    });
    $(document).on('click', '.slider-list-arrow--prev', function () {
        slider.slick('slickPrev');
        return false;
    });
    $(document).on('click', '.slider-list-arrow--next', function () {
        slider.slick('slickNext');
        return false;
    });

});