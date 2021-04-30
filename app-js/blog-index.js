// import { ImportPost } from "./import-post.js";
import { Menu } from "./main-menu.js";
document.addEventListener('DOMContentLoaded',(e)=>{
    // ImportPost()
    Menu()

    document.addEventListener('click',(e)=>{
        if(e.target.matches('.post__image')){
            window.open(`${e.target.dataset.link}`)
        }
    })
})