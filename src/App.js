import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/NavBar.js';
import MainBody from './components/MainBody.js';
import Aboutme from './components/AboutMe.js';
import TaskBar from './components/TaskBar.js';
import Skills from './components/Skills.js';
import { Certifications } from './components/Certifications.js';

function App() {
  return (
    <BrowserRouter>
     <div className="min-h-screen ">
        <NavBar />
        <MainBody />
        <Aboutme /> 
        <Certifications/> 
        <Skills /> 
        <TaskBar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
