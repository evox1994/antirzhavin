$(document).ready(function(){

	$('.b-1-slider').slick();

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
		slidesToShow: 1,
	});

	$('.b-6-slider').slick({
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

	function product() {
		if ( $(window).width() > 768 ) {
			$('.b').each(function(){
				var th, dh, ih;
				th = dh = ih = 0;
				$(this).find('.product').each(function(){
					if ( $(this).find('.product-name').height() > th ) {
						th = $(this).find('.product-name').height();
					}
					if ( $(this).find('.product-description').height() > dh ) {
						dh = $(this).find('.product-description').height();
					}
					if ( $(this).find('ul').height() > ih ) {
						ih = $(this).find('ul').height();
					}
				});
				$(this).find('.product ul').height(ih);
				$(this).find('.product-description').height(dh);
				$(this).find('.product-name').height(th);
			});
		}
	}
	product();

	$(window).resize(function(){
		product();
	});

});