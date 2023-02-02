import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHubIcon from '@mui/icons-material/GitHub';
import projects from '../data.js';



  
function Projects() {
  return (
    <div className="projectsPage">
      <Row>
        <Col>
          <h1 className="projectsHeader">Projects</h1>
        </Col>
      </Row>
      {projects.map((project) => (
        <div className={project.class} key={project.title}>
          <img src={project.image} alt={project.title}></img>
          <h2>
            {project.title}
            <span>
              <a
                href={project.link}
                className="projectLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon fontSize="large" />
              </a>
            </span>
          </h2>
          <p>
            {project.description}
            <br />
            <br />
            For this project I used the following technologies:
            <span> {project.technologies} </span>
          </p>
          <br />
          <hr />
        </div>
      ))}
    </div>
  );
}
            

   

export default Projects;