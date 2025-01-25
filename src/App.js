import './App.css';
function App() {
  return (
    <div className="App">
      <p>Welcome to my Profile!</p>
      <img src={require('./images/Arun.jpeg')}
        className="pic" alt="Profile" />
      <p>Hi i'm Arun. Currently working as a software developer with over 2.5+yrs of experience.
        Proficient in JAVA development. I love to learn new everyday.
      </p>
      <p>Follow me:       <a href="https://www.linkedin.com/in/arunkumard0606/" > Linkdin</a> </p>

      <footer class="footer">
        <div class="footer-container">
          <p> Made with ❤ by Arun</p>
        </div>
      </footer>
    </div>

  );
}

export default App;
