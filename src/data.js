
// const pythonIco = <img src='src/pythonlogo.png' alt='python logo'></img>;
// const PostgreSQLIco = <img src='public/PostgreSQLlogo120x120.png' alt='postgreSQL logo'></img>;

const projects = { project1:
    {
        title: 'Vowvow - Dog Walkers',
        technologies: ['Python, Flask, Java Script, HTML, CSS, PostgreSQL'],
        description: 'A full-stack web application for dog owners to find and book dog walkers',
        image:'/images/vowvow.png',
        link: 'https://github.com/efranzener/Dog-walker-App'

    },
    project2:{
        title: 'Movie-Rating Web App',
        description: 'A web application that allow users to find and rate movies',
        image:'/images/stars.png',
        link:"https://github.com/efranzener/Movie-Rating-App",
        
    },
    project3: {
        title: 'Portfolio',
        technologies: ["React"], 
        description: 'A front-end web aplication that allow users to learn more about my work and to directly connect with me',
        image:'/images/vowvow.png',
        link:'',
    }
    }


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
