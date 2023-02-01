import React from 'react';
import projects from '../data.js';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';

// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';
// import ImageListItemBar from '@mui/material/ImageListItemBar';
// import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

import GitHubIcon from '@mui/icons-material/GitHub';


// function srcset(image, width, height, rows = 1, cols = 1) {
//     return {
//       src: `${image}?w=${width * cols}&h=${height * rows}&fit=clamp&auto=format`,
//       srcSet: `${image}?w=${width * cols}&h=${height * rows
//       }&fit=clamp&auto=format&dpr=2 2x`,
//     };
//   }

  
function Projects () {
    

    return (
        
    <div className='projectsPage'>
        <Row >
            <Col>
                <h1 className="projectsHeader">Projects</h1>
            </Col>
        </Row>
        {projects.map((project) => (
            <div className={project.class} key={project.title}>
                <img src={project.image} alt={project.title}></img>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <p>For this project I used the following technologies:
                <span> {project.technologies} </span></p>
                <a href={project.link} className="projectLink" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large"/></a>

            </div>
        ))}
    </div>
  );
}
            

   

export default Projects;