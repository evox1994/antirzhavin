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

	$('.vopros-text').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$(this).parent().find('.otvet-text').removeClass('active');
			$(this).parent().find('.vopros-text span').text('+');
		} else {
			$(this).addClass('active');
			$(this).parent().find('.otvet-text').addClass('active');
			$(this).parent().find('.vopros-text span').text('-');
		}
	});

});