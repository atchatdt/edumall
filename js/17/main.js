document.addEventListener('DOMContentLoaded',function(){

   var menuDo = document.querySelector('.menu');
   var trangthai = 1; // dưới 100

   var chungToi = document.querySelector('.chungtoi');

   var viTriChungToi = chungToi.offsetTop;
   var trangThaiKhoiVang = 1; // ban đầu -> ẩn


   window.addEventListener('scroll',function(){

    var giaTri = this.window.pageYOffset;
    if(giaTri > 100){
        if(trangthai == 1){

            trangthai = 2 ;
            menuDo.classList.add('menuden');
        }
       
    } 
    else{
        if(trangthai == 2){

            menuDo.classList.remove('menuden');
            trangthai = 1;
        }
     
    }

    if(giaTri > viTriChungToi){
        if(trangThaiKhoiVang == 1){
            trangThaiKhoiVang = 2;
            chungToi.classList.add('vangdunglai');
        }
    }
    else{
        if(trangThaiKhoiVang == 2){
            trangThaiKhoiVang = 1;
            chungToi.classList.remove('vangdunglai');

        }
       
    }


   });
    
},false);