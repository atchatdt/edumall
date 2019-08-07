document.addEventListener('DOMContentLoaded',function(){

    var nut = document.querySelector('.nut');
    var menuTrai = document.querySelector('.menutrai');
    var den = document.querySelector('.den');
    var khoiTo = document.querySelector('.noidungto');
    var trang = document.querySelector('.mautrang');
    
    // click nút
    nut.onclick = function(){
        den.classList.add('len');
        // khoiTo.classList.add('dichphai');

        /*3D*/
        trang.classList.add('trangquay');
        menuTrai.classList.remove('vetrai');
    }
    den.onclick = function(){
        den.classList.remove('len');
        /*Cho dịch phải*/
        // khoiTo.classList.remove('dichphai');
       /*3D*/
        trang.classList.remove('trangquay');
        menuTrai.classList.add('vetrai');
    }
},false);