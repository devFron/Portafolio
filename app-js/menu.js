export const Menu = ( )=>{
    let $menu = document.querySelector('#menu')
    let $menuIcon = document.querySelector('.menu__icon')

    document.addEventListener('click',(e)=>{
        if(e.target === $menuIcon){
            $menu.classList.toggle('menu__active')
        }
    })

}
