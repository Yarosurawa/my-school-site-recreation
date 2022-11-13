var loadel = document.getElementById('load');
document.querySelector("body").onload = function () {
    loadel.style.opacity = 0;
    document.querySelector("body").style.overflow = "auto";
    document.querySelector("body").style.overflowX = "hidden";
    setTimeout(function () {
        loadel.remove();
    }, 500);
};
