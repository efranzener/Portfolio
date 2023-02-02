import React from 'react';
import myPic from '../assets/myPic.jpg'
import { Icon } from 'semantic-ui-react';
import python from '../assets/icons/pythonLogo.png';
import postgreSQL from '../assets/icons/PostgreSQL.png';
import bootstrap from '../assets/icons/bootstrap.svg';
import jinja from '../assets/icons/jinja.png';
import flask from '../assets/icons/flask.jpeg';
import sql from '../assets/icons/sql.png';

function AboutPage () {

  return (
    <div className="aboutContainer">
      <img src={myPic} alt="EtyeneProfilePic" class='myPic'></img>
        <h2>About</h2>
        <div >
          <p className="aboutContent" col={1}>
            
            <span className="aboutIntro">I’m Etyene, a full-stack Software Developer.</span>
            <br/>
            With a previous curiosity in technology, my interest in learning how to code grew after taking a 5-weeks Python fundamentals class, recommended by a friend. 
            <br/>
            <br/>
            Fast forward to 2022, with a diverse background that includes childcare, customer services and legal jobs, I believe everything I have previously done, small or has been a crucial stepping stone to where I am today.
            <br/>
            <br/>
            Aside from self-studying, most of my coding skills were built during my time as a bootcamp student at the Full-Stack Software Engineer Program at Hackbright. 
            <br/>
            <br/>
            What excites me the most about working as a software engineer is the ability it gives me to design and build technology that solves real problems and make people’s lives easier, in a small and big scale.  
            I’m currently looking for opportunities as a back-end, front-end or full-stack developer where I can to contribute my skills and keep learning and developing with new technologies. 
            <br/>
            <br/>
            Here are a few technologies I’ve been working with recently:</p>
            <div className="technologies">
              <div className='ui images'>
                <img className='ui tiny image' alt='pythonIcon' src={python}></img>
                <img className='ui mini image' alt='flaskIcon' src={flask}></img>
                <img className='ui mini image' alt='jinjaIcon' src={jinja}></img>
                <img className='ui mini image' alt='postgresqlIco' src={postgreSQL}></img>
                <img className='ui mini image' alt='sqlIco' src={sql}></img>
                <img className='ui mini image' alt='bootstrap' src={bootstrap}></img>
              </div>
              <br/>
              <div>
                <Icon name='html5' size='large' color='orange'/>
                <Icon name='js' size='large' color='yellow'/>
                <Icon name='css3 alternate' size='large' color='blue'/>
                <Icon name='react' size='large' color='blue'/>
                <Icon name='git' size='large' color='black'/>
                <Icon name='github' size='large' color='black'/>
              </div>
          </div>
            <br></br>
        </div>
    </div>
  )
}

export default AboutPage;