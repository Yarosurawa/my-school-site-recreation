const loadel:any = document.getElementById('load')

document.querySelector("body").onload = ()=> {
    loadel.style.opacity = 0;
    document.querySelector("body").style.overflow = "auto"
    document.querySelector("body").style.overflowX = "hidden"
    setTimeout(()=>{
        loadel.remove()
    }, 500)
};
