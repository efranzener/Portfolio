import React from 'react';
import projects from '../data.js';

// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';

import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
// import InfoIcon from '@mui/icons-material/Info';

import GitHubIcon from '@mui/icons-material/GitHub';


function srcset(image, width, height, rows = 1, cols = 1) {
    return {
      src: `${image}?w=${width * cols}&h=${height * rows}&fit=clamp&auto=format`,
      srcSet: `${image}?w=${width * cols}&h=${height * rows
      }&fit=clamp&auto=format&dpr=2 2x`,
    };
  }

  
function Projects () {
    

    return (
        
    <div className='projectsPage'>
        <Row >
            <Col>
                <h1 className="projectsHeader">Projects</h1>
            </Col>
        </Row>
        <ImageList
            sx={{
            width: 3/5,
            mx: 30,
            
            // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
            transform: 'translateZ(0)',
            }}
            
            // rowHeight='auto'
            gap={20}
         >
            {projects.map((item) => {
                const cols = item.featured ? 2 : 1;
                const rows = item.featured ? 2 : 1;
                return (
                    <ImageListItem  className={item.class} key={item.image} cols={cols} rows={rows}>
                        <img 
                            {...srcset(item.image, 250, 100, rows, cols)}
                            alt={item.title}
                            loading="lazy"
                        />
                        <ImageListItemBar
                            sx={{
                                
                                background:'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                                'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                                
                                
                            }}
                            title={item.title}
                            subtitle={item.description}
                            position='top'
                            
                            actionIcon={
                                <IconButton
                                    sx={{ color: 'rgba(0,0,0,0)' }}
                                    aria-label={`github link ${item.link}`}  
                                >
                                                                
                                <a href={item.link} className="githubLink" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large" /></a>

                                    
                                </IconButton>
                            }
                        />
                    </ImageListItem>
                );
            })} 
        </ImageList>
    </div>
  );
}
            

   

export default Projects;