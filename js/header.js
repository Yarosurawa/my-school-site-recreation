var hbg = document.querySelectorAll(".header-bg-img");
var delay = 5000;
hbg[1].classList.add('right');
hbg[2].classList.add('right');
hbg[3].classList.add('right');
function callback() {
    var _loop_1 = function (i) {
        setTimeout(function () {
            try {
                hbg[i + 1].classList.remove('right');
            }
            finally {
                hbg[i].classList.add('left');
            }
        }, 5000 * i + delay);
        setTimeout(function () {
            hbg[i].style.zIndex = -11;
            hbg[i].classList.remove('left');
            hbg[i].classList.add('right');
        }, 5000 * i + 5000 + delay);
        setTimeout(function () {
            hbg[i].style.zIndex = -10;
        }, 5000 * i + 10000 + delay);
    };
    for (var i = 0; i < 4; i++) {
        _loop_1(i);
    }
    setTimeout(function () {
        hbg[0].classList.remove('right');
        hbg[0].classList.remove('left');
        hbg[3].classList.add('left');
        hbg[3].classList.remove('right');
        callback();
    }, 20000);
}
callback();
