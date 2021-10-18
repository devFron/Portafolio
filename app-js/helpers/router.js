import Header from '../components/header.js'
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
import BookmarkSkill from '../components/Bookmark.js'
const Router =async(countries)=>{
    let {hash,href} = location
    let title = document.querySelector('title')
    const $root = document.getElementById('root')
    const $DynamicContent = document.getElementById('dynamic-content')
    if(href.indexOf('#/skill/') !== -1){
        $root.innerHTML = ''
        switch (hash) {
            case '#/skill/hunddle':
                $root.appendChild(HunddleSkill())
                document.querySelector('.hunddle__box').style.background = 'white'
            break;
            case '#/skill/fylo':
                $root.appendChild(FyloSkill())
                document.querySelector('.fylo').style.background = 'white'
            break;
            case '#/skill/fylo-dark-theme':
                $root.appendChild(FyloDark())
                document.querySelector('.fylo-dark').style.background = 'white'
            break;
            case '#/skill/rest-countries':
                $root.appendChild(await CountriesSkill(countries))
                document.querySelector('.countries').style.background = 'hsl(0, 0%, 98%)'
                DarkModeCountriesStorage()
            break;
            case '#/skill/bookmark':
                $root.appendChild(BookmarkSkill())
                document.querySelector('.bookmark-box').style.background = 'white'
            break; 
        
            default:
            break;        
        }
    }else{
        $root.insertAdjacentElement('afterbegin',Header())
        $DynamicContent.innerHTML = ''

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
            $DynamicContent.appendChild($sectionHome)
            title.textContent = 'Inicio'
        }
        switch (hash) {
            case '#/cv':
                $DynamicContent.appendChild(Cv())
                title.textContent = 'CV'
            break;

            case '#/sobre':
                $DynamicContent.appendChild(About())
                title.textContent = 'Sobre'
            break;

            case '#/blog':
                await $DynamicContent.appendChild(await BlogBox())
                title.textContent = 'Blog'
            break;
        
            default:
            break;
        }
    }
}
export default Router