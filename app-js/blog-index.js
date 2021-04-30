// import { ImportPost } from "./import-post.js";
import { Menu } from "./main-menu.js";
document.addEventListener('DOMContentLoaded',(e)=>{
    // ImportPost()
    Menu()

    document.addEventListener('click',(e)=>{
        if(e.target.matches('.post__image')){
            window.open(`${e.target.dataset.link}`)
        }
    })
    let $body = document.querySelector('body')
    let $header = document.querySelector('#header')
    let $menuLink = document.querySelectorAll('.menu__link')
    let $menuOptions = document.querySelector('.menu-options')
    let $menuOptionsLink = document.querySelectorAll('.menu-options__menu__link')
    let $menuOptionsItem = document.querySelectorAll('.menu-options__menu__item')
    let $headerTitle = document.querySelector('.home__link')
    let $title = document.querySelector('.title__blog')
    if(localStorage.getItem('dark-mode-index')=== 'true'){
        $body.classList.add('body__dark')
        $header.classList.add('header__dark')
        $menuLink[0].classList.add('menu__link__dark')
        $menuLink[1].classList.add('menu__link__dark')
        $menuLink[2].classList.add('menu__link__dark')
        $menuLink[3].classList.add('menu__link__dark')
        $menuOptions.classList.add('menu-options__dark')
        $menuOptionsItem.forEach(el => {
            el.classList.add('menu-options__menu__item__dark')
        });
        $menuOptionsLink.forEach(el => {
            el.classList.add('menu-options__menu__link__dark')
        });
        $headerTitle.classList.add('home__link__dark')
        $title.classList.add('title__blog__dark')
    }else{
        $body.classList.remove('body__dark')
        $header.classList.remove('header__dark')
        $menuLink[0].classList.remove('menu__link__dark')
        $menuLink[1].classList.remove('menu__link__dark')
        $menuLink[2].classList.add('menu__link__dark')
        $menuLink[3].classList.remove('menu__link__dark')
        $menuOptions.classList.remove('menu-options__dark')
        $menuOptionsItem.forEach(el => {
            el.classList.remove('menu-options__menu__item__dark')
        });
        $menuOptionsLink.forEach(el => {
            el.classList.remove('menu-options__menu__link__dark')
        });
        $headerTitle.classList.remove('home__link__dark')
        $title.classList.remove('title__blog__dark')
    }
})