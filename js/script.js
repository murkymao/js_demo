var btn_prev = document.querySelector('#gallery .buttons .prev' );
var btn_next = document.querySelector('#gallery .buttons .next' );
var images = document.querySelectorAll('#gallery .photos img' );
var i = 0;

btn_prev.onclick = function () {
    alert(1);
};

btn_next.onclick = function () {
    images[i].style.display = 'none';
    i++;
    images[i].style.display = 'block';
};