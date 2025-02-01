import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/navBar';
import Intro from './components/intro';
import Aboutme from './components/aboutMe';
import TaskBar from './components/taskBar';

function App() {
  return (
    <BrowserRouter>
     <div className="min-h-screen ">

        <NavBar />
        
        <Intro />
        

        <Aboutme />    
  
        <TaskBar/>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
