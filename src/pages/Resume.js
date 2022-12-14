import React from "react"
function Resume(){
    return(
        <div className = "page">
            <h1>Resume</h1>
            <div>
                <a href = {process.env.PUBLIC_URL + "/assets/downloads/ResumeMarko3.docx"} download = {true}>
                    Download Resume
                </a>
            </div>
            <div>
                <ul>
                    <li>
                        HTML
                        
                    </li>
                    <li>
                        CSS

                    </li>
                    <li>
                        JavaScript
                    </li>
                </ul>
            </div>
            </div>
    )
}
export default Resume