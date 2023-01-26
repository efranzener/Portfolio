import { Link, Outlet } from 'react-router-dom';
import NavigationBar from './Navbar.jsx';

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';



const stickyNote = (

    <div className = "myStickyBox" >
      <a href="https://github.com/efranzener" className="github" target="_blank" rel="noopener noreferrer"><GitHubIcon fontSize="large"/></a>
      <a href="https://www.linkedin.com/in/etyenefranzener/" className="linkedin" target="_blank" rel="noopener noreferrer"> <LinkedInIcon fontSize="large"/></a>
      <Link  to="/Contact" className ="email" ><MailOutlineRoundedIcon fontSize="large"/></Link>
     
    </div>

  );

// function Footer () {

//     return(
//         <div className="footer">
//             <p>Hello</p>
//         </div>
//     )
// }
function SharedLayout () {
    
    return (
        <>
            <NavigationBar/>
            {stickyNote}
            <Outlet/>
        </>

    )
}

export default SharedLayout;