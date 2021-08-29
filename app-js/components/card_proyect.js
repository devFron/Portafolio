const CardProyect =(props)=>{
    let {id,image,title,description,link} = props
    const $Proyect = document.createElement('article')
    const $ProyectImage = document.createElement('img')
    const $ProyectDescription =document.createElement('div')
    const $ProyectTitle = document.createElement('p')
    const $ProyectDescriptionTxt = document.createElement('p')
    const $ProyectSee = document.createElement('a')

    $Proyect.dataset.id = id
    $ProyectImage.src = image
    $ProyectTitle.textContent = title
    $ProyectDescriptionTxt.textContent = description
    $ProyectSee.href = link
    $ProyectSee.textContent ='Ver'
    $ProyectSee.target = '_blank'

    $Proyect.classList.add('proyect')
    $ProyectImage.classList.add('proyect__image')
    $ProyectDescription.classList.add('proyect__description__box')
    $ProyectTitle.classList.add('proyect__title')
    $ProyectDescriptionTxt.classList.add('proyect__description')
    $ProyectSee.classList.add('proyect__button')

    $Proyect.appendChild($ProyectImage)
    $ProyectDescription.appendChild($ProyectTitle)
    $ProyectDescription.appendChild($ProyectDescriptionTxt)
    $ProyectDescription.appendChild($ProyectSee)
    $Proyect.appendChild($ProyectDescription)
    
    return $Proyect
}
export default CardProyect