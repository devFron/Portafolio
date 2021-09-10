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
const GetCountries = async()=>{
    const $CountriesCountry =document.createElement('section')
    $CountriesCountry.classList.add('countries__country')
    try {
        let res = await fetch('https://restcountries.eu/rest/v2/all')
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