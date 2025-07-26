import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Aboutme from './components/AboutMe';
import TaskBar from './components/TaskBar';
import Skills from './components/Skills';

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
