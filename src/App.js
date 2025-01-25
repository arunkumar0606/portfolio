import './App.css';
function App() {
  return (
    <div className="App">
      <p>Welcome to my Profile!</p>
      <img src={require('./images/Arun.jpeg')}
       className="pic" alt="Profile"/>
    </div>
  );
}

export default App;
