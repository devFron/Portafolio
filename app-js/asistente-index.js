export const assistant = ( )=>{

    const Fragment = document.createDocumentFragment()
    let $body = document.querySelector('body')

    let $assistant = document.createElement('section')
    $assistant.classList.add('assistant')
    let $assistantBody = document.createElement('section')
    $assistantBody.classList.add('assistant__body')
    // closeIcon
    let $closedIcon = document.createElement('i')
    $closedIcon.classList.add('close__icon')
    $closedIcon.classList.add('fas')
    $closedIcon.classList.add('fa-times')
    // Slider
    let $assistantSlider = document.createElement('article')
    $assistantSlider.classList.add('assistant__slider')
    // slider - slides
    let $assistantSliderSlides = document.createElement('div')
    $assistantSliderSlides.classList.add('assistant__slider__slides')
    // slider-slide One
    let $assistantSliderSlideOne = document.createElement('div')
    $assistantSliderSlideOne.classList.add('assistant__slider__slide')
    $assistantSliderSlideOne.classList.add('slide-active')

    // slider-slide-iamge-One
    let $assistantSliderSlideImageOne = document.createElement('img')
    $assistantSliderSlideImageOne.setAttribute('src','resources/images/images-main/undraw_Hello_qnas (1).svg')
    $assistantSliderSlideImageOne.classList.add('assistan__slider__image')
    // slider-slide-text-One
    let $assistantSliderSlideTextOne = document.createElement('p')
    $assistantSliderSlideTextOne.textContent = 'Hola mi nombre es'
    $assistantSliderSlideTextOne.classList.add('assistant__slider__text')
    let $assistantSliderSlideTextSpanOne = document.createElement('span')
    $assistantSliderSlideTextSpanOne.classList.add('my-name')
    $assistantSliderSlideTextSpanOne.textContent = 'Josè Gabriel'
    // inyecciones-one
    $assistantSliderSlideOne.appendChild($assistantSliderSlideImageOne)
    $assistantSliderSlideOne.appendChild($assistantSliderSlideTextOne)
    $assistantSliderSlideTextOne.appendChild($assistantSliderSlideTextSpanOne)


    // slider-slide Two
    let $assistantSliderSlideTwo = document.createElement('div')
    $assistantSliderSlideTwo.classList.add('assistant__slider__slide')
    // slider-slide-iamge-two
    let $assistantSliderSlideImageTwo = document.createElement('img')
    $assistantSliderSlideImageTwo.setAttribute('src','resources/images/images-main/undraw_portfolio_website_lidw.svg')
    $assistantSliderSlideImageTwo.classList.add('assistan__slider__image')
    // slider-slide-text-Two
    let $assistantSliderSlideTextTwo = document.createElement('p')
    $assistantSliderSlideTextTwo.textContent = 'Este es mi Portafolio aqui veras de lo que soy capaz de hacer con tecnologias como HTML,CSS Y JS'
    $assistantSliderSlideTextTwo.classList.add('assistant__slider__text')
    // inyecciones-Two
    $assistantSliderSlideTwo.appendChild($assistantSliderSlideImageTwo)
    $assistantSliderSlideTwo.appendChild($assistantSliderSlideTextTwo)

    // slider-slide Three
    let $assistantSliderSlideThree = document.createElement('div')
    $assistantSliderSlideThree.classList.add('assistant__slider__slide')
    // slider-slide-iamge-Three
    let $assistantSliderSlideImageThree = document.createElement('img')
    $assistantSliderSlideImageThree.setAttribute('src','resources/images/images-main/front mentor.png')
    $assistantSliderSlideImageThree.classList.add('assistan__slider__image')
    // slider-slide-text-Three
    let $assistantSliderSlideTextThree = document.createElement('p')
    $assistantSliderSlideTextThree.textContent = 'Estos proyectos o landing page  no son de mi propiedad pertenecen a '
    $assistantSliderSlideTextThree.classList.add('assistant__slider__text')

    let $assistantSliderSlideTextLinkThree = document.createElement('a')
    $assistantSliderSlideTextLinkThree.classList.add('front-met')
    $assistantSliderSlideTextLinkThree.setAttribute('href','https://www.frontendmentor.io/solutions')
    $assistantSliderSlideTextLinkThree.setAttribute('target','_blank')
    $assistantSliderSlideTextLinkThree.textContent = 'frontend Mentor'

    // inyecciones-Three
    $assistantSliderSlideThree.appendChild($assistantSliderSlideImageThree)
    $assistantSliderSlideThree.appendChild($assistantSliderSlideTextThree)
    $assistantSliderSlideTextThree.appendChild($assistantSliderSlideTextLinkThree)
    
    // slider-slide four
    let $assistantSliderSlideFour = document.createElement('div')
    $assistantSliderSlideFour.classList.add('assistant__slider__slide')
    // slider-slide-iamge four
    let $assistantSliderSlideImageFour = document.createElement('img')
    $assistantSliderSlideImageFour.setAttribute('src','resources/images/images-main/phoenix-framework-brands.svg')
    $assistantSliderSlideImageFour.classList.add('assistan__slider__image')
    // slider-slide-text- four
    let $assistantSliderSlideTextFour = document.createElement('p')
    $assistantSliderSlideTextFour.textContent = 'El es Phoenix el te ayudara a volver a la pagian de inicio ya que no existe algo que enlaze a ella'
    $assistantSliderSlideTextFour.classList.add('assistant__slider__text')
    // inyecciones- four
    $assistantSliderSlideFour.appendChild($assistantSliderSlideImageFour)
    $assistantSliderSlideFour.appendChild($assistantSliderSlideTextFour)

    // inyeccion a slider
    $assistantSlider.appendChild($assistantSliderSlides)
    $assistantSliderSlides.appendChild($assistantSliderSlideOne)
    $assistantSliderSlides.appendChild($assistantSliderSlideTwo)
    $assistantSliderSlides.appendChild($assistantSliderSlideThree)
    $assistantSliderSlides.appendChild($assistantSliderSlideFour)
    // buttons
    let $assistantButtons = document.createElement('article')
    $assistantButtons.classList.add('assistant__buttons')

    for (let i = 0; i <= 1; i++) {
        let $assistantButtonsDirection = document.createElement('div')
        $assistantButtonsDirection.classList.add('assistant__buttons__button')
        $assistantButtons.appendChild($assistantButtonsDirection)
    }

    let $assistantButtonsSlider = document.createElement('article')
    $assistantButtonsSlider.classList.add('assistant__buttons__slider')
    for (let i = 0; i <= 3; i++) {
        let $assistantButtonsSliderActive = document.createElement('div')
        $assistantButtonsSliderActive.classList.add('assistant__buttons__slider__active')
        $assistantButtonsSlider.appendChild($assistantButtonsSliderActive)
    }

    $assistant.appendChild($assistantBody)
    $assistantBody.appendChild($closedIcon)
    $assistantBody.appendChild($assistantSlider)
    $assistantBody.appendChild($assistantButtons)
    $assistantBody.appendChild($assistantButtonsSlider)

    Fragment.appendChild($assistant)
    $body.appendChild(Fragment)

    let $iconLeft = document.createElement('i')
    $iconLeft.classList.add('fas')
    $iconLeft.classList.add('fa-angle-left')
    $iconLeft.setAttribute('id','icon-left')

    let $iconRight = document.createElement('i')
    $iconRight.classList.add('fas')
    $iconRight.classList.add('fa-angle-right')
    $iconRight.setAttribute('id','icon-right')

    let $assistantButtonsDirectionAll = document.querySelectorAll('.assistant__buttons__button')
    $assistantButtonsDirectionAll[0].appendChild($iconLeft)
    $assistantButtonsDirectionAll[0].setAttribute('id','button-left')
    $assistantButtonsDirectionAll[1].appendChild($iconRight)
    $assistantButtonsDirectionAll[1].setAttribute('id','button-rigth')

    let $sliderButtonsActive = document.querySelectorAll('.assistant__buttons__slider__active')

    $sliderButtonsActive[0].classList.add('slider__button__enabled')
}
export const assistantSlider =( )=>{
    let $sliderSlide = document.querySelectorAll('.assistant__slider__slide')
    let $sliderButtonLeft = document.querySelector('#button-left')
    let $sliderButtontIconLeft = document.querySelector('#icon-left')
    let $sliderButtontRight = document.querySelector('#button-rigth')
    let $sliderButtontIconRight = document.querySelector('#icon-right')
    let $buttonsSliders = document.querySelectorAll('.assistant__buttons__slider__active')
    let $assistant = document.querySelector('.assistant')
    let i = 0

    document.addEventListener('click',(e)=>{

        if (e.target === $sliderButtonLeft || e.target === $sliderButtontIconLeft) {
            $sliderSlide[i].classList.remove('slide-active')
            if (localStorage.getItem('dark-mode-index')=== 'true'){
                $buttonsSliders[i].classList.remove('slider__button__enabled__dark')
            }else{
                $buttonsSliders[i].classList.remove('slider__button__enabled')
            }
            i--
            if (i < 0) {
                i = $sliderSlide.length - 1
            }
            $sliderSlide[i].classList.add('slide-active')
            
            if (localStorage.getItem('dark-mode-index')=== 'true'){
                $buttonsSliders[i].classList.add('slider__button__enabled__dark')
            }else{
                $buttonsSliders[i].classList.add('slider__button__enabled')
            }
            
        }
        if (e.target === $sliderButtontRight || e.target === $sliderButtontIconRight) {

            $sliderSlide[i].classList.remove('slide-active')

            if (localStorage.getItem('dark-mode-index')=== 'true'){
                $buttonsSliders[i].classList.remove('slider__button__enabled__dark')
            }else{
                $buttonsSliders[i].classList.remove('slider__button__enabled')
            }
            
            i++
            if (i >= $sliderSlide.length ) {
                i = 0
            }
            $sliderSlide[i].classList.add('slide-active')
            if (localStorage.getItem('dark-mode-index')=== 'true'){
                $buttonsSliders[i].classList.add('slider__button__enabled__dark')
            }else{
                $buttonsSliders[i].classList.add('slider__button__enabled')
            }

        }
        if (e.target.matches('.close__icon')) {
            $assistant.classList.add('assistant__disabled')
        }
    })

}