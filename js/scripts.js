$("#slider").slick({
	dots: true,
  	speed: 500,
  	arrows: true,
  	// autoplay: true,
  	infinite: true,
  	appendDots: $('.abs2')
});
$('article .row aside menu li').on('click', function() {
	var ul = $(this).find('ul');
	var i = $(this).find('span');
	ul.slideToggle(200);
});
// var ww = $(window).width();
// alert(ww);
// if (ww<=768) {
// 	$('#cart').appendTo('#cart-xs');
// }
// else{
// 	$('#cart').appendTo('nav navbar-nav navbar-right');
// }