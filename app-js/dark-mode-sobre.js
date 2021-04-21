export const DarkModeSobre =( )=>{
    let $body = document.querySelector('body')
    let $header = document.querySelector('#header')
    let $menuLink = document.querySelectorAll('.menu__link')
    let $circle = document.querySelector('.circle')
    let $circleOfFenix = document.querySelector('.circle__of__fenix')
    let $menuOptions = document.querySelector('.menu-options')
    let $menuOptionsLink = document.querySelectorAll('.menu-options__menu__link')
    let $menuOptionsItem = document.querySelectorAll('.menu-options__menu__item')
    let $headerTitle = document.querySelector('.home__link')
    let $imagePhoenix = document.querySelector('.phoenix__image')

    document.addEventListener('click',(e)=>{
        if (e.target === $circle || e.target.matches('.phoenix__image') ){
            $body.classList.toggle('body__dark')
            $header.classList.toggle('header__dark')
            $menuLink[0].classList.toggle('menu__link__dark')
            $menuLink[1].classList.toggle('menu__link__dark')
            $menuLink[2].classList.toggle('menu__link__dark')
            $menuLink[3].classList.toggle('menu__link__dark')
            $circle.classList.toggle('circle__dark')
            $circleOfFenix.classList.toggle('circle__of__fenix__dark')
            $menuOptions.classList.toggle('menu-options__dark')
            $menuOptionsItem.forEach(el => {
                el.classList.toggle('menu-options__menu__item__dark')
            });
            $menuOptionsLink.forEach(el => {
                el.classList.toggle('menu-options__menu__link__dark')
            });
            // $menuOptionsLink.classList.toggle('menu-options__menu__link__dark')
            $headerTitle.classList.toggle('home__link__dark')
            $imagePhoenix.setAttribute('src','../resources/images/images-main/phoenix-framework-color.svg')
        }
    })
   
}