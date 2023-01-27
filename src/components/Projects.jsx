import React from 'react';
import projects from '../data.js';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Projects () {


    return (
            <Container>
                <Row >
                    <Col xs={12} md={8}>
                        <h1 className="projectsHeader">Projects</h1>
                    </Col>
                </Row>
                <Row >
                    <Col  xs={12} md={8}>
                        <img  class="projectOne" src={projects.project1.image} alt= "vowvowow view"></img>
                    </Col>
                </Row>
                <Row>
                    <Col className= "projectTwo" xs={6} md={4}>
                        <h2 >{projects.project2.title}</h2>
                        <img sizes="(max-width: 600px) 480px,
                        800px" src={projects.project2.image} alt= "movieRating"></img>
                    </Col>
                    <Col  class="projectThreeContainer" xs={6} md={4}>
                        <h2 class="projectThreeh2">{projects.project3.title}</h2>
                        <img  sizes="(max-width: 600px) 480px,
                        800px" class="projectThree"src={projects.project3.image} alt= "portfolio"></img>
                    </Col>
                </Row>
                </Container>
  );
}
                
   

export default Projects;