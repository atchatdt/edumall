// var phanTu = document.createElement('h1');
// phanTu.innerHTML='content h1';

// var khoiTo = document.getElementById('caccm');
// khoiTo.appendChild(phanTu);

var mangDuLieu =[

    {
        id:1,
        anh:"https://kenh14cdn.com/2019/7/15/6579452625197408015913021928767187046782945n-1563160170214818311691.jpg",
        ten: "gai",
        noidungcm: "đẹp thế"
    },
    {
        id:2,
        anh:"https://kenh14cdn.com/2019/7/15/jisoo3-1563164809693629937263.jpg",
        ten: "ho thi dao",
        noidungcm: "xinh the"
    }
];
//console.log(mangDuLieu);





for(let i=0; i< mangDuLieu.length; i++){
   // console.log(mangDuLieu[i].ten);
   var noiDungKhoi = `<div class="kcm" id="kcm-${mangDuLieu[i].id}">
                            <img src="${mangDuLieu[i].anh}" 
                            alt="" class="float-xs-left pr-1">
                            <div>
                            <b>${mangDuLieu[i].ten}</b>
                            <span>${mangDuLieu[i].noidungcm} </span>
                            </div>
                    </div>`;
    var phanTuMoi = document.createElement('div');

     phanTuMoi.innerHTML = noiDungKhoi;

    var bo = document.getElementById('caccm');
    bo.appendChild(phanTuMoi);

}