
import React from 'react';
// import HomePic from './HomepagePic.jsx';

import { Grid, Segment} from 'semantic-ui-react'
import Image from 'react-bootstrap/Image';
import homepagePic from '../assets/homepagePic.jpg';


function HomePic () {
    
  return (
      <Image 
          
          alt = 'profilePic'
          className = 'homepagePic'
          fluid='true'
          src={homepagePic}
      ></Image>
  
  );
  
}


function Homepage () {
  const contentHomepage = (
    <section className="homepageContent">
      <h1>Hi! I'm Etyene</h1>
      {/* <h2>a full stack web developer, specialized in Python and Java Script and React</h2> */}
      
    </section>
      
  )
  return (
    <Segment>
      <Grid  className="homepage" columns="equal" divided="vertically" verticalAlign='middle' textAlign='center' >
        <Grid.Row stretched >
          <Grid.Column>
            {contentHomepage}
          </Grid.Column>
          <Grid.Column>
            <HomePic/>
          </Grid.Column>
          <footer classname="footer"></footer>

        </Grid.Row>

      </Grid>
    </Segment>
  );
}
 

export  default Homepage;
