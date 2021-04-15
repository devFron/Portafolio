const Fenix =(options)=>{

    const xhr = new XMLHttpRequest()

    let {url,succes,error,el} = options

    xhr.addEventListener('readystatechange',(e)=>{
        if(xhr.readyState !== 4) return

        if(xhr.status >= 200 && xhr.status < 300){
            succes(xhr,el)
        }else{
            error(xhr,el)
        }
    })

    xhr.open('GET',url)
    xhr.setRequestHeader('Content-Type','text/html')
    xhr.send()
}

document.addEventListener('DOMContentLoaded',(e)=> {

    let $reference = document.querySelectorAll('[data-content]')
    $reference.forEach((el) =>{
        Fenix({
            url:`${el.dataset.content}`,
            succes:(xhr,el)=>{
                el.outerHTML = xhr.response
            },
            error:(xhr,el)=>{
                el.outerHTML =`${xhr.response} Ocurrio un error` 
            },
            el            
        }) 
    })
})