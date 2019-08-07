document.addEventListener('DOMContentLoaded',function(){


    var tg = document.getElementsByClassName('tamgiac');
    var tamGiac = tg[0];
    var ds = document.getElementsByClassName('danhsach');
    var danhSach = ds[0];

    tamGiac.onclick = function(){
        // this.style.color = 'white';
        tamGiac.classList.toggle('tamgiactrang');
        danhSach.classList.toggle('hienthidanhsach');
    }
},false);