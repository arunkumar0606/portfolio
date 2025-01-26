import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/navBar';
import Aboutme from './components/aboutMe';
import TaskBar from './components/taskBar';
function App() {
  return (
    <BrowserRouter>
     <div className="min-h-screen bg-black">

        <NavBar />

        <Aboutme />    
        <p>Follow me:       <a href="https://www.linkedin.com/in/arunkumard0606/" > Linkdin</a> </p>
  
        <TaskBar/>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
