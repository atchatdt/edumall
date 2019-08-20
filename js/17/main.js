document.addEventListener('DOMContentLoaded',function(){

   var menuDo = document.querySelector('.menu');
   var trangthai = 1; // dưới 100

   var chungToi = document.querySelector('.chungtoi');

   var viTriChungToi = chungToi.offsetTop;
   var trangThaiKhoiVang = 1; // ban đầu -> ẩn

   // khoảng thời gian khối chúng tôi hiển thị
   var khoangCachHieThi = 500;
   var diemCuoiHieThi = viTriChungToi + khoangCachHieThi;

   window.addEventListener('scroll',function(){

    var giaTri = this.window.pageYOffset;
    // menu
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
    // hết menu

    // vị trí khối chúng tôi
    if(giaTri > viTriChungToi && giaTri < diemCuoiHieThi){
        if(trangThaiKhoiVang == 1){
            trangThaiKhoiVang = 2;
            chungToi.classList.add('vangdunglai');
        }
    }
    else  if(giaTri < viTriChungToi || giaTri > diemCuoiHieThi){
        if(trangThaiKhoiVang == 2){
            trangThaiKhoiVang = 1;
            chungToi.classList.remove('vangdunglai');

        }
       
    }

    // hết vị trí chúng tôi



       // hiệu ứng load bằng js
   var phanTuLoad =document.querySelector('.s3');
   var trangThaiS3 = 0; // duoi
   var viTriS3 = phanTuLoad.offsetTop -200;

   if(giaTri > viTriS3){
       if(trangThaiS3 == 0){
           trangThaiS3 = 1; // đang hiển thị
           phanTuLoad.classList.add('dilen');
       }
   }
   });




    
},false);