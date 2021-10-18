import Loader from './app-js/components/loader.js';
import Router from './app-js/helpers/router.js'
const App =async(countires)=>{
    const $root = document.getElementById('root')
    $root.innerHTML = ''
    const $DynamicContent = document.createElement('section')
    const $Loader = document.createElement('div')
    $DynamicContent.id ='dynamic-content'
    $Loader.appendChild(Loader())
    $root.appendChild($DynamicContent)
    $root.appendChild($Loader)
    await Router(countires)
    if(location.href.indexOf('#/skill/') === -1) $root.removeChild($Loader)
}
export default App