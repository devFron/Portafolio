import GetCountries from "../helpers/get_coutries.js"
import MenuSkill from "./Menu_skill.js"
const CountriesSkill =async({See,by})=>{
    const $Countries = document.createElement('section')
    const $header = document.createElement('header')
    $Countries.classList.add('countries')
    $header.classList.add('header__country')
    
    let linkPage = 'https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca'

    $header.innerHTML = `
        <h1 class="country__title">Where in the world?</h1>
        <section class="dark-mode__box">
            <i class="fas fa-moon dark-mode__icon-country"></i>
            <span class="dark-mode__text">Dark Mode</span>
        </section>
    `
    const $filter = document.createElement('section')
    $filter.classList.add('country__search')
    $filter.innerHTML = `
        <article class="country__search__a">
            <i class="search-country__icon fas fa-search"></i>
            <input type="text" name="search-country" class="search-country__input" id="search-country-input" placeholder="Search for a country">
        </article>
        <article class="filter-country">
            <div class="filter-country__box">
                <p class="filter-country__region-name">Filter By Region</p>
                <i class="filter-country__region-name__icon fas fa-angle-down"></i>
            </div>
            <ul class="filter-country__region__box">
                <li class="filter-country__region">Africa</li>
                <li class="filter-country__region">Americas</li>
                <li class="filter-country__region">Asia</li>
                <li class="filter-country__region">Europe</li>
                <li class="filter-country__region">Oceania</li>
                <li class="filter-country__region">All</li>
            </ul>
        </article>
    `
    $Countries.appendChild($header)
    $Countries.appendChild($filter)
    $Countries.appendChild(await GetCountries({See,by}))
    $Countries.appendChild(MenuSkill(linkPage))
    return $Countries
}
export default CountriesSkill

export const DarkModeCountries =()=>{
    document.querySelector('body').classList.toggle('box-countries-dark')
    if(document.querySelector('body').classList.contains('box-countries-dark')){
        document.querySelector('.countries').style.background='hsl(207, 26%, 17%)'
    }else{
        document.querySelector('.countries').style.background='rgb(250, 250, 250)'
    }
    document.querySelector('.header__country').classList.toggle('box-countries-dark-countri')
    document.querySelector('.country__search__a').classList.toggle('box-countries-dark-countri')
    document.querySelector('.filter-country__box').classList.toggle('box-countries-dark-countri')
    document.querySelectorAll('.country').forEach((el)=>{el.classList.toggle('box-countries-dark-countri')})
    document.querySelector('.filter-country__region__box').classList.toggle('box-countries-dark-countri')
    document.querySelector('.search-country__input').classList.toggle('box-countries-dark-countri__background')
    document.querySelectorAll('.filter-country__region').forEach((el)=>el.classList.toggle('text-countries-dark'))
    if(document.querySelector('.a-country') !== null){
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
export const DarkModeCountriesStorage = ()=>{
    if(localStorage.getItem('devfron-skill-countries')==='true'){
        document.querySelector('body').classList.add('box-countries-dark')
        document.querySelector('.countries').style.background='hsl(207, 26%, 17%)'
        document.querySelector('.header__country').classList.add('box-countries-dark-countri')
        document.querySelector('.country__search__a').classList.add('box-countries-dark-countri')
        document.querySelector('.filter-country__box').classList.add('box-countries-dark-countri')
        document.querySelectorAll('.country').forEach((el)=>{el.classList.add('box-countries-dark-countri')})
        document.querySelector('.filter-country__region__box').classList.add('box-countries-dark-countri')
        document.querySelector('.search-country__input').classList.add('box-countries-dark-countri__background')
        document.querySelectorAll('.filter-country__region').forEach((el)=>el.classList.add('text-countries-dark'))
        if(document.querySelector('.a-country') !== null){
            document.querySelector('.a-country').classList.add('box-countries-dark-countri')
            document.querySelectorAll('.a-country__data__item__borders').forEach((el)=>el.classList.add('box-countries-dark'))
            document.querySelector('.a-country__button').classList.add('box-countries-dark-countri')
        }
    }else{
        document.querySelector('body').classList.remove('box-countries-dark')
        document.querySelector('.countries').style.background='rgb(250, 250, 250)'
        document.querySelector('.header__country').classList.remove('box-countries-dark-countri')
        document.querySelector('.country__search__a').classList.remove('box-countries-dark-countri')
        document.querySelector('.filter-country__box').classList.remove('box-countries-dark-countri')
        document.querySelectorAll('.country').forEach((el)=>{el.classList.remove('box-countries-dark-countri')})
        document.querySelector('.filter-country__region__box').classList.remove('box-countries-dark-countri')
        document.querySelector('.search-country__input').classList.remove('box-countries-dark-countri__background')
        document.querySelectorAll('.filter-country__region').forEach((el)=>el.classList.remove('text-countries-dark'))
        if(document.querySelector('.a-country') !== null){
            document.querySelector('.a-country').classList.remove('box-countries-dark-countri')
            document.querySelectorAll('.a-country__data__item').forEach((el)=>el.classList.remove('box-countries-dark'))
            document.querySelector('.a-country__button').classList.remove('box-countries-dark-countri')
        }
    }
}