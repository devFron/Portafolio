import MenuSkill from "./Menu_skill.js"
const Countri =(props)=>{
    let {id,img,name,data} = props
    const $country = document.createElement('article')
    const $countryImage = document.createElement('img')
    const $countryName = document.createElement('p')
    const $countryData = document.createElement('div')
    const $countryDataList = document.createElement('ul')

    $country.classList.add('country')
    $countryImage.classList.add('country__image')
    $countryName.classList.add('country__name')
    $countryData.classList.add('country__data')
    $countryDataList.classList.add('country__data__list')

    $country.dataset.id = id
    $countryImage.src = img
    $countryImage.alt = `Flag ${name}`
    $countryName.textContent = name

    let dataInputs = Object.keys(data)
    for (let i = 0; i < dataInputs.length; i++) {
        const $countryDataListItem = document.createElement('li')
        const $countryDataListItemName = document.createElement('p')
        const $countryDataListItemDescription = document.createElement('p')

        $countryDataListItem.classList.add('country__data__list__item')
        $countryDataListItemName.classList.add('country__data__list__item__name')
        $countryDataListItemDescription.classList.add('country__data__list__item__description')

        $countryDataListItemName.textContent = `${dataInputs[i]}:`
        $countryDataListItemDescription.textContent = data[dataInputs[i]]

        $countryDataListItem.appendChild($countryDataListItemName)
        $countryDataListItem.appendChild($countryDataListItemDescription)
        $countryDataList.appendChild($countryDataListItem)

    } 

    $countryData.appendChild($countryName)
    $countryData.appendChild($countryDataList)
    $country.appendChild($countryImage)
    $country.appendChild($countryData)
    return $country
}
const CountriesSkill =()=>{
    const $Countries = document.createElement('section')
    const $header = document.createElement('header')
    const $CountriesCountry =document.createElement('section')
    $Countries.classList.add('countries')
    $header.classList.add('header__country')
    $CountriesCountry.classList.add('countries__country')

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
    fetch('https://restcountries.eu/rest/v2/all')
    .then((res)=>res.ok ? res.json():Promise.reject(res.status))
    .then((json)=>{
        console.log(json)
        json.forEach(el => {
            $CountriesCountry.appendChild(
                Countri({
                    id:el.alpha2Code,
                    img:el.flag,
                    name:el.name,
                    data:{
                        Population:el.population,
                        Region:el.region,
                        Capital:el.capital
                    }
                })
            )
        });
    })
    $Countries.appendChild($header)
    $Countries.appendChild($filter)
    $Countries.appendChild($CountriesCountry)
    $Countries.appendChild(MenuSkill(linkPage))
    return $Countries
}
export default CountriesSkill