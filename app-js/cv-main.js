import { Menu } from "./index_menu.js";
import { DarkModeCV } from "./cv_dark-mode.js";
document.addEventListener('DOMContentLoaded',(e)=>{ 
    Menu()
    DarkModeCV()
    document.addEventListener('click',(e)=>{
        if(e.target.matches('.my__button') || e.target.matches('.my__button-two')){
            window.open('../resources/PDF/CV.pdf')
        }
    })

    document.addEventListener('keydown',(e)=>{
        e.preventDefault()
        if(e.key === 'p' && e.ctrlKey){
            window.open('../resources/PDF/CV.pdf')
        }
    })
})