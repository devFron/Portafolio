import MenuSkill from "./Menu_skill.js"
const BookmarkSkill =()=>{
    const BookMark = document.createElement('section')
    const $Header = document.createElement('header')
    const $HeaderLogo = document.createElement('img')
    const $HeaderNav = document.createElement('nav')
    const $HeaderNavIcon = document.createElement('i')
    const $HeaderMenu = document.createElement('ul')
    const HeaderMenuItems = [
        'FEATURES',
        'PRINCING',
        'CONTACT',
        'LOGIN'
    ]
    HeaderMenuItems.forEach((el)=>{
        const $HeaderMenuItems = document.createElement('li')
        const $HeaderMenuItemsText = document.createElement('p')
        $HeaderMenuItemsText.textContent = el
        $HeaderMenuItems.appendChild($HeaderMenuItemsText)
        $HeaderMenu.appendChild($HeaderMenuItems)
    })
    const $HeaderMenuCloseIcon = document.createElement('i')
    const $Manger = document.createElement('section')
    const $MangerImage = document.createElement('img')
    const $MangerTitle = document.createElement('p')
    const $MangerDescription = document.createElement('p')
    const $MangerButtonBox = document.createElement('article')
    const $MangerButtonGetChrome = document.createElement('button')
    const $MangerButtonGetFirefox = document.createElement('button')
    const $Features = document.createElement('section')
    const $FeaturesTitle = document.createElement('p')
    const $FeaturesDescription = document.createElement('p')
    const $FeaturesMenu = document.createElement('ul')
    const FeaturesItems = {
        oneFeature:{
            marker:'Simple BookMarking',
            title:'Bookmark in one Click',
            description:'Oragnize your bookmarks howerver you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
            img:'public/resources-skills/bookmark/illustration-features-tab-1.svg'
        },
        twoFeature:{
            marker:'Sppedy Searching',
            title:'Intelligent search',
            description:'Our powerful search features will help you find saved sites in no time at all. No need to trawi through all of your bookmarks.',
            img:'public/resources-skills/bookmark/illustration-features-tab-2.svg'
        },
        ThreeFeature:{
            marker:'Easy Sharing',
            title:'Share your bookmarks',
            description:'Easily share your bookmarks and collection with others.Create a shareable link that you can send at the click of a button.',
            img:'public/resources-skills/bookmark/illustration-features-tab-3.svg'
        }
    }
    Object.keys(FeaturesItems).forEach((el,i)=>{
        const $FeaturesMenuItemText = document.createElement('li')
        const $FeaturesMenuItem = document.createElement('p')
        $FeaturesMenuItem.dataset.img = FeaturesItems[el].img
        $FeaturesMenuItem.dataset.title = FeaturesItems[el].title
        $FeaturesMenuItem.dataset.description = FeaturesItems[el].description
        $FeaturesMenuItem.textContent = FeaturesItems[el].marker
        $FeaturesMenuItem.classList.add('features__menu__item')
        $FeaturesMenuItemText.classList.add('features__menu__father')
        $FeaturesMenuItemText.appendChild($FeaturesMenuItem)
        $FeaturesMenuItemText.dataset.item = `item-change${i}`
        $FeaturesMenu.appendChild($FeaturesMenuItemText)
    })
    const $FeaturesItemChange = document.createElement('section')
    const $FeaturesItemChangeImage = document.createElement('img')
    const $FeaturesItemChangeTitle = document.createElement('p')
    const $FeaturesItemChangeDescription = document.createElement('p')
    const $Download = document.createElement('section')
    const Browsers = {
        chrome:{
            name:'Add to Chrome',
            version:'Minimum version 62',
            image:'public/resources-skills/bookmark/logo-chrome.svg'
        },
        firefox:{
            name:'Add to Firefox',
            version:'Minimum version 55',
            image:'public/resources-skills/bookmark/logo-firefox.svg'
        },
        opera:{
            name:'Add to Opera',
            version:'Minimum version 46',
            image:'public/resources-skills/bookmark/logo-opera.svg'
        }
    }
    Object.keys(Browsers).forEach(el => {
        const $DownloadItems = document.createElement('article')
        const $DownloadItemsImage = document.createElement('img')
        const $DownloadItemsTitle = document.createElement('p')
        const $DownloadItemsVersion = document.createElement('p')
        const $DownloadItemsLine = document.createElement('img')
        const $DownloadItemsButton = document.createElement('button')
        $DownloadItemsTitle.textContent = Browsers[el].name
        $DownloadItemsVersion.textContent = Browsers[el].version
        $DownloadItemsImage.src= Browsers[el].image
        $DownloadItemsLine.src= 'public/resources-skills/bookmark/bg-dots.svg'
        $DownloadItemsButton.textContent = 'Add & Install Extension'
        $DownloadItems.classList.add('download__item')
        $DownloadItemsImage.classList.add('download__item__image')
        $DownloadItemsTitle.classList.add('download__item__title')
        $DownloadItemsVersion.classList.add('download__item__version')
        $DownloadItemsLine.classList.add('download__item__line')
        $DownloadItemsButton.classList.add('download__item__button')
        $DownloadItems.appendChild($DownloadItemsImage)
        $DownloadItems.appendChild($DownloadItemsTitle)
        $DownloadItems.appendChild($DownloadItemsVersion)
        $DownloadItems.appendChild($DownloadItemsLine)
        $DownloadItems.appendChild($DownloadItemsButton)
        $Download.appendChild($DownloadItems)
    });
    const $Questions = document.createElement('section')
    const $QuestionsTitle = document.createElement('p')
    const $QuestionsDescription = document.createElement('p')
    const $QuestionsBox = document.createElement('ul')
    const $QuestionsButton = document.createElement('button')
    const Question ={
        one:{
            title:'What is Bookmark',
            description:`
                Vivamus luctus eros aliquet convallis ultrices,Mauris augue massa,
                ultirces non ligula. Suspendisse imprediet.
                Vivamus luctus eros aliquet convallis ultrices. Mauris augue massa, ultirces non ligula.
                Suspendisse impredie tVivamus luctus eros aliquet convallis ultrices.
                Mauris augue mssa, ultrices non ligula Suspendisse imprediet.
            `
        },
        two:{
            title:'How can I resquiest a new brower?',
            description:`
                Vivamus luctus eros aliquet convallis ultrices,Mauris augue massa,
                ultirces non ligula. Suspendisse imprediet.
                Vivamus luctus eros aliquet convallis ultrices. Mauris augue massa, ultirces non ligula.
                Suspendisse impredie tVivamus luctus eros aliquet convallis ultrices.
                Mauris augue mssa, ultrices non ligula Suspendisse imprediet.
            `
        },
        three:{
            title:'Is there a mobile app?',
            description:`
                Vivamus luctus eros aliquet convallis ultrices,Mauris augue massa,
                ultirces non ligula. Suspendisse imprediet.
                Vivamus luctus eros aliquet convallis ultrices. Mauris augue massa, ultirces non ligula.
                Suspendisse impredie tVivamus luctus eros aliquet convallis ultrices.
                Mauris augue mssa, ultrices non ligula Suspendisse imprediet.
            `
        },
        four:{
            title:'What about other chromium browser?',
            description:`
                Vivamus luctus eros aliquet convallis ultrices,Mauris augue massa,
                ultirces non ligula. Suspendisse imprediet.
                Vivamus luctus eros aliquet convallis ultrices. Mauris augue massa, ultirces non ligula.
                Suspendisse impredie tVivamus luctus eros aliquet convallis ultrices.
                Mauris augue mssa, ultrices non ligula Suspendisse imprediet.
            `
        }
    }
    Object.keys(Question).forEach((el)=>{
        const $QuestionsItem = document.createElement('li')
        const $QuestionsItemTitle = document.createElement('p')
        const $QuestionsItemIcon = document.createElement('i')
        const $QuestionsItemDescription = document.createElement('p')
        const $QuestionsItemTop = document.createElement('span')
        $QuestionsItemTitle.textContent = Question[el].title
        $QuestionsItemDescription.textContent = Question[el].description
        $QuestionsItem.classList.add('question__item')
        $QuestionsItemTitle.classList.add('question__item__title')
        $QuestionsItemIcon.classList.add('question__item__icon')
        $QuestionsItemDescription.classList.add('question__item__description')
        $QuestionsItemIcon.classList.add('fas','fa-angle-down','arrow-question')
        $QuestionsItemTop.appendChild($QuestionsItemTitle)
        $QuestionsItemTop.appendChild($QuestionsItemIcon)
        $QuestionsItem.appendChild($QuestionsItemTop)
        $QuestionsItem.appendChild($QuestionsItemDescription)
        $QuestionsBox.appendChild($QuestionsItem)
    })
    const $Footer = document.createElement('footer')
    const $Formulario = document.createElement('section')
    const $FormularioJoined =document.createElement('p')
    const $FormularioTitle =document.createElement('p')
    const $FormularioForm =document.createElement('form')
    const $FormularioFormInputMessage =document.createElement('article')
    const $FormularioFormInput =document.createElement('input')
    const $FormularioFormButton =document.createElement('button')
    const $Info = document.createElement('section')
    const $InfoImage = document.createElement('img')
    const $InfoMenu = document.createElement('ul')
    const InfoItem = ['FEATURES','PRINCING','CONTACT']
    const $InfoSocialMedia = document.createElement('li')
    InfoItem.forEach(el=> {
        const $InfoItem = document.createElement('li')
        $InfoItem.innerHTML = `<span>${el}</span`
        $InfoItem.classList.add('footer__bookmark__menu')
        $InfoMenu.appendChild($InfoItem)
    })
    $InfoSocialMedia.innerHTML = `
        <span><i class="fab fa-facebook-square" ></i></span
        <span><i class="fab fa-twitter-square"></i></span
    `
    $HeaderLogo.src="public/resources-skills/bookmark/logo-bookmark.svg"
    $HeaderLogo.alt="logo-bookmark"
    $MangerImage.src="public/resources-skills/bookmark/illustration-hero.svg"
    $MangerImage.alt="illustration-hero"
    $MangerTitle.textContent = 'A Simple Bookmark Manager'
    $MangerDescription.textContent = 'A clean and simple interface to organizate your favourite websites. Open a new browser tab and see your site load instantly. Try it for free.'
    $MangerButtonGetChrome.textContent = 'Get it on Chrome'
    $MangerButtonGetFirefox.textContent = 'Get it on Firefox'
    $FeaturesTitle.textContent = 'Features'
    $FeaturesDescription.textContent = 'Our aim is to make it quick and easy for you to access your favourite websites. Your bookmasrks async between your devices so you can access them on the go.'
    $FeaturesItemChangeImage.src = 'public/resources-skills/bookmark/illustration-features-tab-1.svg'
    $FeaturesItemChangeImage.alt = 'illustration-features-tab-1'
    $FeaturesItemChangeTitle.textContent = 'Bookmark in one click'
    $FeaturesItemChangeDescription.textContent = 'Oragnize your bookmarks howerver you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.'
    $QuestionsTitle.textContent = 'Frequently Asked Quiestions'
    $QuestionsDescription.textContent = 'Here are some of our FAQs. If you have any other quiestions you´d like aswered plase feel free to email us.'
    $QuestionsButton.textContent ='More Info'
    $FormularioJoined.textContent = '35,000+ ALREADY JOINED'
    $FormularioTitle.textContent = "Stay up-to-date with what we're doing"
    $FormularioFormInput.placeholder = 'Enter your email address'
    $FormularioFormButton.textContent = 'Contact Us'
    $InfoImage.src ='public/resources-skills/bookmark/logo-bookmark.svg' 

    $Header.classList.add('header__bookmark')
    $HeaderLogo.classList.add('header__bookmar__logo')
    $HeaderMenu.classList.add('header__bookmar__menu')
    $HeaderNavIcon.classList.add('fas','fa-bars','menu-bookmark-icon')
    $HeaderMenuCloseIcon.classList.add('fas','fa-times','menu-bookmark-icon-close')
    $Manger.classList.add('manager__bookmark')
    $MangerImage.classList.add('manager__bookmark__image')
    $MangerTitle.classList.add('manager__bookmark__title')
    $MangerDescription.classList.add('manager__bookmark__description')
    $MangerButtonBox.classList.add('manager__bookmark__box__buttons')
    $MangerButtonGetChrome.classList.add('manager__bookmark__button','button__get__chrome')
    $MangerButtonGetFirefox.classList.add('manager__bookmark__button','button__get__firefox')
    $Features.classList.add('features__bookmark')
    $FeaturesTitle.classList.add('feautres__title')
    $FeaturesDescription.classList.add('feautres__description')
    $FeaturesMenu.classList.add('feautres__menu')
    $FeaturesItemChange.classList.add('feautres__change')
    $FeaturesItemChangeImage.classList.add('feautres__change__image')
    $FeaturesItemChangeTitle.classList.add('feautres__change__title')
    $FeaturesItemChangeDescription.classList.add('feautres__change__description')
    $Download.classList.add('download__bookmark')
    $Questions.classList.add('question__bookmark')
    $QuestionsTitle.classList.add('question__title')
    $QuestionsDescription.classList.add('question__description')
    $Footer.classList.add('footer__bookmark')
    $Formulario.classList.add('footer__bookmark__formulario')
    $FormularioJoined.classList.add('footer__bookmark__joined')
    $FormularioTitle.classList.add('footer__bookmark__title')
    $FormularioFormInputMessage.classList.add('footer__bookmark__message')
    $FormularioFormInput.classList.add('footer__bookmark__input')
    $FormularioFormButton.classList.add('footer__bookmark__button')
    $Info.classList.add('footer__bookmark__info')
    $InfoImage.classList.add('footer__bookmark__info__image')
    $InfoMenu.classList.add('footer__bookmark__menu')
    $InfoSocialMedia.classList.add('footer__bookmark__info__media')

    $HeaderMenu.appendChild($HeaderMenuCloseIcon)
    $HeaderNav.appendChild($HeaderNavIcon)
    $HeaderNav.appendChild($HeaderMenu)
    $Header.appendChild($HeaderLogo)
    $Header.appendChild($HeaderNav)
    BookMark.appendChild($Header)
    // -----------------------------
    $Manger.appendChild($MangerImage)
    $Manger.appendChild($MangerTitle)
    $Manger.appendChild($MangerDescription)
    $MangerButtonBox.appendChild($MangerButtonGetChrome)
    $MangerButtonBox.appendChild($MangerButtonGetFirefox)
    $Manger.appendChild($MangerButtonBox)
    BookMark.appendChild($Manger)
    // -----------------------------
    $Features.appendChild($FeaturesTitle)
    $Features.appendChild($FeaturesDescription)
    $Features.appendChild($FeaturesMenu)
    $FeaturesItemChange.appendChild($FeaturesItemChangeImage)
    $FeaturesItemChange.appendChild($FeaturesItemChangeTitle)
    $FeaturesItemChange.appendChild($FeaturesItemChangeDescription)
    $Features.appendChild($FeaturesItemChange)
    BookMark.appendChild($Features)
    // -----------------------------
    BookMark.appendChild($Download)
    // -----------------------------
    $Questions.appendChild($QuestionsTitle)
    $Questions.appendChild($QuestionsDescription)
    $Questions.appendChild($QuestionsBox)
    $Questions.appendChild($QuestionsButton)
    BookMark.appendChild($Questions)
    // -----------------------------
    $Footer.appendChild($Formulario)
    $Formulario.appendChild($FormularioJoined)
    $Formulario.appendChild($FormularioTitle)
    $Formulario.appendChild($FormularioForm)
    $FormularioForm.appendChild($FormularioFormInputMessage)
    $FormularioFormInputMessage.appendChild($FormularioFormInput)
    $FormularioForm.appendChild($FormularioFormButton)
    $Info.appendChild($InfoImage)
    $InfoMenu.appendChild($InfoSocialMedia)
    $Info.appendChild($InfoMenu)
    $Footer.appendChild($Info)
    BookMark.appendChild($Footer)
    BookMark.appendChild(MenuSkill('https://www.frontendmentor.io/challenges/bookmark-landing-page-5d0b588a9edda32581d29158'))
    return BookMark   
}
export default BookmarkSkill
export const ChangeViewBookmark = ({img,title,description})=>{
    const $Image = document.querySelector('.feautres__change__image')
    const $Title = document.querySelector('.feautres__change__title')
    const $Description = document.querySelector('.feautres__change__description')
    $Image.src = img
    $Title.textContent = title
    $Description.textContent = description
}