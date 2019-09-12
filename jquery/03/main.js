$(document).ready(function () {
    

    // Chú phần slideUp, slideDown
    // this
    // Toggle
    //Thu tất cả nội dung lại
    $('.ndmotkhoi').slideUp();

    // Click h3
    $('.motkhoi h3').click(function(event) {
    	/* Act on the event */
    	// $('.ndmotkhoi').slideUp();
    	$(this).next('.ndmotkhoi').slideToggle();
    	$(this).toggleClass('xanh');
    });;
});