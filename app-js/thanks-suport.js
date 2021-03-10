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

    let $proyectCardButtonOne = document.querySelector('#proyect-card-button-one')
    let $proyectCardButtonTwo = document.querySelector('#proyect-card-button-two')
    let $proyectCardButtonThree = document.querySelector('#proyect-card-button-three')
    let $thanksBox = document.querySelector('.thanks') 
    let $buttonBuyOne = document.querySelector('#back-card-ofert-buy-button-continue-one')
    let $buttonBuyTwo = document.querySelector('#back-card-ofert-buy-button-continue-two')
    let $buttonBuyThree = document.querySelector('#back-card-ofert-buy-button-continue-three')

    document.addEventListener('click',(e) =>{

        if (e.target === $proyectCardButtonOne || e.target === $proyectCardButtonTwo || e.target === $proyectCardButtonThree) {
            $thanksBox.classList.add('thanks__enabled')
            e.preventDefault()
        } 
        if (e.target.matches('.thanks__button') ) {
            $thanksBox.classList.remove('thanks__enabled')
        } 
        if(e.target === $buttonBuyOne || e.target === $buttonBuyTwo ||e.target === $buttonBuyThree ){
            e.preventDefault()
            $thanksBox.classList.add('thanks__enabled')
        }

    })


}