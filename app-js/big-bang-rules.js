export const Rules = ()=>{
    let $boxBlack = document.querySelector('.box-shadow')
    let $rulesImages = document.querySelector('.rules__images__box')

    document.addEventListener('click',(e)=>{
        if(e.target.matches('.rules__button') || e.target.matches('.rules__button__text')){
           $rulesImages.classList.add('rules__images__box__enabled') 
           $boxBlack.classList.add('box-shadow__enabled')
        }
        if(e.target.matches('.rules__image__closed')){
            $rulesImages.classList.remove('rules__images__box__enabled') 
            $boxBlack.classList.remove('box-shadow__enabled')
        }
    })
}