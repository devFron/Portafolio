const NumberRange =() =>{
    let $numberInyect = document.querySelector('.pricing__card__header__number')
    const $form = document.querySelector('#form')
    
    document.addEventListener('change',(e)=>{
        if(e.target === $form.range){
            $numberInyect.innerHTML = `$${$form.range.value}.00 <span class="month">/ month</span>`
        }
    })    
}
const ToggleButton = ()=>{
    let $buttonIcon = document.querySelector('.circle__button')

    document.addEventListener('click',(e)=>{
        if (e.target.matches('.circle__button')) {
            $buttonIcon.classList.toggle('circle__button__toggle')        
        }
    })
}
document.addEventListener('DOMContentLoaded',(e)=>{
    NumberRange()
    ToggleButton()
})
