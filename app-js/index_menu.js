export const Menu = () =>{
    let $iconHamburguer = document.querySelector('.menu__options__icon')
    let $menuOptions = document.querySelector('.menu-options')
    let $iconClosed = document.querySelector('.menu__options__close__icon')
    document.addEventListener('click',(e)=>{
        if(e.target === $iconHamburguer){
            $menuOptions.classList.add('menu-options__active')
        }
        if (e.target === $iconClosed ) {
            $menuOptions.classList.remove('menu-options__active')
        }
    })

}