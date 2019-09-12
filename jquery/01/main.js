$(document).ready(function () {
    
    $('body').click(function(event){
        // alert('123');
        $('h2').animate({
            marginLeft: 500,
            opacity:0},
            1000, function(){},
        )
    });

    

});