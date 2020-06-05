$(document).ready(function(){
    var y = new Date();
    $('.footer-info-left span b').text( y.getFullYear() );

    $('.select').click(function(){
        if ( $(this).find('ul').hasClass("active") ) {
            $('.select ul').removeClass("active");
        } else {
            $('.select ul').removeClass("active");
            $(this).find('ul').addClass("active");
        }
    });

    $('.select ul li').click(function(){
        var opt = $(this).data("opt");
        $('.select ul li').removeClass("active");
        $('.select ul li').each(function(){
            if ( $(this).data("opt") == opt ) {
                $(this).addClass("active");
            }
        });
        $(opt).attr('selected', 'true');
        $('.select-city').text( $(this).find('span').text() );
        $('.select-obl').text( $(this).find('p').text() );
    });

    $(document).on('click',function(e){
        if ( !$(e.target).closest(".select").length ) {
            $('.select ul').removeClass("active");
        }
        e.stopPropagation();
    });

    /*$(window).scroll(function(){
        var st = $(this).scrollTop();
        if ( $(window).width() > 768 ) {
            if ( st > 87 ) {
                $('.header').addClass("active");
            } else {
                $('.header').removeClass("active");
            }
        }
    });*/

    $('.mobile-btn').click(function(){
        if ( $('.mobile-btn').hasClass("active") ) {
            $('.mobile-menu').removeClass("active");
            $('.mobile-btn').removeClass("active");
            $('body').removeClass('active');
        } else {
            $('.mobile-btn').addClass("active");
            $('.mobile-menu').addClass("active");
            $('body').addClass('active');
        }
    });

    $('.fancybox').fancybox();
    $('input[type="tel"]').inputmask('+7 999 999-99-99');
    
    $('form textarea').on('input',function(){
        $(this).removeClass("error");
    });
    $('form input').on('input',function(){
        $(this).removeClass("error");
    });

    $('.popup-btn-next').click(function(){
        var el = $(this).attr('href');
        if ( $(this).parent().find('textarea').val().length ) {
            $('.popup-step-form').animate({opacity: 0}, 300);
            setTimeout(function(){
                $('.popup-step-form .wrapper').removeClass('active');
                $(el).addClass('active');
                $('.popup-step-form').animate({opacity: 1}, 300);
            },300);
        } else {
            $(this).parent().find('textarea').addClass('error');
        }
        return false;
    });

    $('.button-text b').click(function(){
        if ( $(this).hasClass('active') ) {
            $(this).removeClass('active');
        } else {
            $(this).addClass('active');
        }
    });

    $('.fancybox-order').click(function(){
        var name = $(this).data('name');
        var price = $(this).data('price');
        var fancy = $(this).attr('href');

        $('.popup-order-list-name span').text(name);
        $('.popup-order-list-price span').text(price);
        $('.popup-order-summa span').text(price);
        $('.popup-order-list-quantity span').text(1);
        $(fancy).click();
        return false;
    });

    $(document).on('click','.quantity-more',function(){
        var price = $(this).parent().parent().find('.popup-order-list-price span').text();
        var price = Number(price);
        var sum = $('.popup-order-summa span').text();
        var sum = Number(sum);
        var col = $(this).parent().find('span').text();
        var col = Number(col);
        col++;
        sum = sum + price;
        $(this).parent().find('span').text(col);
        $('.popup-order-summa span').text(sum);
    });

    $(document).on('click','.quantity-less',function(){
        var col = $(this).parent().find('span').text();
        var col = Number(col);
        var price = $(this).parent().parent().find('.popup-order-list-price span').text();
        var price = Number(price);
        var sum = $('.popup-order-summa span').text();
        var sum = Number(sum);

        if ( col > 1 ) {
            col--;
            sum = sum - price;
            $(this).parent().find('span').text(col);
            $('.popup-order-summa span').text(sum);
        } else {
            $.fancybox.close();
        }
    });

    $(document).on('click','.popup-order-list-del',function(){
        $.fancybox.close();
    });

    $('.popup-bg').click(function(){
        $.fancybox.close();
    });
 
    $('.volume-item').click(function(){
        if ( !$(this).hasClass('active') ){
            $(this).parents('.volume').find('.volume-item').removeClass('active');
            $(this).addClass('active');
        }
    });

    $('form button[type="submit"]').click(function(e){
        var self = this;
        if ( $(this).closest('form').find('.button-text b').hasClass('active') ) {
            $(this).closest('form').find('input').each(function(){
                if(!$(this).val().length) { 
                    e.preventDefault();
                    $(this).addClass("error"); 
                } else { 
                    $(this).removeClass("error"); 
                } 
            });
            $(this).closest('form').find('textarea').each(function(){
                if(!$(this).val().length) { 
                    e.preventDefault();
                    $(this).addClass("error"); 
                } else { 
                    $(this).removeClass("error"); 
                } 
            });
        } else {
            $(this).closest('form').find('.button-text b').addClass('error');
            e.preventDefault();
        }
        if (!e.isDefaultPrevented()) {
            setTimeout(function(){ $(self).attr('disabled', true).css('opacity', 0.7); },100)
        }
    });

    $('.b-face-slider').slick({
        dots: true
    });
    $('.b-face-slider-mobile').slick({
        arrows: false,
        dots: true
    });
    $('.b-clients-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });

    $(document).on('click','.mobile-menu-nav ul li.drop span',function(){
        var eh = $(this).parents('li.drop').find('.drop-wrap').find('ul').outerHeight();
        
        $(this).parents('li.drop').toggleClass('active');
        if ( $(this).parents('li.drop').hasClass('active') ){
            $(this).parents('li.drop').find('.drop-wrap').animate({'height':eh},300);
        } else {
            $(this).parents('li.drop').find('.drop-wrap').animate({'height':0},300);
        }
    });

    function MenuDropHeight(){
        var nh = $('.header-nav').outerHeight();
        var hh = $('.header-top').outerHeight();
        var st = $(window).scrollTop();
        var wh = $(window).outerHeight();

        if ( $(window).width() > 768 ){
            if ( st > nh ){
                $('.menu-drop').css({
                    'height': wh - hh,
                    'top': hh
                });
            } else {
                $('.menu-drop').css({
                    'height': wh - hh - nh + st,
                    'top': hh + nh - st
                });
            }
        }
    }

    $(document).on('click','.header-drop-btn',function(){
        $(this).toggleClass('active');
        MenuDropHeight();
        if ( $(this).hasClass('active') ){
            $(this).parents('.header').find('.menu-drop').addClass('active');
        } else {
            $(this).parents('.header').find('.menu-drop').removeClass('active');
        }
    });

    $(document).on('click','.menu-drop-overlay',function(){
        $('.header-drop-btn').removeClass('active');
        $('.menu-drop').removeClass('active');
    });

    $(document).on('click','.menu-drop-cat li',function(){
        var el = $(this).attr('data-cat');

        $(this).parents('.menu-drop-cat').find('li').removeClass('active');
        $(this).parents('.menu-drop-content').find('.menu-drop-nav').removeClass('active');
        $(this).addClass('active');
        $(el).addClass('active');
    });

    function HeaderScroll(){
        if ( $(window).width ){
            var hh = $('.header-top').outerHeight();
            var st = $(window).scrollTop();
            var sp = $('.header-nav').outerHeight();

            if ( st > sp ){
                $('.header').addClass('scroll');
                $('.header').css('padding-bottom',hh);
            } else {
                $('.header').removeClass('scroll');
                $('.header').removeAttr('style');
            }
        }
    }

    $(window).on('scroll',function(){
        MenuDropHeight();
        HeaderScroll();
    });

    $(window).resize(function(){

        $('.mobile-menu-nav ul li.drop.active').each(function(){
            var eh = $(this).find('.drop-wrap').find('ul').outerHeight();
            $(this).find('.drop-wrap').css('height',eh);
        });

        MenuDropHeight();
        HeaderScroll();

    });
    
});