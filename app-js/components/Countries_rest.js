import GetCountries from "../helpers/get_coutries.js"
import MenuSkill from "./Menu_skill.js"
const CountriesSkill =async()=>{
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
                <li class="filter-country__region">America</li>
                <li class="filter-country__region">Asia</li>
                <li class="filter-country__region">Europe</li>
                <li class="filter-country__region">Oceania</li>
                <li class="filter-country__region">All</li>
            </ul>
        </article>
    `
    $Countries.appendChild($header)
    $Countries.appendChild($filter)
    $Countries.appendChild(await GetCountries())
    $Countries.appendChild(MenuSkill(linkPage))
    return $Countries
}
export default CountriesSkill