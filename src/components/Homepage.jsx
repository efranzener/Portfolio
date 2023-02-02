
import React from 'react';
import { Grid, Segment} from 'semantic-ui-react'
import Image from 'react-bootstrap/Image';
import homepagePic from '../assets/homepagePic.jpg';


function HomePic() {
  return (
    <Image
      alt="profilePic"
      className="homepagePic"
      fluid="true"
      src={homepagePic}
    ></Image>
  );
}

function Homepage() {
  const contentHomepage = (
    <section className="homepageContent">
      <h1>Hi! </h1>
      <h2>I'm Etyene, a Software Engineer</h2>
      <h3> based in Seattle - WA</h3>
    </section>
  );
  return (
    <Segment>
      <Grid
        className="homepage"
        columns="equal"
        divided="vertically"
        verticalAlign="middle"
        textAlign="center"
      >
        <Grid.Row stretched>
          <Grid.Column>
            {contentHomepage}
            <br></br>
            <br></br>
            <br></br>
          </Grid.Column>
          <Grid.Column>
            <HomePic />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}
 

export  default Homepage;
