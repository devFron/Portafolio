import PresentationCard from '../components/presentation_card.js'
import GetProyects from './get_proyects.js'
import Cv from '../components/cv.js'
import About from '../components/about.js'
import BlogBox from './get_blog.js'
const Router =async()=>{
    let {hash} = location
    let title = document.querySelector('title')
    const $mainHome = document.querySelector('.main__box')

    $mainHome.innerHTML = ''

    if(hash === '#/inicio' || hash === ''){
        const $sectionHome = document.createElement('section')
        const $ProyectsBox = document.createElement('section')
        const $SkillsBox = document.createElement('section')

        $sectionHome.classList.add('section__home')

        $sectionHome.appendChild(PresentationCard())
        $ProyectsBox.appendChild(GetProyects().Proyects)
        $SkillsBox.appendChild(GetProyects().Skills)
        $sectionHome.appendChild($ProyectsBox)
        $sectionHome.appendChild($SkillsBox)
        $mainHome.appendChild($sectionHome)
        title.textContent = 'Inicio'
    }else{
        switch (hash) {
            case '#/cv':
                $mainHome.appendChild(Cv())
                title.textContent = 'CV'
            break;

            case '#/sobre':
                $mainHome.appendChild(About())
                title.textContent = 'Sobre'
            break;

            case '#/blog':
                await $mainHome.appendChild(await BlogBox())
                title.textContent = 'Blog'
            break;
        
            default:
            break;
        }
    }

    


}
export default Router