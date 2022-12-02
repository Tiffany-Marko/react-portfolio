import React, { useState } from "react";
import NavBar from "./Navbar";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('Home');
    const renderPage = () => {
        if (currentPage === 'Home') {
          return <Home />;
        }
        if (currentPage === 'Portfolio') {
          return <Portfolio />;
        }
        if (currentPage === 'Resume') {
          return <Resume />;
        }
        return <Contact />;
      };
      const handlePageChange = (page) => setCurrentPage(page);
    return (
        <main>
            <NavBar currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
        </main>
    )
}
export default PortfolioContainer;