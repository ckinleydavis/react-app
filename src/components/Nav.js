import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Nav() {
    const developerName = 'CARLA KINLEY-DAVIS';

    return (
<div className="App-header">
    <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true"><NavLink to="/">About Me</NavLink></button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false"><NavLink to="/portfolio">Portfolio</NavLink></button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><NavLink to="/resume">Resume</NavLink></button>
        </li>
        <li className="nav-item" role="presentation">
            <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false"><NavLink to="/contact">Contact Me</NavLink></button>
        </li>
    </ul>
    {/* <div className="tab-content" id="myTabContent">
        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
    </div> */}
</div>
        
/*
<ul className="nav nav-tabs">
    <li className="nav-item">
        <NavLink to="/">About Me</NavLink>
    </li>
    <li className="nav-item">
        <NavLink to="/portfolio">Portfolio</NavLink>
    </li>
    <li className="nav-item">
        <NavLink to="/resume">Resume</NavLink>
    </li>
    <li className="nav-item">
        <NavLink to="/contact">Contact Me</NavLink>
    </li>
</ul>
*/
            
    );
}

