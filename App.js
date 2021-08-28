import Header from './app-js/components/header.js'
import PresentationCard from './app-js/components/presentation_card.js'
const App =()=>{
    const $root = document.getElementById('root')
    const $Fragment = document.createDocumentFragment()




    $Fragment.appendChild(Header())
    $Fragment.appendChild(PresentationCard())
    $root.appendChild($Fragment)
}
export default App