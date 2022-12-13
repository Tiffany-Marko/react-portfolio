import React from "react"
let myPic = "/assets/images/dave.jpg"
const divStyles = {
    // border: "1px solid black",
    maxWidth: "1000px",
    margin: "10px auto",
}
function Home() {
    return (
        <div className="page" style={divStyles}>
            <h1>About Me</h1>
            <div className = "aboutContent">
                <img className = "aboutImage" src={process.env.PUBLIC_URL + myPic}  alt="tiffany"></img>
                <div className ="aboutBio">

                
                <p>
                    Hello!
                </p>
                <p>
                    Hello World
                </p>
                </div>
            </div>
        </div>

    )
}
export default Home