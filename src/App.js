import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import NavBar from './components/navBar';
import Aboutme from './components/aboutMe';
function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <NavBar />

        <Aboutme />    
        <p>Follow me:       <a href="https://www.linkedin.com/in/arunkumard0606/" > Linkdin</a> </p>
  
        <footer class="footer">
          <div class="footer-container">
            <p> Made with ❤ by Arun</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>

  );
}

export default App;
