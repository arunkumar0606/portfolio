import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/App.css';

import Home from './components/Home.jsx';
import Layout from "./components/Layout";
import Certification from "./components/Cert";
import Projects from "./components/Projects.jsx";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="certifications" element={<Certification />} />
          <Route path="projects" element={<Projects />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

