document.addEventListener('DOMContentLoaded',function(){

    var trangTrai = 1;
    // Xét người dùng có cuộn chuột
    window.addEventListener('scroll',function(){
        //this.console.log('cuộn chuột');
        // vị trí đang ở của người dùng
        var giaTri = this.window.pageYOffset;
        if(giaTri >300){
            if(trangTrai == 1){

                this.console.log('đang ở chỗ hơn 300px');
                trangTrai = 2;
            }
           
        }
    })
    
},false);