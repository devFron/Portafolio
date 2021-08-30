const Cv = ()=>{
    const $Cv = document.createElement('section')
    $Cv.classList.add('cv')
    $Cv.innerHTML = `
        <img src="public/person-image.jpeg" alt="" class="cv__image">
        <p class="cv__name">Gabriel Vit</p>
        <p class="cv__profesion">Programador Web</p>
        <a href="" class="cv__button" download="cv-gariel-vit">Version Impresa</a>
        <section class="cv__contacts">
            <p class="cv__contacts__title">Contacto</p>
            <article class="cv__contact">
                <i class="cv__contact__icon fas fa-envelope"></i>
                <p class="cv__contact__description">developermater26@gmail.com</p>
            </article>
            <article class="cv__contact">
                <i class="cv__contact__icon fas fa-map-marker-alt"></i>
                <p class="cv__contact__description">Guatemala Zona 19 colonia la florida</p>
            </article>
            <article class="cv__contact">
                <i class="cv__contact__icon fas fa-link"></i>
                <p class="cv__contact__description">devfron.github.io</p>
            </article>
        </section>
        <section class="technologies">
            <p class="cv__technologies__title">Tecnologias</p>
            <article class="technologie">
                <img src="public/html-logo.svg" alt="html5 logo" class="technologie__image">
            </article>
            <article class="technologie">
                <img src="public/css-logo.svg" alt="css3 logo" class="technologie__image">
            </article>
            <article class="technologie">
                <img src="public/javascript-logo.svg" alt="javascript logo" class="technologie__image">
            </article>
            <article class="technologie">
                <img src="public/sass-logo.svg" alt="sass logo" class="technologie__image">
            </article>
            <article class="technologie">
                <img src="public/git-logo.svg" alt="git logo" class="technologie__image">
            </article>
            <article class="technologie">
                <img src="public/github-logo.svg" alt="github logo" class="technologie__image">
            </article>
            <article class="technologie">
                <img src="public/figma-logo.svg" alt="figma logo" class="technologie__image">
            </article>
            <article class="technologie">
                <img src="public/markdown-logo.svg" alt="markdown logo" class="technologie__image">
            </article>
        </section>
        <section class="cursos">
            <p class="cv__course__title">Cursos</p>
            <article class="curso">
                <p class="curso__title">Google Actívate</p>
                <p class="curso__description">Curso de introduccion al Desarrollo web 1 y 2</p>
                <a href="public/certificado.pdf" class="curso__certificacion">Descargar Certificado PDF 1</a>
                <a href="public/certificado-2.pdf" class="curso__certificacion">Descargar Certificado PDF 2</a>
            </article>
            <article class="curso">
                <p class="curso__title">Ed Team</p>

                <div class="curos__edteam">
                    <p class="curso__description">JavaScript desde cero</p>
                    <a href="public/javacript-certification.pdf" class="curos__certificacion">Descargar Certificado PDF</a>
                </div>

                <div class="curos__edteam">
                    <p class="curso__description">Introducción a API REST </p>
                    <a href="public/api-rest-certification.pdf" class="curos__certificacion">Descargar Certificado PDF</a>
                </div>

                <div class="curos__edteam">
                    <p class="curso__description">Git desde cero</p>
                    <a href="public/git-certification.pdf" class="curos__certificacion">Descargar Certificado PDF</a>
                </div>

                <div class="curos__edteam">
                    <p class="curso__description">Markdown Desde cero</p>
                    <a href="public/markdown-certification.pdf" class="curos__certificacion">Descargar Certificado PDF</a>
                </div>

            </article>
        </section>
    `
    return $Cv
}
export default Cv