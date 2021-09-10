import { DarkModeToggle, DarkModeSave } from "./app-js/helpers/dark-mode.js";
import App from "./App.js";
let countries = {
    See:'all',
    by:null
}
document.addEventListener('DOMContentLoaded',async(e)=>{
    await App(countries)
    DarkModeSave()
})
window.addEventListener('hashchange',async(e)=> {
    await App(countries)
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
        if(e.target.matches('.dark-mode__circle')){
            e.target.classList.toggle('dark-mode__circle__active')
        }
    }
    if(e.target.matches('.filter-country__region-name__icon')){
        document.querySelector('.filter-country__region__box').classList.toggle('filter-country__region__active')
        e.target.classList.toggle('arrow-down-animation')
    }
    if(e.target.matches('.filter-country__region')){
        App({
            See:'region',
            by:e.target.textContent.toLowerCase()
        })
    }
    if(e.target.matches('.search-country__icon')){
        if(document.querySelector('.search-country__input').value===''){
            alert('Please write something')
        }else{
            App({
                See:'name',
                by:document.querySelector('.search-country__input').value.toLowerCase()
            })
        }   
    }
})
document.addEventListener('keydown',(e)=>{
    if(e.target.matches('.search-country__input')&&e.key ==='Enter'){
        App({
            See:'name',
            by:e.target.value.toLowerCase()
        })
    }
})