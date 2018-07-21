$(document).ready(function(){

	$('.btn-next').click(function(){
		var el = $(this).attr('href');
		if ( $(this).parent().find('textarea').val().length ) {
			$(this).parent().removeClass('active');
			$(el).addClass('active');
		} else {
			$(this).parent().find('textarea').addClass('error');
		}
		return false;
	});

});