import { assistant, assistantSlider } from "./index_asistente.js";
import { Menu } from "./index_menu.js";
import { DarkMode } from "./index_dark-mode.js";

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