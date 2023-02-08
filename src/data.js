
// const pythonIco = <img src='src/pythonlogo.png' alt='python logo'></img>;
// const PostgreSQLIco = <img src='public/PostgreSQLlogo120x120.png' alt='postgreSQL logo'></img>;

// import vowvow from '../src/assets/vowvow.png';
// import movieRatingApp from '../../assets/movieRatingApp.png';

import vowvow from './assets/vowvoW.jpg';
import movieRatingApp from './assets/movieRatingApp.jpg';
import homepagePic from './assets/homepagePic.jpg';

const projects = [
    {
        title: 'Dog Walkers Web App',
        technologies: 'Python, Flask, Java Script, HTML, CSS, PostgreSQL, SQLAlchemy.',
        description: 'A full-stack web application for dog owners to find and book dog walkers.',
        image: vowvow,
        link: 'https://github.com/efranzener/Dog-walker-App',
        class: 'projectOne',
    
    },
    {
        title: 'Movie-Rating Web App',
        technologies: 'Python, Flask, Jinja2, HTML, SQLAlchemy, PostreSQL.',
        description: 'A back-end web application that allow users to search for a movie and give it a rating from 1 to 5 stars.',
        image:movieRatingApp,
        link:"https://github.com/efranzener/Movie-Rating-App",
        class:'projectTwo',
    },
    {
        title: 'Portfolio',
        technologies: 'React, Semantic UI, Material UI, Boostrap, Emailjs, JSX, JS, HTML, CSS.', 
        description: 'A front-end web aplication created as a way for me to practice and improve my React skills. It allow users to learn more about me and my work. This is an ongoing project.',
        image:homepagePic,
        link:'https://github.com/efranzener/Portfolio',
        class:'projectThree',
    }
]



export  default projects
