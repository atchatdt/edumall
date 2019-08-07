document.addEventListener('DOMContentLoaded', function () {

    var click = document.getElementsByClassName('dekich');
    var content = document.getElementsByClassName('hienthi');



    for (let i = 0; i < click.length; i++) {


        click[i].onclick = function () {

            // khi đã có hiển thị
            if (this.classList[1] == 'mautrang') {

                // xóa class mautrang
                this.classList.remove('mautrang');

                // lấy đối tượng hiện tại (lấy id tương ứng: data-hienlen = id)
                var data = this.getAttribute('data-hienlen');

                // lấy phần list tương ứng
                var phanTuHienRa = document.getElementById(data);

                // xóa không cho hiển thị
                phanTuHienRa.classList.remove('hienthira');


            }
            // cho trường hợp bên cạnh
            else {

                for (let j = 0; j < click.length; j++) {
                    click[j].classList.remove('mautrang');
                }

                this.classList.toggle('mautrang');

                var data = this.getAttribute('data-hienlen');

                var phanTuHienRa = document.getElementById(data);

                for (let k = 0; k < content.length; k++) {

                    content[k].classList.remove('hienthira');
                }
                phanTuHienRa.classList.toggle('hienthira');
            }

        }
    }


}, false);