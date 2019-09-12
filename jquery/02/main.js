$(document).ready(function () {
   // $('h2').animate({
   // 	opacity: 1,
   // 	marginTop: 100
   // 	});;
   
   	$('h1').animate({
   		opacity: 0,
   		marginTop: 100
   	});;
  

   $('h1').click(function(event) {
   	$('h3').animate({
   		opacity: 0,
   		/* stuff to do after animation is complete */
   	});;
   	return false; // khi click vào link thì bỏ tác vụ chuyển trang
   });;
   
});