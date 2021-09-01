import MenuSkill from "./Menu_skill.js"
const HunddleSkill = ()=>{
    const $Hunddle = document.createElement('section')
    let $pageLink = 'https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2'
    $Hunddle.classList.add('hunddle__box')
    $Hunddle.appendChild(MenuSkill($pageLink))
    return $Hunddle
}
export default HunddleSkill