const ImageResize =( )=>{
    let $image = document.querySelector('.faq__image')
    let $imagetwo = document.querySelector('.faq__image__two')
    
    if(window.innerWidth >= 1000){
        $image.src = '../resources/images/faq-card/illustration-woman-online-desktop.svg'
        $imagetwo.src = '../resources/images/faq-card/bg-pattern-desktop.svg'
    }
}
document.addEventListener('DOMContentLoaded',(e)=>{
    ImageResize()
})