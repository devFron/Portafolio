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
    let $cardText = document.querySelectorAll('.card__text')
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
            $headerTitle.classList.toggle('home__link__dark')
            $cardText.forEach((el)=>{
                el.classList.toggle('card__text__dark')
            })
        }
    })
   if (localStorage.getItem('dark-mode-index')=== 'true') {
        $body.classList.add('body__dark')
        $header.classList.add('header__dark')
        $menuLink[0].classList.add('menu__link__dark')
        $menuLink[1].classList.add('menu__link__dark')
        $menuLink[2].classList.add('menu__link__dark')
        $menuLink[3].classList.add('menu__link__dark')
        $circle.classList.add('circle__dark')
        $circleOfFenix.classList.add('circle__of__fenix__dark')
        $menuOptions.classList.add('menu-options__dark')
        $menuOptionsItem.forEach(el => {
            el.classList.add('menu-options__menu__item__dark')
        });
        $menuOptionsLink.forEach(el => {
            el.classList.add('menu-options__menu__link__dark')
        });
        $headerTitle.classList.add('home__link__dark')
        $imagePhoenix.setAttribute('src','../resources/images/images-main/phoenix-framework-color.svg')
        $cardText.forEach((el)=>{
            el.classList.add('card__text__dark')
        })
   } else {
        $body.classList.remove('body__dark')
        $header.classList.remove('header__dark')
        $menuLink[0].classList.remove('menu__link__dark')
        $menuLink[1].classList.remove('menu__link__dark')
        $menuLink[2].classList.remove('menu__link__dark')
        $menuLink[3].classList.remove('menu__link__dark')
        $circle.classList.remove('circle__dark')
        $circleOfFenix.classList.remove('circle__of__fenix__dark')
        $menuOptions.classList.remove('menu-options__dark')
        $menuOptionsItem.forEach(el => {
            el.classList.remove('menu-options__menu__item__dark')
        });
        $menuOptionsLink.forEach(el => {
            el.classList.remove('menu-options__menu__link__dark')
        });
        $headerTitle.classList.remove('home__link__dark')
        $imagePhoenix.setAttribute('src','../resources/images/images-main/fenix-light.svg')
        $cardText.forEach((el)=>{
            el.classList.remove('card__text__dark')
        })
   }
}