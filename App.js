import Header from './app-js/components/header.js'
import PresentationCard from './app-js/components/presentation_card.js'
import GetProyects from './app-js/helpers/get_proyects.js'
const App =()=>{
    const $root = document.getElementById('root')
    const $Fragment = document.createDocumentFragment()
    const $ProyectsBox = document.createElement('section')



    $Fragment.appendChild(Header())
    $Fragment.appendChild(PresentationCard())
    $ProyectsBox.appendChild(GetProyects())
    $Fragment.appendChild($ProyectsBox)
    $root.appendChild($Fragment)
}
export default App