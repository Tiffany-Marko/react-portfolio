import React from "react"
let myPic = "/assets/images/dave.jpg"
const divStyles = {
    border: "1px solid black",
    maxWidth: "1000px",
    margin: "10px auto",
}
function Home(){
    return(
        <div style={divStyles}>
            <h1>Home</h1>
            <img src = {process.env.PUBLIC_URL + myPic} className = "float-left" width = "150px" height = "150px" alt = "tiffany"></img>
            <p>
            posuere pretium urna eget rhoncus. Aenean at velit eros. Morbi id consequat velit, vel vestibulum augue. Vivamus nulla dui, posuere eget dignissim ut, porttitor non ipsum. Ut pulvinar elit vulputate lorem volutpat, eu posuere sapien feugiat. Morbi eu mi sem.
            </p>
            <p>
            posuere pretium urna eget rhoncus. Aenean at velit eros. Morbi id consequat velit, vel vestibulum augue. Vivamus nulla dui, posuere eget dignissim ut, porttitor non ipsum. Ut pulvinar elit vulputate lorem volutpat, eu posuere sapien feugiat. Morbi eu mi sem.
            </p>
            </div>

    )
}
export default Home