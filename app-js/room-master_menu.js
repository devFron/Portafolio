export const Menu = () =>{

    let $barsIcon = document.querySelector('.icon-hamburguer')
    let $nav =document.querySelector('#nav')
    document.addEventListener('click',(e)=>{

        if(e.target === $barsIcon){
            $nav.classList.add('nav__enabled')
        }
        if(e.target.matches('.x-icon')) {
            $nav.classList.remove('nav__enabled')
        }
    })
}
