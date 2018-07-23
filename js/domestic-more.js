$(document).ready(function(){

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

	$('.instruction-slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
	});

	$('.result-slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 2,
	});

});