import React from 'react';
import data from "../../components/portfolioData";

export default function Portfolio() {
    return (
        <div className="App-content">
            <table class="gray-white-table">
                <tbody>
                    { data.map((project, i) => {
                        return (
                            < tr key={i} >
                                <td><a href={project.projectURL}>{project.name}</a></td>
                                <td><a href={project.repositoryURL}>GitHub Repo</a></td>
                                {/* NOTE: Unable to get images to appear! Originally placed images 
                                folder under 'public/assets' directory, then moved to 'src/components/pages' 
                                directory. Tried url without dot, with dot, with double dots ... at a lost 
                                so moving on.
                                
                                <img src={project.imageURL} alt={project.alt} /> */}
                            </tr>
                        )
                        })
                    }
                </tbody>
            </table>
        </div >
    );
}