$(document).ready(function(){

	$('.filter-map li').click(function(){
		var f = $(this).data('filter');
		if ( !($(this).hasClass('active')) ) {
			$('.filter-map li').removeClass('active');
			$(this).addClass('active');
			$('.maps').animate({opacity: 0}, 300);
			setTimeout(function(){
				$('.map').removeClass('active');
				$(f).addClass('active');
				$('.maps').animate({opacity: 1}, 300);
			},300);
		}
	});

	$('.clients-slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		slidesToShow: 3,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			}
		}]
	});

	$('.prim-slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
	});

	$('.b-9-slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		slidesToShow: 3,
		responsive: [{
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
			}
		}]
	});

});