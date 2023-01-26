
import React from 'react';
import HomePic from './Homepic.jsx';

import { Grid, Segment} from 'semantic-ui-react'
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';




function Homepage () {
  const contentHomepage = (
    <section>
      <h1>Hi! I'm Etyene</h1>
      <h2>I'm a Software Developer</h2>
      
    </section>
      
  )
  return (
    <Segment>
      <Grid  className="homePage" columns="equal" divided="vertically" verticalAlign='middle' textAlign='center' >
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
 

export default Homepage;
