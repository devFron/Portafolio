import MenuSkill from "./Menu_skill.js"
const HunddleSkill = ()=>{
    const $Hunddle = document.createElement('section')
    let $pageLink = 'https://www.frontendmentor.io/challenges/huddle-landing-page-with-curved-sections-5ca5ecd01e82137ec91a50f2'
    $Hunddle.classList.add('hunddle__box')
    const $header = document.createElement('section')
    const $welcomeSection = document.createElement('section')
    const $followers = document.createElement('section')
    const $myGrid = document.createElement('section')
    const $readyBuild = document.createElement('section')
    const $footer = document.createElement('section')

    $header.classList.add('hunddle__header')
    $welcomeSection.classList.add('hunddle__welcome')
    $followers.classList.add('hunddle__followers')
    $myGrid.classList.add('hunddle__grid')
    $readyBuild.classList.add('hunddle__build')
    $footer.classList.add('hunddle__footer')

    $header.innerHTML = `
        <img src="public/resources-skills/hunddle/logo.svg" alt="image-logo" class="hunddle__image">
        <button class="hunddle__header__button">Try it Free</button>
    `
    $welcomeSection.innerHTML = `
        <article class="welcome__description__box">
            <p class="welcome__title">Build The Community your Fans Will Love</p>
            <p class="welcome__description">Hunddle re-imagines the way we build communities. You have a voice, but so does your audince.
                Create connections with your users as you engage in genuine discussion.
            </p>
            <button class="welcome__button">Get Started Fro Free</button>
        </article>
        <img src="public/resources-skills/hunddle/screen-mockups.svg" alt="image welcome" class="welcome__image">
    `
    $followers.innerHTML = ''

    let followersData = [
        {
            image:'public/resources-skills/hunddle/icon-communities.svg',
            number_follow:'1.4k+',
            follow_description:'Communities Formed',
        },
        {
            image:'public/resources-skills/hunddle/icon-messages.svg',
            number_follow:'2.7m+',
            follow_description:' Message Sent',
        }
    ]

    followersData.forEach(el => {
        $followers.innerHTML += `
            <article class="followers__follow">
                <img src="${el.image}" alt="" class="followers__follow__i">
                <p class="followers__follow__number">${el.number_follow}</p>
                <p class="follower__follow__description">${el.follow_description}</p>
            </article>
        `
    });

    let myGridData = [
        {
            image:'public/resources-skills/hunddle/illustration-grow-together.svg',
            title:'Grow Together',
            description:'Generate meningful discussions with your audience and build a strong, loyal community Think of the insigtful conversations you miss out on with a feedback form.',
            offset:'left'
        },
        {
            image:'public/resources-skills/hunddle/illustration-flowing-conversation.svg',
            title:'Flowing Conversations',
            description:`
            you wouldn't paginate a conversation in real life, so why do it onlin?our threads have just-in-time loading for a more natural flow.
            `,
            offset:'right'
        },
        {
            image:'public/resources-skills/hunddle/illustration-your-users.svg',
            title:'Your Users',
            description:`It takes no time at all to integrate Hunddle with your app's authentication solution.This means, once signed in to your app, your users can start catting immediately.` ,
            offset:'left'
        }
    ]

    $myGrid.innerHTML = ''
    myGridData.forEach(el => {
        $myGrid.innerHTML += `
            <article class="grid__item grid__offset__${el.offset}">
                <img src="${el.image}" alt="grid-image" class="grid__item__image">
                <div class="grid__item__description__box">
                    <p class="grid__item__title">${el.title}</p>
                    <p class="grid__item__description">${el.description}</p>
                </div>
            </article>
        `
    });

    $readyBuild.innerHTML = `
        <p class="build__title">Ready To Build Your Community?</p>
        <button class="build__button">Get Started For Free</button>
    `
    $footer.innerHTML = `
        <div style="height: 150px; overflow: hidden;" >
            <svg viewBox="0 0 500 150" preserveAspectRatio="none" style="height: 100%; width: 100%;">
                <path d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style="stroke: none; fill:hsl(192, 100%, 9%);">
                </path>
            </svg>
        </div>
        <section class="footer__formuario">
            <p class="footer__title">NEWSLETTER</p>
            <p class="footer__description">To recieve tips on how to grow your community, sign up to our weekly
                newsletter. We'll never send you spam or pass on your email address
            </p>
            <form action="" class="footer__form__hunddle">
                <input type="text" name="henddlemail" id="" class="henddle-input-mail">
                <button class="henddle-button-mail">Suscribe</button>
            </form>
        </section>

        <section class="footer__contact">
            <img src="public/resources-skills/hunddle/logo.svg" alt="logo__image" class="footer__contact__">
            <p class="fotoer__contact__description">
                Lorem ipsum dolor sit amet, csecteur adipiscing elit. Mauris nulla quam, hendrerit 
                laciania vetibulum a, ultrices quis sem.  
            </p>
            <div class="footer__contact__info">
                <div class="footer__contact__description">
                    <p class="footer__contact__description__item">
                        <i class="fas fa-phone"></i>
                        Phone:+1-543-123-4567
                    </p>
                    <p class="footer__contact__description__item">
                        <i class="fas fa-development"></i>
                        example@company.com
                    </p>
                </div>
                <div class="footer__contact__info__social__mei">
                    <i class="social__media__icon fab fa-facebook"></i>
                    <i class="social__media__icon fab fa-instagram"></i>
                    <i class="social__media__icon fab fa-twitter"></i>
                </div>
            </div>
        </section>

    `
    $Hunddle.appendChild($header)
    $Hunddle.appendChild($welcomeSection)
    $Hunddle.appendChild($followers)
    $Hunddle.appendChild($myGrid)
    $Hunddle.appendChild($readyBuild)
    $Hunddle.appendChild($footer)
    $Hunddle.appendChild(MenuSkill($pageLink))
    return $Hunddle
}
export default HunddleSkill