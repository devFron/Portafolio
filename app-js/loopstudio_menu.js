const Menu = () =>{
    let $navIcon = document.querySelector('#nav-icon')
    let $navIconClose = document.querySelector('#nav-close-icon')
    let $menu = document.querySelector('#menu')

    document.addEventListener('click',(e)=>{
        if (e.target === $navIcon) {
            $menu.classList.add('menu__enabled')
        }
        if (e.target === $navIconClose) {
            $menu.classList.remove('menu__enabled')
        }
    })
}
Menu()