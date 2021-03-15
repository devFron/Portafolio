export const Menu = ()=>{
    let $nav = document.querySelector('#nav')
    let $hamburguerIcon = document.querySelector('.hambuguer-icon')
    let $menuContact = document.querySelectorAll('.menu__contact')
    let $menuIconArrow = document.querySelectorAll('.menu__icon')
    let $menuLink = document.querySelectorAll('.menu__link')
    console.log($menuLink);
    document.addEventListener('click',(e)=>{

        if (e.target === $hamburguerIcon) {
            $nav.classList.toggle('nav__enabled') 
        }
        if ($nav.classList.contains('nav__enabled')) {
            $hamburguerIcon.classList.remove('fa-bars')
            $hamburguerIcon.classList.add('fa-times')
        }else{
            $hamburguerIcon.classList.add('fa-bars')
            $hamburguerIcon.classList.remove('fa-times')
            
        }
        switch (e.target) {

            case $menuIconArrow[0]:
                $menuContact[0].classList.toggle('menu__contact__enabled')
                e.preventDefault()
            break;
                
            case $menuIconArrow[1]:
                $menuContact[1].classList.toggle('menu__contact__enabled')
                e.preventDefault()
            break;
                
            case $menuIconArrow[2]:
                $menuContact[2].classList.toggle('menu__contact__enabled') 
                e.preventDefault()
            break;
        
            default:
            break;
        }

        if (e.target === $menuLink[0] ||e.target === $menuLink[1]||e.target === $menuLink[2]) {
            e.preventDefault()
        }
    })
}