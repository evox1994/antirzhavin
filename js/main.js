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

    $('body').on('click',function(e){
        if ( !$(e.target).closest(".select").length ) {
            $('.select ul').removeClass("active");
        }
        e.stopPropagation();
    });

    $(window).scroll(function(){
        var st = $(this).scrollTop();
        if ( $(window).width() > 768 ) {
            if ( st > 87 ) {
                $('.header').addClass("active");
            } else {
                $('.header').removeClass("active");
            }
        }
    });

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

    $('body').on('click','.quantity-more',function(){
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

    $('body').on('click','.quantity-less',function(){
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

    $('body').on('click','.popup-order-list-del',function(){
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
    
});