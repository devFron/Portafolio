const MenuSkill = ($pageLink)=>{
    const $menuSkill = document.createElement('div')
    $menuSkill.classList.add('menu-skill')
    $menuSkill.innerHTML=`
    <div class="menu-skill-menu" onclick="this.classList.toggle('open')">
        <a href="${$pageLink}" class="button-skill" target="_blank"><img src="public/fronendmentor-icon.png" alt="image ${$pageLink} " class="frontmentor-icon"></a>
        <div class="button-skill"></div>
        <a href="#/inicio" class="button-skill"><i class="icon-menu-skill fas fa-home"></i></a>
    </div>
    `
    return $menuSkill
}
export default MenuSkill