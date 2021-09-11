const Countri =(props)=>{
    let {id,img,name,data} = props
    const $country = document.createElement('article')
    const $countryImage = document.createElement('img')
    const $countryName = document.createElement('p')
    const $countryData = document.createElement('div')
    const $countryDataList = document.createElement('ul')
    const $countryClick = document.createElement('section')
    $countryClick.classList.add('country-click')
    $country.classList.add('country')
    $countryImage.classList.add('country__image')
    $countryName.classList.add('country__name')
    $countryData.classList.add('country__data')
    $countryDataList.classList.add('country__data__list')

    $countryClick.dataset.id = name
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
    $country.appendChild($countryClick)
    return $country
}
const GetCountries = async(countries)=>{
    const $CountriesCountry =document.createElement('section')
    $CountriesCountry.classList.add('countries__country')
    let {See,by} = countries

    let searchBy = ''

    if(See === 'all' || by === 'all'){
        searchBy = 'https://restcountries.eu/rest/v2/all'
    }else if(See ==='name'){
        searchBy = `https://restcountries.eu/rest/v2/name/${by}`
    }else if(See === 'region'){
        searchBy = `https://restcountries.eu/rest/v2/region/${by}`
    }

    try {
        let res = await fetch(searchBy)
        if(!res.ok)throw res.status
        let json = await res.json()
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

        return $CountriesCountry

    } catch (err) {
        console.log(err)
    }

}
export default GetCountries

export const ACountry = async(name)=>{
    const $ACountry = document.createElement('section')
    const $ACountryButton = document.createElement('button')
    const $ACountryImage = document.createElement('img')
    const $ACountryName = document.createElement('p')
    const $ACountryData = document.createElement('article')
    const $ACountryDataOne = document.createElement('ul')
    const $ACountryDataTwo = document.createElement('ul')
    const $ACountryBorderBox = document.createElement('article')
    const $ACountryBorderTitle = document.createElement('p')
    const $ACountryBorders = document.createElement('ul')

    $ACountry.classList.add('a-country')
    $ACountryButton.classList.add('a-country__button')
    $ACountryImage.classList.add('a-country__image')
    $ACountryName.classList.add('a-country__name')
    $ACountryData.classList.add('a-country__data__box')
    $ACountryDataOne.classList.add('a-country__data')
    $ACountryDataTwo.classList.add('a-country__data')
    $ACountryBorderBox.classList.add('a-country__border__box')
    $ACountryBorderTitle.classList.add('a-country__border__title')
    $ACountryBorders.classList.add('a-country__border__borders')
    
    $ACountryButton.innerHTML = `<i class="fas fa-arrow-left"></i> Back`
    try {
        let res = await fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        if(!res.ok) throw res.status
        let json = await res.json()
        json.forEach((el)=>{
            $ACountryName.textContent = el.name
            $ACountryImage.src = el.flag
            $ACountryImage.alt = `Flag from ${el.name}`
            const dataOne = {
                Native_Name:el.nativeName ? el.nativeName : ' ',
                Population:el.population ? el.population : ' ',
                Region:el.region ? el.region : ' ',
                Sub_Region:el.subregion ? el.subregion : ' ' 
            }
            let DataOneEnd = Object.keys(dataOne)
            for (let i = 0; i < DataOneEnd.length; i++) {
                const $ACountryDataOneItem = document.createElement('li')
                const $ACountryDataOneItemTitle = document.createElement('span')
                const $ACountryDataOneItemDescription = document.createElement('span')
                $ACountryDataOneItem.classList.add('a-country__data__item')
                $ACountryDataOneItemTitle.textContent = `${DataOneEnd[i]}:`
                $ACountryDataOneItemDescription.textContent = dataOne[DataOneEnd[i]]
                $ACountryDataOneItem.appendChild($ACountryDataOneItemTitle)
                $ACountryDataOneItem.appendChild($ACountryDataOneItemDescription)
                $ACountryDataOne.appendChild($ACountryDataOneItem) 
            }

            const currenciesAll = []
            el.currencies.forEach((el)=>{currenciesAll.push(el.name)}) 

            const lenguagesAll = []
            el.languages.forEach((el)=>{lenguagesAll.push(el.name)}) 

            const dataTwo = {
                Top_Level_Domain:el.topLevelDomain.join(),
                currencies:currenciesAll.join(),
                Languages:lenguagesAll.join()
            }
            let DataTwoEnd = Object.keys(dataTwo)
            for (let i = 0; i < DataTwoEnd.length; i++) {
                const $ACountryDataTwoItem = document.createElement('li')
                const $ACountryDataTwoItemTitle = document.createElement('span')
                const $ACountryDataTwoItemDescription = document.createElement('span')
                $ACountryDataTwoItem.classList.add('a-country__data__item')
                $ACountryDataTwoItemTitle.textContent = `${DataTwoEnd[i]}:`
                $ACountryDataTwoItemDescription.textContent = dataTwo[DataTwoEnd[i]]
                $ACountryDataTwoItem.appendChild($ACountryDataTwoItemTitle)
                $ACountryDataTwoItem.appendChild($ACountryDataTwoItemDescription)
                $ACountryDataTwo.appendChild($ACountryDataTwoItem) 
            }
            
            if(el.borders.length > 0){
                el.borders.forEach((el)=>{
                    const $borderItem = document.createElement('li')
                    $borderItem.classList.add('a-country__data__item')
                    $borderItem.textContent = el
                    $ACountryBorders.appendChild($borderItem)
                    $ACountryDataTwo.appendChild($ACountryBorders)
                })
            }else{
                $ACountryBorders.innerHTML = ``
            }
        })
    } catch (err) {
        alert(`Error ${err}`)
    }

    $ACountry.appendChild($ACountryButton)
    $ACountry.appendChild($ACountryImage)
    $ACountry.appendChild($ACountryName)
    $ACountryData.appendChild($ACountryDataOne)
    $ACountryData.appendChild($ACountryDataTwo)
    $ACountry.appendChild($ACountryData)
    $ACountryBorderBox.appendChild($ACountryBorderTitle)
    $ACountryBorderBox.appendChild($ACountryBorders)
    $ACountry.appendChild($ACountryBorderBox)
    return $ACountry

}