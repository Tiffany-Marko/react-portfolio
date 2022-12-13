import react from "react"

const Project = (props)=>{
    return (
    <div style ={{display:"flex",flexDirection:"column"}}>
        
            <h3>
        {props.name

        }
        </h3>
        <img style = {{width:"250px"}} src  ={props.image}/>
        <a href ={props.github}>link to github</a>
        <a href ={props.link}>link to site</a>
        <p>{props.description}</p>
    </div>
    )
}
export default Project