
// const pythonIco = <img src='src/pythonlogo.png' alt='python logo'></img>;
// const PostgreSQLIco = <img src='public/PostgreSQLlogo120x120.png' alt='postgreSQL logo'></img>;

// import vowvow from '../src/assets/vowvow.png';
// import movieRatingApp from '../../assets/movieRatingApp.png';

import vowvow from './assets/vowvow.jpg';
import movieRatingApp from './assets/movieRatingTest.png';
import homepagePic from './assets/homepagePic.jpg';

const projects = [
    {
        title: 'Dog Walkers Web App',
        technologies: 'Python, Flask, Java Script, HTML, CSS, PostgreSQL',
        description: 'A full-stack web application for dog owners to find and book dog walkers',
        image: vowvow,
        link: 'https://github.com/efranzener/Dog-walker-App',
        featured: true,
        class: 'projectOne',
        

    },
    {
        title: 'Movie-Rating Web App',
        technologies: 'Python, Flask, Jinja2, HTML,',
        description: 'A web application that allow users to find and rate movies',
        image:movieRatingApp,
        link:"https://github.com/efranzener/Movie-Rating-App",
        class:'projectTwo'
        
    },
    {
        title: 'Portfolio',
        technologies: 'React, Semantic UI, Material UI, Boostrap, Emailjs, JSX, JS, HTML, CSS', 
        description: 'A front-end web aplication that allow users to learn more about my work and to directly connect with me',
        image:homepagePic,
        link:'https://github.com/efranzener/Portfolio',
        class:'projectThree'
    }
]


// projects.map((object) => (
//     Object.keys(object).forEach ( key => {
//         // console.log(`key:${key}, value: ${object[key]}`)
//         if (key === 'technologies') {
//             // console.log("props:", object.technologies)
//             (object.technologies).forEach (technology => {
//                 console.log('the src', technology.props.src)
                
//                 // console.log('each value', obj)
//         })
            
//         }
//     })
// ));

export  default projects
