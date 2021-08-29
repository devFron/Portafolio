import CardProyect from "../components/card_proyect.js";
import CardSkills from "../components/card_skills.js";

const GetProyects =( ) =>{
    const $Proyects = document.createElement('section')
    const $Skills = document.createElement('section')
    fetch('http://localhost:8848/app-js/helpers/proyects-skils.json')
    .then((res)=> res.ok ? res.json() : Promise.reject({status:res.status}))
    .then((json)=>{
        let proyects = json.proyects
        proyects.forEach(el => {
            $Proyects.appendChild(
                CardProyect({
                    id:el.id,
                    image:el.image,
                    title:el.title,
                    description:el.description,
                    link:el.link
                })
            )
        });
        let Skills = json.skills
        Skills.forEach(el => {
            $Skills.appendChild(
                CardSkills({
                    image:el.image,
                    nameProyect:el.title,
                    link:el.link
                })
            )
        });

    })
    .catch((err)=>{console.log(err.status)})
    $Proyects.classList.add('proyects__box')
    $Skills.classList.add('skills__box')
    return {
        Proyects:$Proyects,
        Skills:$Skills
    }
}
export default GetProyects