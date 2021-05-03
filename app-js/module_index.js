import { assistant, assistantSlider } from "./asistente-index.js";
import { Menu } from "./main-menu.js";
import { DarkMode } from "./main-dark-mode.js";

document.addEventListener('DOMContentLoaded',(e)=>{
    assistant()
    assistantSlider()
    Menu()
    DarkMode()
    setTimeout(() => {
        let $loader = document.querySelector('.loader')        
        $loader.classList.add('loader__disable')
    }, 3000);
})