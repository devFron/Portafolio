const ImportHeader = (optinos )=>{

    const xhr = new XMLHttpRequest()

    let {url,succes,error} = optinos    

    xhr.addEventListener('readystatechange',(e)=>{

        if (xhr.readyState != 4) return

        if (xhr.status >= 200 && xhr.status < 300) {
            succes(xhr)
        }else{
            error()
        }
            
    })

    xhr.open('GET',url)
    xhr.setRequestHeader('Content-Type','text/html')
    xhr.send()

}
document.addEventListener('DOMContentLoaded',(e)=> {

    let $headerReference = document.querySelectorAll('[data-header]')

    $headerReference.forEach(el => {
        ImportHeader({
            url:`${el.dataset.header}`,
            succes:(xhr)=>{
                el.outerHTML = xhr.response 
            },
            error:()=>{}
        })
    });
    
})