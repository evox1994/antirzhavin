$(document).ready(function(){

	function filter() {
		var f = $('.filter li.active').data('filter');
		var sf;

		$('.subfilter li').each(function(){
			if ( $(this).hasClass('active') ) {
				sf = $(this).data('filter');
			}
		});

		$('.reviews-list li').removeClass('active');
		if ( sf ) {
			$('.reviews-list li').each(function(){
				if ( ($(this).hasClass(f)) && ($(this).hasClass(sf)) ) {
					$(this).addClass('active');
				}
			});
		} else {
			$('.reviews-list li').each(function(){
				if ( $(this).hasClass(f) ) {
					$(this).addClass('active');
				}
			});
		}
	}
	filter();

	$('.filter li').click(function(){
		if ( !($(this).hasClass('active')) ) {
			$('.filter li').removeClass('active');
			$(this).addClass('active');
			$('.reviews-list').animate({opacity: 0},300);
			setTimeout(function(){
				filter();
				$('.reviews-list').animate({opacity: 1},300);
			},300);
		}
		$('.filters').removeClass('active');
		$('.filter-btn').removeClass('active');
		$('.filter-btn span').text('Фильтр');
		$('body').removeClass('active');
		$('.header').removeClass('filter');
	});

	$('.subfilter li').click(function(){
		if ( !($(this).hasClass('active')) ) {
			$('.subfilter li').removeClass('active');
			$(this).addClass('active');
			$('.reviews-list').animate({opacity: 0},300);
			setTimeout(function(){
				filter();
				$('.reviews-list').animate({opacity: 1},300);
			},300);
		} else {
			$('.subfilter li').removeClass('active');
			$('.reviews-list').animate({opacity: 0},300);
			setTimeout(function(){
				filter();
				$('.reviews-list').animate({opacity: 1},300);
			},300);
		}
		$('.filters').removeClass('active');
		$('.filter-btn').removeClass('active');
		$('.filter-btn span').text('Фильтр');
		$('body').removeClass('active');
		$('.header').removeClass('filter');
	});

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

	$('.filter-btn').click(function(){
		if ( $(this).hasClass('active') ) {
			$(this).removeClass('active');
			$('.filter-btn span').text('Фильтр');
			$('.filters').removeClass('active');
			$('body').removeClass('active');
			$('.header').removeClass('filter');
		} else {
			$(this).addClass('active');
			$('.filter-btn span').text('Скрыть');
			$('.filters').addClass('active');
			$('body').addClass('active');
			$('.header').addClass('filter');
		}
	});

});