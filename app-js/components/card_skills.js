const CardSkills = (props)=>{
    let {image,nameProyect,link} = props
    const $killBox = document.createElement('article')
    const $killImage = document.createElement('img')
    const $killLink = document.createElement('a')

    $killImage.src = image
    $killImage.alt = nameProyect
    $killLink.href = link
    $killLink.textContent = nameProyect

    $killBox.classList.add('kill__box')
    $killImage.classList.add('kill__image')
    $killLink.classList.add('kill__link')

    $killBox.appendChild($killImage)
    $killBox.appendChild($killLink)


    return $killBox
}
export default CardSkills