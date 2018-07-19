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

	$('.result-slider').slick({
		autoplay: true,
		dots: true,
		arrows: false,
		slidesToShow: 2,
		slidesToScroll: 2,
	});

});