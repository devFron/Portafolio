import MenuSkill from "./Menu_skill.js"

const FyloSkill =()=>{
    const $Fylo = document.createElement('section')
    let $pageLink = 'https://www.frontendmentor.io/challenges/fylo-landing-page-with-two-column-layout-5ca5ef041e82137ec91a50f5'
    $Fylo.classList.add('fylo')
    const $FyloSee = document.createElement('section')
    $FyloSee.innerHTML = `

        <header class="fylo__header">
            <img src="public/resources-skills/fylo/logo.svg" alt="Fylo Logo" class="fylo__logo">
            <nav>
                <ul class="fylo__menu">
                    <li class="fylo__menu__item"><a href="#" class="fylo__menu__link link-inactive ">Features</a></li>
                    <li class="fylo__menu__item"><a href="#" class="fylo__menu__link link-inactive ">Team</a></li>
                    <li class="fylo__menu__item"><a href="#" class="fylo__menu__link link-inactive ">Sign In</a></li>
                </ul>
            </nav>
        </header>
        <section class="fylo__files">
            <img src="public/resources-skills/fylo/illustration-1.svg" alt="files image" class="fylo__files__image">
            <article class="fylo__files__description__box">
                <p class="fylo__files__description"__title>
                    All your files in on secure location, accessible anywhere.
                </p>
                <p class="fylo__files__description__description">
                    Fylo stores your most impotant files  in one secure location. Access them where you nedd,
                    share and collaborate with friends, family, and co-workers
                </p>
                <form action="" class="form-fylo">
                    <input type="text" name="" class="fylo__input" placeholder="Enter your email" id="fylo-input">
                    <button class="fylo__button__form">Get Started</button>
                </form>
            </article>
        </section>
        <section class="fylo__stay">
            <img src="public/resources-skills/fylo/illustration-2.svg" alt="" class="fylo__stay__image">
            <article class="fylo__stay__description__box">
                <p class="fylo__stay__description__title">Stay productive, wherever you are</p>
                <p class="fylo__stay__description__description">
                    Never let locations be an issue when accessing tour files. Fylo has you covered for all of your file
                    storage needs.
                </p>
                <p class="fylo__stay__description__description">
                    Securely share files and folders with friends, family and collegues for live collaboration.No email attachments required!.
                </p>
                <a href="#" class="link-inactive">See how Fylo works <i class="fas fa-arrow-alt-circle-right fylo__see__icon"></i></a>
                <div class="fylo__stay__user">
                    <img src="public/resources-skills/fylo/icon-quotes.svg" alt="fylo-user-image" class="fylo__stay__quote">
                    <p class="fylo__stay__user__description">Fylo has inproved our team productivity by an order
                        of magnitude. Since making the switch our team has become a well-oiled collaboration machine.
                    </p>
                    <div class="fylo__stay__user__info">
                        <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="person-image" class="fylo__stay__user__info__image">
                        <div class="fylo__stay__user__infor__personal">
                            <p class="fylo__stay__user__name">Kyle Burton</p>
                            <p class="fylo__stay__user__profesion">Founder & CEO, Hunddle</p>
                        </div>
                    </div>
                </div>
            </article>
        </section>
        <section class="fylo__get">
            <p class="fylo__get__title">Get early access today</p>
            <p class="fylo__get__description">
                I only takes a minute to sign up and our fre starter tier is extremely generous if you have any question,
                our support team would be happy to help you.
            </p>
            <form action="" class="fylo__form__get">
                <input type="text" name="" placeholder="email@example.com" id="">
                <button>Get Sterted Fro Free</button>
            </form>
        </section>
        <footer class="fylo__footer">
            <img src="public/resources-skills/fylo/logo.svg" alt="logo" class="fylo__footer__logo">
            <ul class="fylo__footer__menu">
                <li class="fylo__footer__menu__item">
                    <ul class="fylo__footer__contact">
                        <li class="fylo__footer__contact__item"><i class="fas fa-phone"></i> <span class="">Phone:+1-53-123-4567</span></li>
                        <li class="fylo__footer__contact__item"><i class="fas fa-phone"></i> <span class="">example@fylo.com</span></li>
                    </ul>
                </li>
                <li class="fylo__footer__menu__item">
                    <ul class="fylo__footer__links">
                        <li class="fylo__footer__links">About Us</li>
                        <li class="fylo__footer__links"><a href="#" class="link-inactive">Jobs</a></li>
                        <li class="fylo__footer__links"><a href="#" class="link-inactive">Press</a></li>
                        <li class="fylo__footer__links"><a href="#" class="link-inactive">Blog</a></li>
                    </ul>
                    <ul class="fylo__footer__links">
                        <li class="fylo__footer__links">Contact Us</li>
                        <li class="fylo__footer__links"><a href="#" class="link-inactive">Terms</a></li>
                        <li class="fylo__footer__links"><a href="#" class="link-inactive">Privacy</a></li>
                    </ul>
                </li>
                <li class="fylo__footer__menu__item">
                    <ul class="fylo__footer__social">
                        <i class="fylo__footer__social__icon fab fa-facebook"></i>
                        <i class="fylo__footer__social__icon fab fa-twitter"></i>
                        <i class="fylo__footer__social__icon fab fa-instagram"></i>
                    </ul>
                </li>
            </ul>
        </footer>
    `
    $Fylo.appendChild($FyloSee)
    $Fylo.appendChild(MenuSkill($pageLink))
    return $Fylo
}
export default FyloSkill