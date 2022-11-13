const hbg:Object = document.querySelectorAll(".header-bg-img");
const delay:number = 5000;

function callback():void {
    for(let i = 0; i < 4; i++ ) {
        setTimeout(()=>{
            try{hbg[i + 1].classList.remove('right')}
            finally{hbg[i].classList.add('left')}
        }, 5000*i+delay)
        setTimeout(()=>{
            hbg[i].style.zIndex = -11;
            hbg[i].classList.remove('left')
            hbg[i].classList.add('right')
        }, 5000*i+5000+delay)
        setTimeout(()=>{
            hbg[i].style.zIndex = -10;
        }, 5000*i+10000+delay)
    }
    setTimeout(()=>{
        hbg[0].classList.remove('right')
        hbg[0].classList.remove('left')
        hbg[3].classList.add('left')
        hbg[3].classList.remove('right')
        callback();
    }, 20000)
}

callback()