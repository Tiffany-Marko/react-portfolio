import React from "react"
let myPic = "/assets/images/dave.jpg"
const divStyles = {
    border: "1px solid black",
    maxWidth: "1000px",
    margin: "10px auto",
}
function Home(){
    return(
        <div className = "page" style={divStyles}>
            <h1>About Me</h1>
            <img src = {process.env.PUBLIC_URL + myPic} className = "float-left" width = "150px" height = "150px" alt = "tiffany"></img>
            <p>
                Hello!
            </p>
            <p>
             Hello World
            </p>
            </div>

    )
}
export default Home