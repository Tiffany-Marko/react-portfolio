import react from "react"
import Navigation from "./Navigation"

const Header =({currentPage, handlePageChange})=>{
    return <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
    

}
export default Header