import { DarkModeToggle, DarkModeSave } from "./app-js/helpers/dark-mode.js";
import App from "./App.js";

document.addEventListener('DOMContentLoaded',async(e)=>{
    await App()
    DarkModeSave()
})
window.addEventListener('hashchange',async(e)=> {
    await App()
    DarkModeSave()
})
document.addEventListener('click',(e)=>{
    if(e.target.matches('.dark-mode__circle')||e.target.matches('.dark-mode__icon')){
        DarkModeToggle()
        if(document.querySelector('body').classList.contains('body-dark')){
            localStorage.setItem('devfron-dark-mode','true')
        }else{
            localStorage.setItem('devfron-dark-mode','false')
        }
    }
})