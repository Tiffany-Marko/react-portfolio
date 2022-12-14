import React from "react"
import plannerImage from "../assets/PlannerApp.png"
import weatherImage from "../assets/weather.png"
import quizImage from "../assets/quiz.png"
import refactImage from "../assets/refact.png"
import jateImage from "../assets/jate.png"
import portImage from "../assets/port.png"
import Project from "../components/Project"
function Portfolio(){
    const projects = [
        {
            name:"Planner App",
            github:"https://github.com/Tiffany-Marko/Planner-App",
            image:plannerImage,
            link:"https://tiffany-marko.github.io/Planner-App/",
            description:"Workday Planner",

        },
        {
            name:"Weather Project",
            github:"https://github.com/Tiffany-Marko/Weather-Project",
            image: weatherImage,
            link:"https://tiffany-marko.github.io/Weather-Project/",
            description:"Weather Forecast",

        },
        {
            name:"Quiz Game",
            github:"https://github.com/Tiffany-Marko/Quiz-Game",
            image: quizImage,
            link:"https://tiffany-marko.github.io/Quiz-Game/",
            description:"Dragon Quiz Game",

        },
        {
            name:"Refactor Project",
            github:"https://github.com/Tiffany-Marko/code-refactor",
            image: refactImage,
            link:"https://tiffany-marko.github.io/code-refactor/",
            description:"Code Refactor Project",

        },
        {
            name:"PWA",
            github:"https://github.com/Tiffany-Marko/PWA",
            image: jateImage,
            link:"https://pwa-assignment-tiff.herokuapp.com/",
            description:"PWA App",

        },
        {
            name:"Portfolio CSS",
            github:"https://github.com/Tiffany-Marko/portfoliopage",
            image:portImage,
            link:"https://tiffany-marko.github.io/portfoliopage/",
            description:"Old Portfolio",

        },


    ]
   const renderProjects = () =>{
    return projects.map((project)=>{
        return (
            <div key ={project.link} >
                <Project {...project}/>
            </div>
        )
    })
   } 
    return(
        <div className = "page">
            <h1>Portfolio</h1>
            <div className="projects">
                {renderProjects()}
            </div>
            </div>
    )
}
export default Portfolio