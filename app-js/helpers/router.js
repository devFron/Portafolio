import PresentationCard from '../components/presentation_card.js'
import GetProyects from './get_proyects.js'
const Router =()=>{
    let {hash} = location

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
    }else{
        switch (hash) {
            case '#/cv':
                $mainHome.innerHTML += `<h1>CV</h1>`
            break;

            case '#/sobre':
                $mainHome.innerHTML += `<h1>Sobre</h1>`
            break;

            case '#/blog':
                $mainHome.innerHTML += `<h1>Blog</h1>`
            break;
        
            default:
            break;
        }
    }

    


}
export default Router