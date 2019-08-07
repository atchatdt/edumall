document.addEventListener('DOMContentLoaded',function(){

    var nut = document.getElementById('n1');
    var nutChuyenDong = document.getElementById('chuyendong');
    var trangThai = 1;
    nut.onclick = function(){
      //  nutChuyenDong.classList.add('chuyendong');
      if(trangThai == 1){
          trangThai = 2;
          nutChuyenDong.classList.remove('ko-dong');
          nutChuyenDong.classList.add('chuyendong1');
      }
      else{
          trangThai = 1;
          nutChuyenDong.classList.remove('chuyendong1');
      }
    }
    
},false);