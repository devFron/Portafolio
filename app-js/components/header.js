const Header =() => {
    const $header = document.createElement('header')
    const $logo = document.createElement('img')
    const $nav = document.createElement('nav')
    const $menu = document.createElement('ul')
    const $DarkMode = document.createElement('section') 
    const $iconSun = document.createElement('i')
    const $iconMoon = document.createElement('i')
    const $iconCircle = document.createElement('article')
    const Items = [
        {
            icon:`<i class="fas fa-home menu__icon"></i>`,
            text:'Inicio'
        },
        {
            icon:`<i class="fas fa-align-left menu__icon"></i>`,
            text:'CV'
        },
        {
            icon:`<i class="fas fa-address-book menu__icon"></i>`,
            text:'Sobre'
        },
        {
            icon:`<i class="fas fa-terminal menu__icon"></i>`,
            text:'Blog'
        }

    ]
    $logo.src = 'public/elephant.png'
    Items.forEach(el => {
        const $menuItem = document.createElement('li')
        const $menuLink = document.createElement('a')        
        $menuLink.href = `#/${el.text.toLocaleLowerCase()}`
        $menuLink.innerHTML = `${el.icon} ${el.text}`
        $menuItem.classList.add('menu__item')
        $menuLink.classList.add('menu__link')
        $menuItem.appendChild($menuLink)
        $menu.appendChild($menuItem)
    });

    $iconSun.classList.add('fas','fa-sun','dark-mode__icon')
    $iconMoon.classList.add('fas','fa-moon','dark-mode__icon')
    $iconCircle.classList.add('dark-mode__circle')
    $DarkMode.classList.add('dakr-mode')
    
    $header.appendChild($logo)
    $nav.appendChild($menu)
    $header.appendChild($nav)
    $DarkMode.appendChild($iconSun)
    $DarkMode.appendChild($iconMoon)
    $DarkMode.appendChild($iconCircle)
    $header.appendChild($DarkMode)
    return $header
}
export default Header
