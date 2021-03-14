const Slider = ( )=>{

    let $buttonLeft = document.querySelector('#slider-buttons-button-left')
    let $buttonRight = document.querySelector('#slider-buttons-button-right')
    let $sliderImages =  document.querySelectorAll('.slider__slide')
    let i = 0
    let $sliderButtonIcons = document.querySelectorAll('.slider__buttons__button__icon')
    
    document.addEventListener('click',(e)=>{
        if (e.target === $buttonLeft || e.target === $sliderButtonIcons[0]) {
            $sliderImages[i].classList.remove('slide-active')
            i--
            if (i < 0) {
                i = $sliderImages.length - 1
            }
            $sliderImages[i].classList.add('slide-active')
            e.preventDefault()
        }
        if (e.target === $buttonRight || e.target === $sliderButtonIcons[1]) {

            $sliderImages[i].classList.remove('slide-active')
            i++
            if (i >= $sliderImages.length) {
                i = 0
            }
            $sliderImages[i].classList.add('slide-active')
            e.preventDefault()
        }
        if (e.target === $sliderButtonIcons[0] || e.target === $sliderButtonIcons[1]) {
            e.preventDefault()
        }
    })
}
Slider()