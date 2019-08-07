document.addEventListener('DOMContentLoaded',function(){

    var trangThai = 1;
    var menu = document.querySelector('.menu');
  
    window.addEventListener('scroll',function(){
        var giaTri = this.window.pageYOffset;

        if(giaTri > 300){
            if(trangThai == 1){
                this.console.log(123);
                trangThai = 2;
                menu.classList.add('nholai');
            }
        }
        else{
            trangThai =1;
            menu.classList.remove('nholai');
        }
    })
    
},false);