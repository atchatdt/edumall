document.addEventListener('DOMContentLoaded',function(){

    var nut = document.getElementsByClassName('tongquat');

    for(var i=0; i< nut.length; i++){
        nut[i].onclick = function(){
        console.log(this.getAttribute('data-matkhau'));

        }
    }

    // nut[0].onclick = ()=>{
    //     var content = nut[0].getAttribute('data-matkhau');
    //     console.log(content);
    // }

  
},false);