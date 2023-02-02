import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About.jsx';
import Homepage from './components/Homepage.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';
import Error from './components/Error.jsx';
import SharedLayout from './components/SharedLayout.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const styleLink = document.createElement("link");
styleLink.rel = "stylesheet";
styleLink.href = "https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css";
document.head.appendChild(styleLink);


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Homepage />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Projects" element={<Projects />}></Route>
            <Route path="/Resume" element={<Resume />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}




export default App;
