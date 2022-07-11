import React from 'react';
import './ProjectCard.css';

const ProjectCard = (props) => {
  return (
    <div className='project-card-wrapper'>
      <div className="card-img-wrapper">
        <img src={props.imgurl} alt="..." />
      </div>
      <div className="card-desc">
        <h1>{props.name}</h1>
        <p>{props.desc}</p>
        <a href={props.projectLink} without rel="noreferrer" target="_blank"><button>View Project</button></a>
      </div>
    </div>
  )
}

export default ProjectCard