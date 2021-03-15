export const Menu = ()=>{
    let $nav = document.querySelector('#nav')
    let $hamburguerIcon = document.querySelector('.hambuguer-icon')
    let $menuContact = document.querySelectorAll('#menu-contact')

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
    })
}