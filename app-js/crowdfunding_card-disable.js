export const cardDisable = () =>{
    let $card = document.querySelector('#proyect-card-three')
    $card.classList.add('card__disable')
    
    let $cardTitle = document.querySelector('#proyect-card-title-three')
    let $cardDescription = document.querySelector('#proyect-card-description-three')
    let $cardNumber = document.querySelector('#proyect-card-number-three')
    let $cardoffset = document.querySelector('#proyect-card-number-direction-three')
    let $cardButton = document.querySelector('#proyect-card-button-three')
    let $cardPrice = document.querySelector('#proyect-card__price-three')


    if ($card.classList.contains('card__disable')=== true) {
        $cardTitle.classList.add('card__title')
        $cardDescription.classList.add('card__description')
        $cardNumber.classList.add('card-number')
        $cardoffset.classList.add('number-direcrtion__desable')
        $cardButton.classList.add('card__button__disable')
        $cardPrice.classList.add('card__price__disable')
    }
}