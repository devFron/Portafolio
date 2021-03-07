export const Menu = ( )=>{
    let $menu = document.querySelector('.menu')
    let $menuIcon = document.querySelector('.menu__icon')
    let $modalColor = document.querySelector('.modal-color')
    document.addEventListener('click',(e)=>{
        if(e.target === $menuIcon){
            $menu.classList.toggle('menu__active')
            $modalColor.classList.toggle('modal-color__active')
        }
    })

}
