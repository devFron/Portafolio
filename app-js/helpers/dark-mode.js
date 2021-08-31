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
export const DarkModeSave = ()=>{

    let {hash}=location

    if(localStorage.getItem('devfron-dark-mode')==='true'){
        document.querySelector('header').classList.add('background-item-dark')
        document.querySelectorAll('.menu__link').forEach(item=>item.classList.add('font-dark'))
        document.querySelector('.dakr-mode').classList.add('dark-mode-dark')
        document.querySelector('body').classList.add('body-dark')   
    }else{
        document.querySelector('header').classList.remove('background-item-dark')
        document.querySelectorAll('.menu__link').forEach(item=>item.classList.remove('font-dark'))
        document.querySelector('.dakr-mode').classList.remove('dark-mode-dark')
        document.querySelector('body').classList.remove('body-dark')   
    }

    if(hash === '' || hash ==='#/inicio'){
        if(localStorage.getItem('devfron-dark-mode')==='true'){
            document.querySelector('.presentation-card').querySelector('article').classList.add('background-item-dark')
            document.querySelector('.presentation-card__social-media').classList.add('background-item-dark')
            document.querySelectorAll('.proyect').forEach(el=>el.classList.add('background-item-dark'))
            document.querySelectorAll('.kill__box').forEach(el=>el.classList.add('background-item-dark'))
            document.querySelectorAll('.kill__link').forEach(el=>el.classList.add('font-dark'))
        }else{
            document.querySelector('.presentation-card').querySelector('article').classList.remove('background-item-dark')
            document.querySelector('.presentation-card__social-media').classList.remove('background-item-dark')
            document.querySelectorAll('.proyect').forEach(el=>el.classList.remove('background-item-dark'))
            document.querySelectorAll('.kill__box').forEach(el=>el.classList.remove('background-item-dark'))
            document.querySelectorAll('.kill__link').forEach(el=>el.classList.remove('font-dark'))
        }
    }else{
        switch (hash) {
            case '#/cv':
                if(localStorage.getItem('devfron-dark-mode')==='true'){
                    document.querySelector('.cv__name').classList.add('font-dark')
                    document.querySelector('.cv__profesion').classList.add('font-dark')
                    document.querySelector('.cv__button').classList.add('cv-button-dark')
                    document.querySelectorAll('.cv__contact__icon').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.cv__contact__description').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.curso__title').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.curso__description').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.curso__certificacion').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.curos__certificacion').forEach(el=>el.classList.add('font-dark'))
                }else{
                    document.querySelector('.cv__name').classList.remove('font-dark')
                    document.querySelector('.cv__profesion').classList.remove('font-dark')
                    document.querySelector('.cv__button').classList.remove('cv-button-dark')
                    document.querySelectorAll('.cv__contact__icon').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.cv__contact__description').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.curso__title').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.curso__description').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.curso__certificacion').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.curos__certificacion').forEach(el=>el.classList.remove('font-dark'))
                }
            break;

            case '#/sobre':
                if(localStorage.getItem('devfron-dark-mode')==='true'){
                    document.querySelectorAll('.about__item__title').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.about__item__description').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.intereses__title').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.intereses__description').forEach(el=>el.classList.add('font-dark'))
                }else{
                    document.querySelectorAll('.about__item__title').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.about__item__description').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.intereses__title').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.intereses__description').forEach(el=>el.classList.remove('font-dark'))
                }

            break;
                
            case '#/blog':
                if(localStorage.getItem('devfron-dark-mode')==='true'){
                    document.querySelectorAll('.blog').forEach(el=>el.classList.add('background-item-dark'))
                    document.querySelectorAll('.blog__title').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.blog__description').forEach(el=>el.classList.add('font-dark'))
                    document.querySelectorAll('.blog__button').forEach(el=>el.classList.add('button-blog'))
                }else{
                    document.querySelectorAll('.blog').forEach(el=>el.classList.remove('background-item-dark'))
                    document.querySelectorAll('.blog__title').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.blog__description').forEach(el=>el.classList.remove('font-dark'))
                    document.querySelectorAll('.blog__button').forEach(el=>el.classList.remove('button-blog'))
                }
            break;
            
            default:
            break;
        }    
    }

}