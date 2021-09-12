import PresentationCard from '../components/presentation_card.js'
import GetProyects from './get_proyects.js'
import Cv from '../components/cv.js'
import About from '../components/about.js'
import BlogBox from './get_blog.js'
import HunddleSkill from '../components/Hunddle.js'
import FyloSkill from '../components/Fylo.js'
import FyloDark from '../components/Fylo_dark.js'
import CountriesSkill, { DarkModeCountriesStorage } from '../components/Countries_rest.js'
import Loader from '../components/loader.js'
const Router =async(countries)=>{
    let {hash} = location
    let title = document.querySelector('title')
    const $mainHome = document.querySelector('.main__box')
    const $root = document.getElementById('root')
    console.log(hash)
    if(hash.indexOf('#/skill/')!== -1){
        $root.innerHTML = ''
    }else{
        $mainHome.innerHTML = ''
    }

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

            case '#/skill/hunddle':
                $root.appendChild(HunddleSkill())
                document.querySelector('body').style.background = 'white'
            break;

            case '#/skill/fylo':
                $root.appendChild(FyloSkill())
                document.querySelector('body').style.background = 'white'
            break;
            case '#/skill/fylo-dark-theme':
                $root.appendChild(FyloDark())
                document.querySelector('body').style.background = 'white'
            break;
            case '#/skill/rest-countries':
                const $loader = document.createElement('section')
                $loader.appendChild(Loader())
                $root.appendChild($loader)
                $root.appendChild(await CountriesSkill(countries))
                document.querySelector('body').style.background = 'hsl(0, 0%, 98%)'
                $root.removeChild($loader)
                DarkModeCountriesStorage()
            break;
        
            default:
            break;
        }
    }

    


}
export default Router