const loadel:any = document.getElementById('load')

document.querySelector("body").onload = ()=> {
    loadel.style.opacity = 0;
    setTimeout(()=>{
        loadel.remove()
    }, 500)
};
