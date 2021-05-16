const ShareSocialMedia = ( )=>{
    const $shareBar = document.querySelector('.article__user__share__section')

    document.addEventListener('click',(e)=>{

        if(e.target.matches('.article__user__share__icon__share')){
            $shareBar.classList.toggle('article__user__share__section__enabled')
        }else if (e.target.matches('.article__user__share__section__social-media__icon__share')) {
            $shareBar.classList.remove('article__user__share__section__enabled')
        }
    })
}
document.addEventListener('DOMContentLoaded',(e)=> ShareSocialMedia())