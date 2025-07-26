import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/NavBar.js';
import Intro from './components/Intro.js';
import Aboutme from './components/AboutMe.js';
import TaskBar from './components/TaskBar.js';
import Skills from './components/Skills.js';

function App() {
  return (
    <BrowserRouter>
     <div className="min-h-screen ">
        <NavBar />
        <Intro />
        <Aboutme />  
        <Skills />  
        <TaskBar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
