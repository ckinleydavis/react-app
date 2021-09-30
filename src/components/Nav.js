import React from 'react';

export default function Nav( { currentPage, pageChangeHandler }) {
    const developerName = 'CARLA KINLEY-DAVIS';

    return (
        <div>{ developerName }
            <nav className="header-nav">
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a href="#home" onClick={() => pageChangeHandler('Home')} className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}>Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#about" onClick={() => pageChangeHandler('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>About Me</a>
                    </li>
                    <li className="nav-item">
                        <a href="#portfolio" onClick={() => pageChangeHandler('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a href="https://bit.ly/39p9tev" target="_blank" onClick={() => pageChangeHandler('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>Resume</a>
                    </li>
                    <li className="nav-item">
                        <a href="#contact" onClick={() => pageChangeHandler('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

