const Blog = (props)=>{
    let {id,image,title,description} = props
    const $Blog = document.createElement('article')
    const $BlogTitle = document.createElement('p')
    const $BlogDescription = document.createElement('p')
    const $BlogImage = document.createElement('img')
    const $BlogButton  = document.createElement('a')
    $Blog.classList.add('blog')
    $BlogTitle.classList.add('blog__title')
    $BlogDescription.classList.add('blog__description')
    $BlogImage.classList.add('blog__image')
    $BlogButton.classList.add('blog__button')

    $Blog.dataset.id = id
    $BlogImage.src = image
    $BlogImage.alt = title
    $BlogTitle.textContent = title
    $BlogDescription.textContent = description
    $BlogButton.textContent = 'Ver'
    $BlogButton.href= `#/${title.replace(/\s+/g, '-').toLowerCase()}`


    $Blog.appendChild($BlogImage)
    $Blog.appendChild($BlogTitle)
    $Blog.appendChild($BlogDescription)
    $Blog.appendChild($BlogButton)
    return $Blog
}
export default Blog