import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';
import { projects } from '../../utility/projects-data';

const Projects = () => {

    const projectItems = projects.map(item => {
        return <ProjectCard key={item.id} name={item.name} desc={item.desc} imgurl={item.imgurl} projectLink={item.projectLink} />
    })

    return (
        <div id="projects" className="projects-wrapper">
            <div className="heading-and-btn">
                <h1>Projects</h1>
                <button>View All</button>
            </div>
            <div className="projects-container">
                {projectItems}
            </div>
        </div>
    )
}

export default Projects