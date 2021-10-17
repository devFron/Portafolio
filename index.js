import { DarkModeCountries } from "./app-js/components/Countries_rest.js";
import { DarkModeToggle, DarkModeSave } from "./app-js/helpers/dark-mode.js";
import { ACountry } from "./app-js/helpers/get_coutries.js";
import App from "./App.js";
let countries = {
    See:'all',
    by:null
}
let $countryClickBox = document.createElement('section')
document.addEventListener('DOMContentLoaded',async(e)=>{
    await App(countries)
    DarkModeSave()
})
window.addEventListener('hashchange',async(e)=> {
    await App(countries)
    DarkModeSave()
})
document.addEventListener('click',async(e)=>{
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
    if(e.target.matches('.country-click')){
        $countryClickBox.innerHTML = ''
        $countryClickBox.appendChild(await ACountry(e.target.dataset.id))
        document.querySelector('.countries').appendChild($countryClickBox)
        if(document.querySelector('.a-country').classList.contains('a-country__enabled')){
            document.querySelector('.a-country').classList.remove('a-country__enabled')
        }
        if(document.querySelector('.a-country') !== null && document.querySelector('body').classList.contains('box-countries-dark')){
            document.querySelector('.a-country').classList.toggle('box-countries-dark-countri')
            document.querySelectorAll('.a-country__data__item__borders').forEach((el)=>el.classList.toggle('box-countries-dark'))
            document.querySelector('.a-country__button').classList.toggle('box-countries-dark-countri')
        }
        if(document.querySelector('body').classList.contains('box-countries-dark')){
            localStorage.setItem('devfron-skill-countries','true')
        }else{
            localStorage.setItem('devfron-skill-countries','false')
        }
    }
    if(e.target.matches('.a-country__button')){
        document.querySelector('.a-country').classList.add('a-country__enabled')
    }
    // DarkModeCountries
    if(e.target.matches('.dark-mode__icon-country')||e.target.matches('.dark-mode__box > *')){
        DarkModeCountries()
    }
    if(e.target.matches('.menu-bookmark-icon')){
        e.target.classList.toggle('menu-bookmark-icon__enabled')
        document.querySelector('.header__bookmar__menu').classList.toggle('header__bookmar__menu__active')
    }
    if(e.target.matches('.menu-bookmark-icon-close')){
        document.querySelector('.menu-bookmark-icon').classList.toggle('menu-bookmark-icon__enabled')
        document.querySelector('.header__bookmar__menu').classList.toggle('header__bookmar__menu__active')
    }
    if(e.target.matches('.arrow-question')){
        e.target.parentElement.parentElement.querySelector('.question__item__description').classList.toggle('question__item__description-active')
        e.target.classList.toggle('arro-active-question')
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
document.addEventListener('submit',(e)=>{
    if(e.target.matches('.footer__bookmark__formulario > form')){
        e.preventDefault()
    }
})