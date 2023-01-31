import React from 'react';
import myPic from '../assets/myPic.jpg'


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
            What excites me the most about working as a software developer is the ability it gives me to design and build technology that solves real problems and make people’s lives easier, in a small and big scale.  
            I’m currently looking for opportunities as a back-end, front-end or full-stack develper where I can to contribute my skills and keep learning and developing with new technologies. 
          </p>
        </div>
    </div>
  )
}

export default AboutPage;