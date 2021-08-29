import Header from './app-js/components/header.js'
import PresentationCard from './app-js/components/presentation_card.js'
import GetProyects from './app-js/helpers/get_proyects.js'
const App =()=>{
    const $root = document.getElementById('root')
    const $Fragment = document.createDocumentFragment()
    const $mainHome = document.createElement('section')
    const $ProyectsBox = document.createElement('section')
    const $SkillsBox = document.createElement('section')

    $mainHome.classList.add('main__box')

    $Fragment.appendChild(Header())
    $mainHome.appendChild(PresentationCard())
    $ProyectsBox.appendChild(GetProyects().Proyects)
    $mainHome.appendChild($ProyectsBox)
    $SkillsBox.appendChild(GetProyects().Skills)
    $mainHome.appendChild($SkillsBox)
    $Fragment.appendChild($mainHome)
    $root.appendChild($Fragment)
}
export default App