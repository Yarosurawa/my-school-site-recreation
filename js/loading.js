var loadel = document.getElementById('load');
document.querySelector("body").onload = function () {
    loadel.style.opacity = 0;
    setTimeout(function () {
        loadel.remove();
    }, 500);
};
