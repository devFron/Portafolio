const About = ()=>{
    const $about = document.createElement('section')
    $about.classList.add('about')

    const aboutData = [
        {
            title:'Sobre mi',
            description:`Soy un joven aprendiz de la tecnología,
                llevo 4 años sumergido en el mundo del desarrollo Web
                me especializado en el Front-End  y aun que no cuento
                con proyectos reales no fue una excusa para mi,quería 
                que las personas vieran lo que soy capaz de hacer así 
                que construí esto` 
            ,
            image:'public/sobre-mi.png',
        },
        {
            title:'Acerca',
            description:`Desde que empecé a descubrir el maravilloso mundo del desarrollo web
                no he parado de aprender de forma autodidacta con curos Gratuitos y videos de YouTube
                todo ese contenido lleno de conocimiento y consejos me a ayudado a ser un mejor desarrollador` 
            ,
            image:'public/acerca.png',
        },
        {
            title:'Intereses',
            description:`
                <ul class="intereses-list">
                    <li class="intereses__item">
                        <span class="intereses__title">Minimalismo</span>
                        <span class="intereses__description">Me atrae mucho la simplesa</span>
                    </li>
                    <li class="intereses__item">
                        <span class="intereses__title">Autodidacta</span>
                        <span class="intereses__description">Me encanta aprender cosas nuevas y raras</span>
                    </li>
                    <li class="intereses__item">
                        <span class="intereses__title">Minimalismo</span>
                        <span class="intereses__description">Me gusta hacer ejercico para maternerme saludable y verme bien siempre, tengo un gusto raro por el Box y MMA</span>
                    </li>
                </ul>
            ` 
            ,
            image:'public/intereses.png',
        }
    ]
    aboutData.forEach(el => {
        const $aboutItem = document.createElement('article')
        const $aboutItemTitle = document.createElement('p')
        const $aboutItemDescription = document.createElement('p')
        const $aboutItemImage = document.createElement('img')

        $aboutItemTitle.textContent = el.title
        $aboutItemDescription.innerHTML = el.description
        $aboutItemImage.src = el.image
        $aboutItemImage.alt = el.title

        $aboutItem.classList.add('about__item')
        $aboutItemTitle.classList.add('about__item__title')
        $aboutItemDescription.classList.add('about__item__description')
        $aboutItemImage.classList.add('about__item__image')

        $aboutItem.appendChild($aboutItemTitle)
        $aboutItem.appendChild($aboutItemDescription)
        $aboutItem.appendChild($aboutItemImage)

        $about.appendChild($aboutItem)
    });
    return $about
}
export default About