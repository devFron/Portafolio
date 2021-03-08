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
    $circle.setAttribute('id','cirlce-one')

    let $circleIcon = document.createElement('i')
    $circleIcon.classList.add('fas')
    $circleIcon.classList.add('fa-check')
    $circleIcon.classList.add('circle-icon')
    $circleIcon.setAttribute('id','circle-icon-one')
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


    let $backCardOfertTwo = document.createElement('article')
    $backCardOfertTwo.classList.add('back-card-ofert')
    
    let $backCardOfertTextTwo = document.createElement('div')
    $backCardOfertTextTwo.classList.add('back-card__text__ofert')

    let $backCardTitlesTwo = document.createElement('div')
    $backCardTitlesTwo.classList.add('back-card__titles')

    let $circleTwo = document.createElement('div')
    $circleTwo.classList.add('circle')
    $circleTwo.setAttribute('id','circle-two')
    let $circleIconTwo = document.createElement('i')
    $circleIconTwo.classList.add('fas')
    $circleIconTwo.classList.add('fa-check')
    $circleIconTwo.classList.add('circle-icon')
    $circleIconTwo.setAttribute('id','circle-icon-two')
    $circleTwo.appendChild($circleIconTwo)

    let $backCardOfertTitleTwo = document.createElement('p')
    $backCardOfertTitleTwo.classList.add('back-card__title__ofert')
    $backCardOfertTitleTwo.textContent = `Black Edition`

    let $backCardOfertPriceTwo = document.createElement('p')
    $backCardOfertPriceTwo.classList.add('back-card__price')
    $backCardOfertPriceTwo.textContent = `Pledge $75 or more`

    let $backCardPriceTwo = document.createElement('p')
    $backCardPriceTwo.classList.add('back-card__price__number')
    $backCardPriceTwo.textContent = '101'

    let $backCardPriceOffsetTwo = document.createElement('span')
    $backCardPriceOffsetTwo.classList.add('back-card__title__number__ofset')
    $backCardPriceOffsetTwo.textContent = 'left'
    $backCardPriceTwo.appendChild($backCardPriceOffsetTwo)

    let $backCardOfertDescriptionTwo = document.createElement('p')
    $backCardOfertDescriptionTwo.classList.add('back-card__description___ofert')
    $backCardOfertDescriptionTwo.textContent = `You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign,and you'llbe added yo a special backer member list.`


    $backCardOfertTwo.appendChild($backCardOfertTextTwo)
    $backCardOfertTwo.appendChild($backCardOfertDescriptionTwo)
    $backCardOfertTextTwo.appendChild($circleTwo)
    $backCardOfertTextTwo.appendChild($backCardTitlesTwo)
    $backCardTitlesTwo.appendChild($backCardOfertTitleTwo)
    $backCardTitlesTwo.appendChild($backCardOfertPriceTwo)
    $backCardOfertTextTwo.appendChild($backCardPriceTwo)

    // ------
    let $backCardOfertThree = document.createElement('article')
    $backCardOfertThree.classList.add('back-card-ofert')
    
    let $backCardOfertTextThree = document.createElement('div')
    $backCardOfertTextThree.classList.add('back-card__text__ofert')

    let $backCardTitlesThree = document.createElement('div')
    $backCardTitlesThree.classList.add('back-card__titles')

    let $circleThree = document.createElement('div')
    $circleThree.classList.add('circle')
    $circleThree.setAttribute('id','circle-three')

    let $circleIconThree = document.createElement('i')
    $circleIconThree.classList.add('fas')
    $circleIconThree.classList.add('fa-check')
    $circleIconThree.classList.add('circle-icon')
    $circleIconThree.setAttribute('id','circle-icon-three')
    $circleThree.appendChild($circleIconThree)

    let $backCardOfertTitleThree = document.createElement('p')
    $backCardOfertTitleThree.classList.add('back-card__title__ofert')
    $backCardOfertTitleThree.textContent = `Black Edition Stand`

    let $backCardOfertPriceThree = document.createElement('p')
    $backCardOfertPriceThree.classList.add('back-card__price')
    $backCardOfertPriceThree.textContent = `Pledge $75 or more`

    let $backCardPriceThree = document.createElement('p')
    $backCardPriceThree.classList.add('back-card__price__number')
    $backCardPriceThree.textContent = '101'

    let $backCardPriceOffsetThree = document.createElement('span')
    $backCardPriceOffsetThree.classList.add('back-card__title__number__ofset')
    $backCardPriceOffsetThree.textContent = 'left'
    $backCardPriceThree.appendChild($backCardPriceOffsetThree)

    let $backCardOfertDescriptionThree = document.createElement('p')
    $backCardOfertDescriptionThree.classList.add('back-card__description___ofert')
    $backCardOfertDescriptionThree.textContent = `You get an ergonomic stand made of natural bamboo.You've helped us launch our promotional campaign,and you'llbe added yo a special backer member list.`


    $backCardOfertThree.appendChild($backCardOfertTextThree)
    $backCardOfertThree.appendChild($backCardOfertDescriptionThree)
    $backCardOfertTextThree.appendChild($circleThree)
    $backCardOfertTextThree.appendChild($backCardTitlesThree)
    $backCardTitlesThree.appendChild($backCardOfertTitleThree)
    $backCardTitlesThree.appendChild($backCardOfertPriceThree)
    $backCardOfertTextThree.appendChild($backCardPriceThree)


    $backCards.appendChild($backCard)
    $backCards.appendChild($backCardOfert)
    $backCards.appendChild($backCardOfertTwo)
    $backCards.appendChild($backCardOfertThree)
    Fragment.appendChild(modalDefaul)
    $body.appendChild(Fragment)
    
    let $circleOneNode = document.querySelector('#cirlce-one')
    let $circleTwoNode = document.querySelector('#circle-two')
    let $circleThreeNode = document.querySelector('#circle-three')
    let $circleIconNode = document.querySelector('#circle-icon-one')
    let $circleIconNodeTwo = document.querySelector('#circle-icon-two')
    let $circleIconNodeTrhee = document.querySelector('#circle-icon-three')
    
    document.addEventListener('click',(e)=>{
        if (e.target.matches('.moda-icon')) {
            modalDefaul.classList.toggle('modal-default__disabled')
        }
        if (e.target === $circleOneNode || e.target === $circleIconNode) {
            $circleIconNode.classList.toggle('circle-icon__active')
        }
        if ( e.target === $circleTwoNode || e.target === $circleIconNodeTwo) {
            $circleIconNodeTwo.classList.toggle('circle-icon__active')
        }
        if (e.target === $circleThreeNode || e.target == $circleIconNodeTrhee) {
            $circleIconNodeTrhee.classList.toggle('circle-icon__active')
        }
    })

    
}