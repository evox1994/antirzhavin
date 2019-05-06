$(document).ready(function(){
	var page_href = location.href;
	$('.news-share-block input').val(page_href);

	$('.news-share-block').click(function(){
		var span = $(this).find('span');
		$(this).find('input').select();
		document.execCommand('copy');
		$(this).find('span').text('Готово');
		setTimeout(function(){
			span.text('Скопировать');
		},3000);
	});
});