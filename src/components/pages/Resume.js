import React from 'react';
import data from "../../components/resumeData";

export default function Resume() {
    return (
        <div className="App-content">
            <span class="material-icons-outlined">
                <a href="https://bit.ly/39p9tev">Download Resume</a>
            </span>
            <p>&nbsp;</p>
            <table>
                <tbody>
                    { data.map((skill, i) => {
                        return ( < tr key={i} ><td>{skill.skill} ( {skill.skillLevel} )</td></tr> )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
};