import React from 'react';
import projects from '../data.js';
import { Grid, Image, Segment } from 'semantic-ui-react'
import GitHubIcon from '@mui/icons-material/GitHub';


function Projects () {


    return (
            
            
        <Segment >
            <Grid>
                <Grid.Row className='projectsSection'>
                    <Grid.Column >
                        <h1 className="sectionHeader">Projects</h1>
                    </Grid.Column>
                </Grid.Row>
               
                <Grid.Row centered columns='equal' textAlign='center' >
                    <Grid.Column  width={8} color="orange" class="portfolioProject"  key={projects.project3.image}>

                        <Image src={projects.project3.image} />
                        
                    </Grid.Column>
                    <Grid.Column className="movieRating"  color="teal" key={projects.project2.image}>
                        <Image src={projects.project2.image}/>
                    </Grid.Column>
                    
                </Grid.Row>
                <Grid.Row  centered stretched columns={2}>
                    <Grid.Column  color= "yellow" className='dogWalkers' key={projects.project1.image}>

                        <Image   src={projects.project1.image}/>
                            <a href="https://github.com/efranzener/Dog-walker-App" className="github" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large"/></a>

                            <h2>
                                {projects.project1.title}
                            </h2>

                    </Grid.Column>
                </Grid.Row>
                
            </Grid>  
    </Segment>
              
)}
        
//     return (
           
//                 <div >
                   
//                 <Item.Group divided>
//                     {projects.map((project) => (
//                         <Item key={project.image} >
//                             <Item.Image src={project.image} />
//                             <Item.Content >
//                                 <Item.Header >{project.title}</Item.Header>
//                                 <Item.Meta>
//                                     <span className='cinema'>{project.subtitle}</span>
//                                 </Item.Meta>
//                                 <Item.Description>{project.description}</Item.Description>
//                                 <Item.Extra>
//                                 <>
//                                 <Label> 
                                   
//                                 </Label>

//                                 </>
//                                 <Label icon='code'/>
//                                 </Item.Extra>
//                                 <Button as='a' href={project.link} primary >
//                                     Github
//                                 <Icon name='right chevron' />
                                
//                                 </Button>
                                
//                             </Item.Content>
                            
//                         </Item>
//                     ))};
//                 </Item.Group>
            
//             </div>
//     );
// }

export default Projects;