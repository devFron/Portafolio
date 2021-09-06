import MenuSkill from "./Menu_skill.js"

const FyloDark = ()=>{
    let pageLink = 'https://www.frontendmentor.io/challenges/fylo-dark-theme-landing-page-5ca5f2d21e82137ec91a50fd'
    const $FyloDark = document.createElement('section')
    $FyloDark.classList.add('fylo-dark')
    const $FyloDarkHeader = document.createElement('header')
    const $FyloDarkFiles = document.createElement('section')
    const $FyloDarkBenefits = document.createElement('section')
    const $FyloDarkProductive = document.createElement('section')
    const $FyloDarkComents = document.createElement('section')
    const $FyloDarkFooter = document.createElement('footer')

    $FyloDarkHeader.classList.add('fylo-dark__header')
    $FyloDarkFiles.classList.add('fylo-dark__files')
    $FyloDarkBenefits.classList.add('fylo-dark__benefits')
    $FyloDarkProductive.classList.add('fylo-dark__productives')
    $FyloDarkComents.classList.add('fylo-dark__coments')
    $FyloDarkFooter.classList.add('fylo-dark__footer')


    $FyloDarkHeader.innerHTML= `
        <img src="public/resources-skills/fylo-dark/logo.svg" alt="logo fylo dark-theme" class="fylo-dark__header__logo">
        <nav>
            <ul class="menu">
                <li class="menu__item"><a href="#" class="menu__link link-inactive">Features</a></li>
                <li class="menu__item"><a href="#" class="menu__link link-inactive">Team</a></li>
                <li class="menu__item"><a href="#" class="menu__link link-inactive">Sign in</a></li>
            </ul>
        </nav>
    `
    $FyloDarkFiles.innerHTML = `
        <img src="public/resources-skills/fylo-dark/illustration-intro.png" alt="fylo files logo" class="fylo-dark__files__logo">
        <section class="fylo-dark__files__description-box">
            <p class="fylo-dark__files__title">All your files in one secure location, accesible anywhere</p>
            <p class="fylo-dark__files__description">
                Fylo stores all your most importat files in one secure lcoation. Access them whrever you need,
                share and collaborate with friends family, and co-workers.
            </p>
            <button class="fylo-dark__files__button">Get Started</button>
        </section>
    `
    const Benefits = [
        {
            image:'public/resources-skills/fylo-dark/icon-access-anywhere.svg',
            title:'Access your files, anywhere',
            description:'The ability to use a smartphone, tablet, or computer to access your acconunt means your files follow you everywhere.',
        },
        {
            image:'public/resources-skills/fylo-dark/icon-security.svg',
            title:'Access your files, anywhere',
            description:'The ability to use a smartphone, tablet, or computer to access your acconunt means your files follow you everywhere.',
        },
        {
            image:'public/resources-skills/fylo-dark/icon-collaboration.svg',
            title:'Access your files, anywhere',
            description:'The ability to use a smartphone, tablet, or computer to access your acconunt means your files follow you everywhere.',
        },
        {
            image:'public/resources-skills/fylo-dark/icon-any-file.svg',
            title:'Access your files, anywhere',
            description:'The ability to use a smartphone, tablet, or computer to access your acconunt means your files follow you everywhere.',
        }
    ]

    $FyloDarkBenefits.innerHTML = ''
    Benefits.forEach(el => {
        $FyloDarkBenefits.innerHTML += `
            <section class="fylo-dark__benefitie">
                <img src="${el.image}" alt="benefite-logo" class="fylo-dark__benefitie__image">
                <p class="fylo-dark__benefitie__title">${el.title} </p>
                <p class="fylo-dark__benefitie__description">${el.description} </p>
            </section>
        `
    });

    $FyloDarkProductive.innerHTML = `
        <img src="public/resources-skills/fylo-dark/illustration-stay-productive.png" alt="productive-image" class="fylo-dark__productive__image">
        <section class="fylo-dark__productive__description-box">
            <p class="fylo-dark__productive__title">Stay productive, wherever you are</p>

            <p class="fylo-dark__productive__description">Never let location be an issue when accesing your files.
                Fylo has you covered for all of your file storage needs.
            </p>
            <p class="fylo-dark__productive__description">Securely share files and folders with friends, family and collagues for live collaborations.
                No email attachments requierd.
            </p>
            <a href="#" class="link-inactive fylo-dark__productive__see">See how Fylo works</a>
        </section>

    `
    let users = [
        {
            description:'Fylo has improve our tema productivity by an order fo magnitude.Since making the swich our tema has become a well-oiled collaboration machine.',
            image_user:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name_user:'Satish Patel',
            profession_user:'Founder & CEO, Hunddle',
        },
        {
            description:'Fylo has improve our tema productivity by an order fo magnitude.Since making the swich our tema has become a well-oiled collaboration machine.',
            image_user:'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name_user:'Bruce Mckenize',
            profession_user:'Founder & CEO, Hunddle',
        },
        {
            description:'Fylo has improve our tema productivity by an order fo magnitude.Since making the swich our tema has become a well-oiled collaboration machine.',
            image_user:'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
            name_user:'Iva Boyd',
            profession_user:'Founder & CEO, Hunddle',
        }
    ]
    $FyloDarkComents.innerHTML = ''
    users.forEach(el => {
        $FyloDarkComents.innerHTML += `
            <article class="fylo-dark__comment__user">
                <p class="fylo-dark__comment__text">${el.description} </p>
                <div class="fylo-dark__comment__user__info">
                    <img src="${el.image_user}" alt="user-image-personal" class="fylo-dark__comment__user__image">
                    <div class="fylo-dark__comment__user__data">
                        <p class="fylo-dark__comment__user__name">${el.name_user}</p>
                        <p class="fylo-dark__comment__user__profession">${el.profession_user}</p>
                    </div>
                </div>
            </article>
        `
    });
    $FyloDarkFooter.innerHTML =`
        <section class="fylo-dark__footer__contact">
            <p class="fylo-dark__footer__contact__title">Get early access today</p>
            <p class="fylo-dark__footer__contact__description">It only takes a minute to sign up and our free startet tier is extremely generous,if you have any question, our support team would be happy to help you.</p>
            <form action="" id="form-fylo-dark">
                <input type="text" name="" id="" placeholder="email@example.com">
                <button>Get Started For Free</button>
            </form>
        </section>
        <section class="fylo-dark__footer__info__box">
            <img src="public/resources-skills/fylo-dark/logo.svg" alt="logo" class="fylo-dark__footer__info__logo">
            <ul class="fylo-dark__footer__info">
                <li class="fylo-dark__footer__info__item">
                    <ul class="fylo-dark__footer__info__item__contact">
                        <li class="fylo-dark__footer__info__item__contact__item">
                            <i class="fylo-dark__footer__info__item__contact__item__icon fas fa-map-marker-alt"></i>
                            Lorem ipsum dolor sit amet, consecutetur adipiscing elit, sed do eromod tempor incidudunt ul labore et dolore magna aliqua
                        </li>
                        <li class="fylo-dark__footer__info__item__contact__item"><i class="fylo-dark__footer__info__item__contact__item__icon fas fa-phone"></i> +1-543-123-4567</li>
                        <li class="fylo-dark__footer__info__item__contact__item"><i class="fylo-dark__footer__info__item__contact__item__icon fas fa-envelope-square"></i> example@fylo.com</li>
                    </ul>
                </li>
                <li class="fylo-dark__footer__info__item">
                    <ul class="fylo-dark__footer__info__item__items">
                        <li class="fylo-dark__footer__info__item__items__item">About Us</li>
                        <li class="fylo-dark__footer__info__item__items__item">Jobs</li>
                        <li class="fylo-dark__footer__info__item__items__item">Press</li>
                        <li class="fylo-dark__footer__info__item__items__item">Blog</li>
                    </ul>
                    <ul class="fylo-dark__footer__info__item__items">
                        <li class="fylo-dark__footer__info__item__items__item">Contact Us</li>
                        <li class="fylo-dark__footer__info__item__items__item">Terms</li>
                        <li class="fylo-dark__footer__info__item__items__item">Privacy</li>
                    </ul>
                </li>
                <li class="fylo-dark__footer__info__item">
                    <ul class="fylo-dark__footer__info__social">
                        <li class="fylo-dark__footer__info__social__item"><i class="fab fa-facebook"></i></li>
                        <li class="fylo-dark__footer__info__social__item"><i class="fab fa-twitter"></i></li>
                        <li class="fylo-dark__footer__info__social__item"><i class="fab fa-instagram"></i></li>
                    </ul>
                </li>
            </ul>
        </section>
    `
    $FyloDark.appendChild($FyloDarkHeader)
    $FyloDark.appendChild($FyloDarkFiles)
    $FyloDark.appendChild($FyloDarkBenefits)
    $FyloDark.appendChild($FyloDarkProductive)
    $FyloDark.appendChild($FyloDarkComents)
    $FyloDark.appendChild(MenuSkill(pageLink))
    $FyloDark.appendChild($FyloDarkFooter)

    return $FyloDark
}
export default FyloDark