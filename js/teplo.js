$(document).ready(function(){
	var t1 = [];
	var t2 = [];
	var p1 = [];
	var p2 = [];
	var p3 = [];
	var p4 = [];

	$('.b-1-slider').slick({
		autoplay: true,
		arrows: false
	});

	$('.date-input').datepicker({
		closeText: 'Закрыть',
		firstDay: 1,
		currentText: 'Сегодня',
		monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
		monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн','Июл','Авг','Сен','Окт','Ноя','Дек'],
		dayNames: ['Воскресенье','Понедельник','Вторник','Среда','Четверг','Пятница','Суббота'],
		dayNamesShort: ['Вск','Пнд','Втр','Срд','Чтв','Птн','Сбт'],
		dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
		maxDate: new Date(),
		dateFormat: 'dd.mm.yy'
	});

	$('body').on('click','.b-1-btn',function(){
		var el = $(this).attr('href');
		var des = $(el).offset().top - 50;

		$('body,html').animate({scrollTop: des},800);
		return false;
	});

	$('body').on('click','.step-type-btn', function(){
		var btn = this;
		var el = $(this).attr('href');
		var detail = $(this).attr('data-detail');

		if (detail == 'type-1'){
			$(this).parents('.b').find(el).find('.answer-btn-plain').attr('href','.step-3-1');
			$(this).parents('.b').find(el).find('.answer-btn-detailed').attr('href','.step-4-1');
		} else {
			$(this).parents('.b').find(el).find('.answer-btn-plain').attr('href','.step-3-2');
			$(this).parents('.b').find(el).find('.answer-btn-detailed').attr('href','.step-4-2');
		}

		$(this).parents('.b').find('.step').animate({opacity: 0},300);
		setTimeout(function(){
			$(btn).parents('.b').find('.step').removeClass('active');
			$(btn).parents('.b').find(el).addClass('active');
			$(btn).parents('.b').find('.step').animate({opacity: 1},300);
		},300);
		return false;
	});

	$('body').on('click','.next-btn',function(){
		var btn = this;
		var el = $(this).attr('href');

		$(this).parents('.b').find('.step').animate({opacity: 0},300);
		setTimeout(function(){
			$(btn).parents('.b').find('.step').removeClass('active');
			$(btn).parents('.b').find(el).addClass('active');
			$(btn).parents('.b').find('.step').animate({opacity: 1},300);
		},300);
		return false;
	});

	$('body').on('click','.scheme-btn',function(){
		var btn = this;
		var el = $(this).attr('href');
		var el_href = $(this).attr('data-result');
		var valid = true;

		$(this).parents('.scheme').find('.inputs input').each(function(){
			if ( !$(this).val().length ){
				valid = false;
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});

		$(this).parents('.b').find(el).find('.step-5-btn').attr('href',el_href);

		if (valid){
			$(this).parents('.b').find('.step').animate({opacity: 0},300);
			setTimeout(function(){
				$(btn).parents('.b').find('.step').removeClass('active');
				$(btn).parents('.b').find(el).addClass('active');
				$(btn).parents('.b').find('.step').animate({opacity: 1},300);
			},300);
		}

		return false;
	});

	$('body').on('click','.step-4-btn',function(){
		var btn = this;
		var el = $(this).attr('href');
		var el_href = $(this).attr('data-result');
		var i = 0;

		$(this).parents('.b').find(el).find('.step-5-btn').attr('href',el_href);

		$(this).parents('.table-wrap').find('table').find('tr').each(function(){
			var j = 0;
			if (i > 0){
				$(this).find('td').each(function(){
					if (j > 0){
						if ( $(this).find('input').val().length ){
							var znach = Number($(this).find('input').val());
							switch (i){
								case 1:
									p1.push([j,znach]);
									break;
								case 2:
									p3.push([j,znach]);
									break;
								case 3:
									t1.push([j,znach]);
									break;
								case 4:
									p4.push([j,znach]);
									break;
								case 5:
									t2.push([j,znach]);
									break;
								case 6:
									p2.push([j,znach]);
									break;
							}
						}
					}
					j++;
				});
			}
			i++;
		});

		$(this).parents('.b').find('.step').animate({opacity: 0},300);
		setTimeout(function(){
			$(btn).parents('.b').find('.step').removeClass('active');
			$(btn).parents('.b').find(el).addClass('active');
			$(btn).parents('.b').find('.step').animate({opacity: 1},300);
		},300);

		Highcharts.chart('graph-p1',{
			series: [{
				name: 'graph',
				data: p1
			}]
		});
		Highcharts.chart('graph-p2',{
			series: [{
				name: 'graph',
				data: p2
			}]
		});
		Highcharts.chart('graph-p3',{
			series: [{
				name: 'graph',
				data: p3
			}]
		});
		Highcharts.chart('graph-p4',{
			series: [{
				name: 'graph',
				data: p4
			}]
		});
		Highcharts.chart('graph-t2',{
			series: [{
				name: 'graph',
				data: t2
			}]
		});
		if ($(window).width()<768){
			$('body,html').animmate({scrollTop: $('.b-2').offset().top - 50},800)
		}
		return false;
	});

	$('body').on('click','.input-radio',function(){
		$(this).toggleClass('active');
		$(this).parents('.date-wrap').find('input').toggleClass('required');
		$(this).parents('.date-wrap').find('input').removeClass('error');
	});

	$('body').on('click','.step-5-btn',function(){
		var btn = this;
		var el = $(this).attr('href');
		var valid = true;

		$(this).parents('.date-wrap').find('input.required').each(function(){
			if ( !$(this).val().length ){
				valid = false;
				$(this).addClass('error');
			} else {
				$(this).removeClass('error');
			}
		});

		if (valid){
			$(this).parents('.b').find('.step').animate({opacity: 0},300);
			setTimeout(function(){
				$(btn).parents('.b').find('.step').removeClass('active');
				$(btn).parents('.b').find(el).addClass('active');
				$(btn).parents('.b').find('.step').animate({opacity: 1},300);
				var json = JSON.parse($.ajax({'url':'teplo.json', 'async':false}).responseText);
				resultFunc(json);
				resultFunc2(json);
			},300);
		}
		return false;
	});

	function resultFunc(data){
		if ( (Number(data.T1) >= 0) && (Number(data.T1) <= 2) ){
			$('.step-6 .result-list').append('<li class="true"><div class="li-info"></div>Средний уровень T1 - '+data.T1+' С° соответствует <span>(оптимальный от 0 до 2 С°)</span></li>');
		} else {
			$('.step-6 .result-list').append('<li class="false"><div class="li-info"></div>Средний уровень T1 - '+data.T1+' С° не соответствует <span>(оптимальный от 0 до 2 С°)</span></li>');
		}

		if ( Number(data.T2) >= 65 ){
			$('.step-6 .result-list').append('<li class="true"><div class="li-info"></div>Средний уровень T2 - '+data.T2+' С° соответствует <span>(оптимальный от 65 С°)</span></li>');
		} else {
			$('.step-6 .result-list').append('<li class="false"><div class="li-info"></div>Средний уровень T2 - '+data.T2+' С° не соответствует <span>(оптимальный от 65 С°)</span></li>');
		}

		if ( Number(data.P1) < 2 ){
			$('.step-6 .result-list').append('<li class="true"><div class="li-info"></div>Средний уровень P1 - '+data.P1+' кгс/см2 соответствует <span>(оптимальный до 2 кгс / см2)</span></li>');
		} else {
			$('.step-6 .result-list').append('<li class="false"><div class="li-info"></div>Средний уровень P1 - '+data.P1+' кгс/см2 не соответствует <span>(оптимальный до 2 кгс / см2)</span></li>');
		}

		if ( Number(data.P2) < 2 ){
			$('.step-6 .result-list').append('<li class="true"><div class="li-info"></div>Средний уровень P2 - '+data.P2+' кгс/см2 соответствует <span>(оптимальный до 2 кгс / см2)</span></li>');
		} else {
			$('.step-6 .result-list').append('<li class="false"><div class="li-info"></div>Средний уровень P2 - '+data.P2+' кгс/см2 не соответствует <span>(оптимальный до 2 кгс / см2)</span></li>');
		}
	}

	function resultFunc2(data){
		var i = 0;
		$('.step-6-2').find('.result-more').find('.item').each(function(){
			i++;
			switch(i){
				case 1:
					if (Number(data.T2) >= 65){
						$(this).append('<div class="item-info true"><div class="item-info-icon"></div><p>Средний уровень T2 - <span>'+data.T2+' С°<br> соответствует</span> <mark>(оптимальный от 65 С°)</mark></p></div>');
					} else {
						$(this).append('<div class="item-info false"><div class="item-info-icon"></div><p>Средний уровень T2 - <span>'+data.T2+' С°<br>не соответствует</span> <mark>(оптимальный от 65 С°)</mark></p></div>');
					}
					break;
				case 2:
					if ( ((Number(data.P1) - Number(data.P2)) >= 0) && ((Number(data.P1) - Number(data.P2)) <= 2) ){
						$(this).append('<div class="item-info true"><div class="item-info-icon"></div><p>P (P1-P2) = <span>'+(Number(data.P1) - Number(data.P2))+' кгс/см2<br> соответствует</span> <mark>(оптимальный от 0 до 2 С°)</mark></p></div>');
					} else {
						$(this).append('<div class="item-info false"><div class="item-info-icon"></div><p>P (P1-P2) = <span>'+(Number(data.P1) - Number(data.P2))+' кгс/см2<br>не соответствует</span> <mark>(оптимальный от 0 до 2 С°)</mark></p></div>');
					}
					break;
				case 3:
					if ( ((Number(data.P3) - Number(data.P4)) >= 0) && ((Number(data.P3) - Number(data.P4)) <= 2) ){
						$(this).append('<div class="item-info true"><div class="item-info-icon"></div><p>P (P3-P4) = <span>'+(Number(data.P3) - Number(data.P4))+' кгс/см2<br> соответствует</span> <mark>(оптимальный от 0 до 2 С°)</mark></p></div>');
					} else {
						$(this).append('<div class="item-info false"><div class="item-info-icon"></div><p>P (P3-P4) = <span>'+(Number(data.P3) - Number(data.P4))+' кгс/см2<br>не соответствует</span> <mark>(оптимальный от 0 до 2 С°)</mark></p></div>');
					}
					break;
			}
		});
	}

});