$(document).ready(function() {

	$('.menu-tren ul li:nth-child(1) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		// $('body').animate({scrollTop: 1500}, 500); => không chạy
		 $('html, body').animate({scrollTop: $('.chapter1').offset().top },1500,"easeOutCubic"); // =>chạy khi có thêm html
	});;

	$('.menu-tren ul li:nth-child(2) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		// $('body').animate({scrollTop: 1500}, 500); => không chạy
		 $('html, body').animate({scrollTop: $('.chapter2').offset().top },2000,"easeOutCubic"); // =>chạy khi có thêm html
	});;

	$('.menu-tren ul li:nth-child(3) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		// $('body').animate({scrollTop: 1500}, 500); => không chạy
		 $('html, body').animate({scrollTop: $('.chapter3').offset().top },2500,"easeOutCubic"); // =>chạy khi có thêm html
	});;

	$('.menu-tren ul li:nth-child(4) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		// $('body').animate({scrollTop: 1500}, 500); => không chạy
		 $('html, body').animate({scrollTop: $('.chapter4').offset().top },3000,"easeOutCubic"); // =>chạy khi có thêm html
	});;
	$('.menu-tren ul li:nth-child(5) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		// $('body').animate({scrollTop: 1500}, 500); => không chạy
		 $('html, body').animate({scrollTop: $('.chapter5').offset().top },3500,"easeOutCubic"); // =>chạy khi có thêm html
	});;

	$('.menu-tren ul li:nth-child(6) a').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		// $('body').animate({scrollTop: 1500}, 500); => không chạy
		 $('html, body').animate({scrollTop: $('.chapter6').offset().top },4000,"easeOutCubic"); // =>chạy khi có thêm html
	});;
	
	// Back to top
	$('.lentren').on('click', function(event) {
		event.preventDefault();
		/* Act on the event */
		// $('body').animate({scrollTop: 1500}, 500); => không chạy
		 $('html, body').animate({scrollTop: 0 },5000,"easeOutCubic"); // =>chạy khi có thêm html
	});;
});