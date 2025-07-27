import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/NavBar.js';
import MainBody from './components/MainBody.js';
import TaskBar from './components/TaskBar.js';
import Skills from './components/Skills.js';
import TimeLine from './components/TimeLine.js';

function App() {
  return (
    <BrowserRouter>
     <div className="min-h-screen ">
        <NavBar />
        <hr></hr>
        <MainBody />
        <TimeLine/>
        <Skills /> 
        <TaskBar/>
      </div>
    </BrowserRouter>
  );
}

export default App;
