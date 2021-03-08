export const  menuDefaul = ()=>{
    let $body = document.querySelector('body')
    const Fragment = document.createDocumentFragment()



    let modalDefaul = document.createElement('section')
    modalDefaul.classList.add('modal-default')

    let $modalIcon = document.createElement('i')
    $modalIcon.classList.add('moda-icon')
    $modalIcon.classList.add('fas')
    $modalIcon.classList.add('fa-times')


    let $modalTop = document.createElement('article')
    $modalTop.classList.add('modal__top')

    modalDefaul.appendChild($modalIcon)
    modalDefaul.appendChild($modalTop)
    
    let $modalTopTitle = document.createElement('p')
    $modalTopTitle.classList.add('modal__top__title')
    $modalTopTitle.textContent = 'Back this project'
    
    let $modalTopDescription = document.createElement('p')
    $modalTopDescription.classList.add('modal__top__description')
    $modalTopDescription.textContent = 'Want to support us in bringing Mastercraft Bamboo Montor Rise ouy in the world?'

    $modalTop.appendChild($modalTopTitle)
    $modalTop.appendChild($modalTopDescription)

    let $backCards = document.createElement('section')
    $backCards.classList.add('back-cards')
    modalDefaul.appendChild($backCards)
    // card diferent

    let $backCard = document.createElement('article')
    $backCard.classList.add('back-card')

    let $backCardTop = document.createElement('div')
    $backCardTop.classList.add('back-card__top')

    let $circle = document.createElement('div')
    $circle.classList.add('circle')

    let $circleIcon = document.createElement('i')
    $circleIcon.classList.add('fas')
    $circleIcon.classList.add('fa-check')
    $circleIcon.classList.add('circle-icon')
    $circle.appendChild($circleIcon)


    let $backCardTitle = document.createElement('p')
    $backCardTitle.classList.add('back-card__title')
    $backCardTitle.textContent= 'pledge width no Reward'


    let $backCardDescription = document.createElement('p')
    $backCardDescription.classList.add('back-card__description')
    $backCardDescription.textContent= 'Choose to support us without a reward if you simply believe in ourproject.As a backer,you will be signed up to receive product update via email.'

    $backCard.appendChild($backCardTop)
    $backCardTop.appendChild($circle)
    $backCardTop.appendChild($backCardTitle)
    $backCard.appendChild($backCardDescription)
    // estos son los demas cards


    let $backCardOfert = document.createElement('article')
    $backCardOfert.classList.add('back-card-ofert')
    
    let $backCardOfertText = document.createElement('div')
    $backCardOfertText.classList.add('back-card__text__ofert')

    let $backCardTitles = document.createElement('div')
    $backCardTitles.classList.add('back-card__titles')

    let $backCardOfertTitle = document.createElement('p')
    $backCardOfertTitle.classList.add('back-card__title__ofert')
    $backCardOfertTitle.textContent = `Bamboo Stand`

    let $backCardOfertPrice = document.createElement('p')
    $backCardOfertPrice.classList.add('back-card__price')
    $backCardOfertPrice.textContent = `Pledge $25 or more`

    let $backCardPrice = document.createElement('p')
    $backCardPrice.classList.add('back-card__price__number')
    $backCardPrice.textContent = '101'

    let $backCardPriceOffset = document.createElement('span')
    $backCardPriceOffset.classList.add('back-card__title__number__ofset')
    $backCardPriceOffset.textContent = 'left'
    $backCardPrice.appendChild($backCardPriceOffset)

    let $backCardOfertDescription = document.createElement('p')
    $backCardOfertDescription.classList.add('back-card__description___ofert')
    $backCardOfertDescription.textContent = `You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign,and you'llbe added yo a special backer member list.`


    $backCardOfert.appendChild($backCardOfertText)
    $backCardOfert.appendChild($backCardOfertDescription)
    $backCardOfertText.appendChild($circle)
    $backCardOfertText.appendChild($backCardTitles)
    $backCardTitles.appendChild($backCardOfertTitle)
    $backCardTitles.appendChild($backCardOfertPrice)
    $backCardOfertText.appendChild($backCardPrice)


    $backCards.appendChild($backCard)
    $backCards.appendChild($backCardOfert)
    Fragment.appendChild(modalDefaul)
    $body.appendChild(Fragment)
    


    document.addEventListener('click',(e)=>{
        if (e.target.matches('.moda-icon')) {
            modalDefaul.classList.toggle('modal-default__disabled')
        }
    })

    
}