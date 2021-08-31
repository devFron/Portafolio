import Loader from './app-js/components/loader.js';
import Header from './app-js/components/header.js'
import Router from './app-js/helpers/router.js'
const App =async()=>{

    const $root = document.getElementById('root')
    $root.innerHTML = ''
    const $Fragment = document.createDocumentFragment()
    const $mainHome = document.createElement('section')
    

    $mainHome.classList.add('main__box')

    $root.appendChild(Loader())
    $Fragment.appendChild(Header())
    $Fragment.appendChild($mainHome)
    $root.appendChild($Fragment)
    await Router()
    document.querySelector('.loader-box').style.display = 'none'
}
export default App