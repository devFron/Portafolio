const PresentationCard = ()=>{
    const $presentationCard = document.createElement('section')
    const $PersonalImage = document.createElement('img')
    const $presentationContent = document.createElement('article')
    const $Name = document.createElement('h3')
    const $description = document.createElement('p')
    const $socialMedia = document.createElement('article')

    const SocialMedia = [
        {
            icon:`<i class="fab fa-twitter social-media__icon"></i>`,
            link:'https://twitter.com/devfront___ '
        },
        {
            icon:`<i class="fab fa-instagram social-media__icon"></i>`,
            link:'https://www.instagram.com/devfront___/'
        }
    ]
    
    $PersonalImage.src = 'public/person-image.jpeg'
    $PersonalImage.alt = 'personal imag'
    $Name.innerHTML= `José Gabriel Vit García <img class="flag" src="public/flag-mobile.png">`
    $description.textContent = 'Front End Developer con experiencia en desarrollo de sitios web'

    $PersonalImage.classList.add('presentation-card__image')
    $Name.classList.add('presentation-card__name')
    $description.classList.add('presentation-card__description')
    $socialMedia.classList.add('presentation-card__social-media')
    $presentationCard.classList.add('presentation-card')

    $presentationCard.appendChild($PersonalImage)
    $presentationContent.appendChild($Name)
    $presentationContent.appendChild($description)
    SocialMedia.forEach(el => {
        const $socialMediaLink = document.createElement('a')
        $socialMediaLink.innerHTML = el.icon
        $socialMediaLink.href = el.link
        $socialMediaLink.target = '_blank'
        $socialMedia.appendChild($socialMediaLink)
        $socialMedia.appendChild($socialMediaLink)
        $socialMediaLink.classList.add('social-media__link')
    });
    $presentationContent.appendChild($socialMedia)
    $presentationCard.appendChild($presentationContent)
    return $presentationCard
}
export default PresentationCard