$(document).ready(function () {
    $('.tdkhoi').click(function(event) {
    	$(this).toggleClass('xanh');
    });;


    // Code phần hiệu ứng ảnh
    $('.anh a').fancybox();
    return false;
});