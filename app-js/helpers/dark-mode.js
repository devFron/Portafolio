export const DarkModeToggle =()=>{
    document.querySelector('body').classList.toggle('body-dark')   
    document.querySelector('header').classList.toggle('background-item-dark')
    document.querySelectorAll('.menu__link').forEach(item=>item.classList.toggle('font-dark'))
    document.querySelector('.dakr-mode').classList.toggle('dark-mode-dark')


    if(location.hash==='' ||location.hash==='#/inicio'){
        document.querySelector('.presentation-card').querySelector('article').classList.toggle('background-item-dark')
        document.querySelector('.presentation-card__social-media').classList.toggle('background-item-dark')
        document.querySelectorAll('.proyect').forEach(el=>el.classList.toggle('background-item-dark'))
        document.querySelectorAll('.kill__box').forEach(el=>el.classList.toggle('background-item-dark'))
        document.querySelectorAll('.kill__link').forEach(el=>el.classList.toggle('font-dark'))
    }else{
        switch (location.hash) {
            case '#/cv':
                document.querySelector('.cv__name').classList.toggle('font-dark')
                document.querySelector('.cv__profesion').classList.toggle('font-dark')
                document.querySelector('.cv__button').classList.toggle('cv-button-dark')
                document.querySelectorAll('.cv__contact__icon').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.cv__contact__description').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.curso__title').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.curso__description').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.curso__certificacion').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.curos__certificacion').forEach(el=>el.classList.toggle('font-dark'))
            break;

            case '#/sobre':
                document.querySelectorAll('.about__item__title').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.about__item__description').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.intereses__title').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.intereses__description').forEach(el=>el.classList.toggle('font-dark'))
            break;
            case '#/blog':
                document.querySelectorAll('.blog').forEach(el=>el.classList.toggle('background-item-dark'))
                document.querySelectorAll('.blog__title').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.blog__description').forEach(el=>el.classList.toggle('font-dark'))
                document.querySelectorAll('.blog__button').forEach(el=>el.classList.toggle('button-blog'))
            break;

            default:
            break;
        }
    }

}