export const DarkModeCV = ( )=>{
    let $body = document.querySelector('body')
    let $header = document.querySelector('#header')
    let $menuLink = document.querySelectorAll('.menu__link')
    let $menuOptions = document.querySelector('.menu-options')
    let $menuOptionsLink = document.querySelectorAll('.menu-options__menu__link')
    let $menuOptionsItem = document.querySelectorAll('.menu-options__menu__item')
    let $headerTitle = document.querySelector('.home__link')
    let $myButton = document.querySelector('.my__button')
    let $socialMediaLInk = document.querySelectorAll('.contact__social-media__link')
    let $githubIcon = document.querySelectorAll('.technologies__image')
    let $cursoCertificado = document.querySelectorAll('.cursos__curso__certificado')
    let $myButtonTwo = document.querySelector('.my__button-two')

    if(localStorage.getItem('dark-mode-index')=== 'true'){
        $body.classList.add('body__black')
        $header.classList.add('header__dark')
        $menuLink[0].classList.add('menu__link__dark')
        $menuLink[1].classList.add('menu__link__dark')
        $menuLink[2].classList.add('menu__link__dark')
        $menuLink[3].classList.add('menu__link__dark')
        $menuOptions.classList.add('menu-options__dark')
        $menuOptionsItem.forEach(el => {
            el.classList.add('menu-options__menu__item__dark')
        });
        $menuOptionsLink.forEach(el => {
            el.classList.add('menu-options__menu__link__dark')
        });
        $headerTitle.classList.add('home__link__dark')
        $myButton.classList.add('my__button__black')
        $socialMediaLInk.forEach((el)=>{
            el.classList.add('contact__social-media__link__black')
        })
        $githubIcon[5].classList.add('icon-github')
        $cursoCertificado.forEach(el => {
            el.classList.add('cursos__curso__certificado__black')
        });
        $myButtonTwo.classList.add('my__button-two__black')
    }else{
        $body.classList.remove('body__dark')
        $header.classList.remove('header__dark')
        $menuLink[0].classList.remove('menu__link__dark')
        $menuLink[1].classList.remove('menu__link__dark')
        $menuLink[2].classList.add('menu__link__dark')
        $menuLink[3].classList.remove('menu__link__dark')
        $menuOptions.classList.remove('menu-options__dark')
        $menuOptionsItem.forEach(el => {
            el.classList.remove('menu-options__menu__item__dark')
        });
        $menuOptionsLink.forEach(el => {
            el.classList.remove('menu-options__menu__link__dark')
        });
        $headerTitle.classList.remove('home__link__dark')
        $myButton.classList.remove('my__button__black')
        $socialMediaLInk.forEach((el)=>{
            el.classList.remove('contact__social-media__link__black')
        })
        $githubIcon[5].classList.remove('icon-github')
        $cursoCertificado.forEach(el => {
            el.classList.add('cursos__curso__certificado__black')
        });
        $myButtonTwo.classList.remove('my__button-two__black')
    }
} 