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
});