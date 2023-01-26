
import React from 'react';
import Image from 'react-bootstrap/Image';

function HomePic () {
    
    return (
        <Image 
            src = '/images/workingpic.jpg'
            alt = 'profilePic'
            className = 'homepagePic'
            fluid="true"
        ></Image>
    
    );
    
  }

  export default HomePic;