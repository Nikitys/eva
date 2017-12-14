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
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
    });
    $(document).on('click', '.slider-list-arrow--prev', function () {
        slider.slick('slickPrev');
        return false;
    });
    $(document).on('click', '.slider-list-arrow--next', function () {
        slider.slick('slickNext');
        return false;
    });
    $(document).on('click','.hamburger', function () {
        if ($(this).hasClass('is-active')){
            $('html').removeClass('no-scroll');
        } else {
            $('html').addClass('no-scroll');
        }
        $(this).toggleClass('is-active');
        $('.mob-menu').toggleClass('mob-menu--active');

    });
    $(document).on('click','.items-main-left-block__title', function () {
        $(this).find('.plus-minus-toggle').toggleClass('collapsed');
        $(this).parents('.items-main-left-block').find('.items-main-left-list').slideToggle();
    });
    $(document).on('click','.items-main-right-top-title', function () {
        var classLink = $(this).attr('data-link')
        if ($('.' + classLink).hasClass('active')){
            $('html').removeClass('no-scroll');
        } else {
            $('html').addClass('no-scroll');
        }
        $('.' + classLink).toggleClass('active');

    });
    $(document).on('click','.items-main-right-but', function () {
        $(this).parents('.items-main--full-page-menu').removeClass('active');
        $('html').removeClass('no-scroll');
        return false;
    });
    $(document).on('click','.items-main-right-top-center-close', function () {
        $(this).parents('.items-main--full-page-menu').removeClass('active');
        $('html').removeClass('no-scroll');
    });
});