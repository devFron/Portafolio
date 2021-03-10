export const Thanks = ()=>{
    let $thanks = document.createElement('section')
    $thanks.classList.add('thanks')

    let $thanksCheck = document.createElement('i')
    $thanksCheck.classList.add('thanks__icon')
    $thanksCheck.classList.add('fas')
    $thanksCheck.classList.add('fa-check')

    let $thanksTitle = document.createElement('p')
    $thanksTitle.classList.add('thanks__title')
    $thanksTitle.textContent = 'Thanks for your support!'
    
    let $thanksDescription = document.createElement('p')
    $thanksDescription.classList.add('thanks__description')
    $thanksDescription.textContent = 'Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser Worlwide.You will get an email once our campaign is complete.'

    let $thanksButton = document.createElement('button')
    $thanksButton.classList.add('thanks__button')
    $thanksButton.textContent='Got it!'

    $thanks.appendChild($thanksCheck)
    $thanks.appendChild($thanksTitle)
    $thanks.appendChild($thanksDescription)
    $thanks.appendChild($thanksButton)

    const Fragment = document.createDocumentFragment()
    Fragment.appendChild($thanks)

    let $body = document.querySelector('body')
    $body.appendChild(Fragment)

}