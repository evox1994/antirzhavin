$(document).ready(function(){

	$('.btn-next').click(function(){
		var el = $(this).attr('href');
        if ( $(this).parent().find('textarea').val().length ) {
            $('.step-form').animate({opacity: 0}, 300);
            setTimeout(function(){
                $('.step-form .wrapper').removeClass('active');
                $(el).addClass('active');
                $('.step-form').animate({opacity: 1}, 300);
            },300);
        } else {
            $(this).parent().find('textarea').addClass('error');
        }
        return false;
	});

});