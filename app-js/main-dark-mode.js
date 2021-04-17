export const DarkMode = () =>{
    let $body = document.querySelector('body')
    let $header = document.querySelector('#header')
    let $menuLink = document.querySelectorAll('.menu__link')
    let $circle = document.querySelector('.circle')
    let $sectinProyects = document.querySelector('.section-proyects')
    let assistantBody = document.querySelector('.assistant__body')
    let $frontMentorLink = document.querySelector('.front-met')
    let $sliderButtons = document.querySelectorAll('.assistant__buttons__button')
    let $sliderButtonsBox = document.querySelector('.assistant__buttons')
    let $sliderButtonsActiveBox = document.querySelector('.assistant__buttons__slider')
    let $sliderButtonsActive = document.querySelectorAll('.assistant__buttons__slider__active')
    let $imagePhoenix = document.querySelector('.phoenix__image')
    let $imagePhoenixSlider = document.querySelectorAll('.assistan__slider__image')
    let $message = document.querySelector('.messenge-dark-mode')
    let $linkProyects = document.querySelectorAll('.proyect__link')
    let $circleOfFenix = document.querySelector('.circle__of__fenix')
    let $menuOptions = document.querySelector('.menu-options')
    let $menuOptionsLink = document.querySelectorAll('.menu-options__menu__link')
    let $menuOptionsItem = document.querySelectorAll('.menu-options__menu__item')
    document.addEventListener('click',(e)=>{
        if (e.target === $circle || e.target.matches('.phoenix__image') ) {
            $body.classList.toggle('body__dark')
            $header.classList.toggle('header__dark')
            $menuLink[0].classList.add('menu__link__dark')
            $menuLink[1].classList.add('menu__link__dark')
            $menuLink[2].classList.toggle('menu__link__dark')
            $menuLink[3].classList.toggle('menu__link__dark')
            $circle.classList.toggle('circle__dark')
            $sectinProyects.classList.toggle('section__proyects__dark')
            assistantBody.classList.toggle('assistant__body__dark')
            $frontMentorLink.classList.toggle('front-met__dark')
            $sliderButtons[0].classList.toggle('assistant__buttons__button__dark')
            $sliderButtons[1].classList.toggle('assistant__buttons__button__dark')
            $sliderButtonsActive[0].classList.toggle('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[1].classList.toggle('assistant__buttons__slider__active__dark')
            // $sliderButtonsActive[2].classList.toggle('assistant__buttons__slider__active__dark')
            // $sliderButtonsActive[3].classList.toggle('assistant__buttons__slider__active__dark')
            $sliderButtonsBox.classList.toggle('assistant__buttons__dakr')
            $sliderButtonsActiveBox.classList.toggle('assistant__buttons__slider__dark')
            $linkProyects.forEach(el => {
                el.classList.toggle('proyect__link__dark')                
            });
            $circleOfFenix.classList.toggle('circle__of__fenix__dark')
            $menuOptions.classList.toggle('menu-options__dark')
            $menuOptionsItem.forEach(el => {
                el.classList.toggle('menu-options__menu__item__dark')
            });
            $menuOptionsLink.forEach(el => {
                el.classList.toggle('menu-options__menu__link__dark')
            });
            // $menuOptionsLink.classList.toggle('menu-options__menu__link__dark')


        }
        if ($body.classList.contains('body__dark')) {
            localStorage.setItem('dark-mode-index','true')
            $imagePhoenix.setAttribute('src','resources/images/images-main/phoenix-framework-color.svg')
            $imagePhoenixSlider[1].setAttribute('src','resources/images/images-main/phoenix-framework-color.svg')
        }else{
            localStorage.setItem('dark-mode-index','false')
            $imagePhoenix.setAttribute('src','resources/images/images-main/fenix-light.svg')
            $imagePhoenixSlider[1].setAttribute('src','resources/images/images-main/fenix-light.svg')
        }
        if (e.target.matches('.close__icon')) {
            setTimeout(() => {
                $message.classList.add('messenge-dark-mode__disabled')        
            }, 3000);
        }   
    })
    if (localStorage.getItem('dark-mode-index') === 'true') {
            $body.classList.add('body__dark')
            $header.classList.add('header__dark')
            $menuLink[0].classList.add('menu__link__dark')
            $menuLink[1].classList.add('menu__link__dark')
            $menuLink[2].classList.add('menu__link__dark')
            $menuLink[3].classList.add('menu__link__dark')
            $circle.classList.add('circle__dark')
            $sectinProyects.classList.add('section__proyects__dark')
            assistantBody.classList.add('assistant__body__dark')
            $frontMentorLink.classList.add('front-met__dark')
            $sliderButtons[0].classList.add('assistant__buttons__button__dark')
            $sliderButtons[1].classList.add('assistant__buttons__button__dark')
            $sliderButtonsActive[0].classList.add('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[0].classList.add('slider__button__enabled__dark')
            $sliderButtonsActive[1].classList.add('assistant__buttons__slider__active__dark')
            // $sliderButtonsActive[2].classList.add('assistant__buttons__slider__active__dark')
            // $sliderButtonsActive[3].classList.add('assistant__buttons__slider__active__dark')
            $sliderButtonsBox.classList.add('assistant__buttons__dakr')
            $sliderButtonsActiveBox.classList.add('assistant__buttons__slider__dark')
            $linkProyects.forEach(el => {
                el.classList.add('proyect__link__dark')                
            });
            $circleOfFenix.classList.add('circle__of__fenix__dark')
            $menuOptions.classList.add('menu-options__dark')
            $menuOptionsItem.forEach(el => {
                el.classList.add('menu-options__menu__item__dark')
            });
            $menuOptionsLink.forEach(el => {
                el.classList.add('menu-options__menu__link__dark')
            });
    } else {
            $body.classList.remove('body__dark')
            $header.classList.remove('header__dark')
            $menuLink[0].classList.remove('menu__link__dark')
            $menuLink[1].classList.remove('menu__link__dark')
            $menuLink[2].classList.remove('menu__link__dark')
            $menuLink[3].classList.remove('menu__link__dark')
            $circle.classList.remove('circle__dark')
            $sectinProyects.classList.remove('section__proyects__dark')
            assistantBody.classList.remove('assistant__body__dark')
            $frontMentorLink.classList.remove('front-met__dark')
            $sliderButtons[0].classList.remove('assistant__buttons__button__dark')
            $sliderButtons[1].classList.remove('assistant__buttons__button__dark')
            $sliderButtonsActive[0].classList.remove('assistant__buttons__slider__active__dark')
            $sliderButtonsActive[1].classList.remove('assistant__buttons__slider__active__dark')
            // $sliderButtonsActive[2].classList.remove('assistant__buttons__slider__active__dark')
            // $sliderButtonsActive[3].classList.remove('assistant__buttons__slider__active__dark')
            $sliderButtonsBox.classList.remove('assistant__buttons__dakr')
            $sliderButtonsActiveBox.classList.remove('assistant__buttons__slider__dark')
            $linkProyects.forEach(el => {
                el.classList.remove('proyect__link__dark')                
            });
            $circleOfFenix.classList.remove('circle__of__fenix__dark')
            $menuOptions.classList.remove('menu-options__dark')
            $menuOptionsItem.forEach(el => {
                el.classList.remove('menu-options__menu__item__dark')
            });
            $menuOptionsLink.forEach(el => {
                el.classList.remove('menu-options__menu__link__dark')
            });
    }
}