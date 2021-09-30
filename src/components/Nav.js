import React from 'react';

export default function Nav( { currentPage, pageChangeHandler }) {
    const linkStyle = { border: '1px black', fontFamily: 'helvetica', fontSize: '20px', color: 'white', padding: '10px' };
    const developerName = 'Carla Kinley-Davis';

    return (
        <nav className="header-nav">
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a>Home</a>
                </li>
                <li className="nav-item">
                    <a>About Me</a>
                </li>
                <li className="nav-item">
                    <a>Portfolio</a>
                </li>
                <li className="nav-item">
                    <a>Resume</a>
                </li>
                <li className="nav-item">
                    <a>Contact Me</a>
                </li>
            </ul>
            {/* <section style={{ display: 'flex', fontFamily: 'helvetica', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                <div style={linkStyle}>{developerName}</div>
                <div style={linkStyle}><a href="#">About Me</a></div>
                <div style={linkStyle}><a href="https://www.kinleydavis.com/" target="_blank">Portfolio</a></div>
                <div style={linkStyle}><a href="https://calendly.com/ckinleydavis/30min">Contact Me</a></div>
                <div style={linkStyle}><a href="https://bit.ly/39p9tev" target="_blank">Resume</a></div>
                <div style={linkStyle}><a href="https://www.instagram.com/mastergardener.app/" target="_blank">MasterGardener</a></div>
                <div style={linkStyle}><a href="https://open.spotify.com/user/1227450862" target="_blank">Spotify</a></div>
                </section> */}
        </nav>
    );
}

