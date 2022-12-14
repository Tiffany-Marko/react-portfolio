import React, { useState } from "react";
import Header from "./Header";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Portfolio from "../pages/Portfolio";
import Resume from "../pages/Resume";
import Footer from "./Footer"
const mainStyles = {
  height: "100vh",
}
function PortfolioContainer(){
    const [currentPage, setCurrentPage] = useState('About Me');
    const renderPage = () => {
        if (currentPage === 'About Me') {
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
        <main style={mainStyles}>
            <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
            <div className = "page-container">
            {renderPage()}
            </div>
            <Footer />
        </main>
    )
}
export default PortfolioContainer;