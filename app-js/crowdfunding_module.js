import { Menu } from "./crowdfunding_menu.js";
import { menuDefaul } from "./crowdfunding_menu-dafault.js";
import { Thanks } from "./thanks-suport.js";
import { cardDisable } from "./card-disable.js";
document.addEventListener('DOMContentLoaded',(e)=>{
    Menu()
    menuDefaul()
    Thanks()
    cardDisable()
})