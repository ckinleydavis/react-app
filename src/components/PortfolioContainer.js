import React, { useState } from 'react';
import Nav from './Nav';
import App from '../App'; // Homepage
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

export default function PortfolioContainer() {
    // Set home page as default current page
    const [ currentPage, setCurrentPage ] = useState('Home');

    // Check which page we are on
    const pageMonitor = () => {
        if ( currentPage === 'Home' ) {
            return <App />;
        }
        if ( currentPage === 'About' ) {
            return <About />;
        }
        if ( currentPage === 'Portfolio' ) {
            return <Portfolio />;
        }
        if ( currentPage === 'Contact' ) {
            return <Contact />;
        }
        if ( currentPage === 'Resume' ) {
            return <Resume />;
        }
    };

    const pageChangeHandler = (page) => setCurrentPage(page);

    return (
        <div>
            <Nav 
                currentPage={currentPage} 
                pageChangeHandler={pageChangeHandler} 
            />
            { pageMonitor() }
        </div>
    );
}