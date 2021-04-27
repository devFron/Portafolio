export const ImportPost = ( )=>{
   
    
    const GetPost = async ( ) =>{

        try {
         
            let options = {
                method:'GET',
                headers:{
                    "Contetn-Type":"application/json"
                }
            }
            let res = await fetch('',options)

            let json = await res.json()

            if(!res.ok) throw res 

            const  Fragment = document.createDocumentFragment()

            json.forEach(el => {

                let $post = document.createElement('article')
                $post.classList.add('post')
                let $postImage = document.createElement('img')
                $postImage.src  = el.image
                $postImage.dataset.link = el.link
                $postImage.classList.add('post__image')

                $post.appendChild($postImage)
                Fragment.appendChild($post)
                    
            });

            let $postBox = document.querySelector('.posts')
            $postBox.appendChild(Fragment)

        } catch (err) {
            console.log(err.status);
            alert(`${err.status} Ocurrio un Error`)
        }

    }
    GetPost()
    document.addEventListener('click',(e)=>{
        if(e.target.matches('.post__image')){
            window.open(`${e.target.dataset.link}`)
        }
    })

}