import MenuSkill from "./Menu_skill.js"

const FyloSkill =()=>{
    const $Fylo = document.createElement('section')
    let $pageLink = 'https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5'
    $Fylo.classList.add('fylo')
    $Fylo.appendChild(MenuSkill($pageLink))
    return $Fylo
}
export default FyloSkill