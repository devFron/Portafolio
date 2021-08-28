import Header from './app-js/components/header.js'
const App =()=>{
    const $root = document.getElementById('root')
    const $Fragment = document.createDocumentFragment()




    
    $Fragment.appendChild(Header())
    $root.appendChild($Fragment)
}
export default App