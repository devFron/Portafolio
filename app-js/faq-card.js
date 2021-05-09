const ImageResize =( )=>{
    let $image = document.querySelector('.faq__image')
    let $imagetwo = document.querySelector('.faq__image__two')
    
    if(window.innerWidth >= 1000){
        $image.src = '../resources/images/faq-card/illustration-woman-online-desktop.svg'
        $imagetwo.src = '../resources/images/faq-card/bg-pattern-desktop.svg'
    }
}
const listToggle = () =>{

    let $iconImage = document.querySelectorAll('.faq-list__list__itme__icon')
    let $cardDescription = document.querySelectorAll('.faq-list__list__item__description')
    let i  = 0

    $iconImage.forEach(el => {
        el.dataset.index = `${i++}`
    });
    
    if(i > 0){
        i = 0
    }

    $cardDescription.forEach(el => {
        el.dataset.index = `${i++}`
    });

    document.addEventListener('click',(e)=>{
        if(e.target.matches('.faq-list__list__itme__icon')){
            $cardDescription[e.target.dataset.index].classList.toggle('faq-list__list__item__description__enabled')
            $iconImage[e.target.dataset.index].classList.toggle('faq-list__list__itme__icon__click')
        }
    })    
}
document.addEventListener('DOMContentLoaded',(e)=>{
    ImageResize()
    listToggle()
})