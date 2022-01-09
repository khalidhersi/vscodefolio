import './App.scss';
import Nav from "./Compnents/Nav/Nav";
import Home from './Compnents/Home/Home';
import About from "./Compnents/About/About";
import Skills from './Compnents/Skills/Skills';
import Projects from "./Compnents/Projects/Projects";
import Contact from './Compnents/Contact/Contact';
import Footer from './Compnents/Footer/Footer';
import SideBar from './Compnents/SideBar/SideBar';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <SideBar />

        <Routes>
          <Route path="*" element={ <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact"element={<Contact />} />
          <Route path="/footer" element={<Footer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
