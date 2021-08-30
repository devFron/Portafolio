import Blog from "../components/blog.js";

const BlogBox = ()=>{
    const $BlogBox = document.createElement('section')
    // Blog
    fetch('http://localhost:8848/app-js/helpers/blog.json')
    .then((res)=> res.ok ? res.json():Promise.reject({status:res.status}))
    .then((json)=>{
        json.forEach(el => {
            $BlogBox.appendChild(
                Blog({
                    id:el.id,
                    image:el.image,
                    title:el.title,
                    description:el.description
                })
            )
        });
    })
    $BlogBox.classList.add('blog__box')
    return $BlogBox
}
export default BlogBox