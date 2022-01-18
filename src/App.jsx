import './App.scss';
import Nav from "./Compnents/Nav/Nav";
import Home from './Compnents/Home/Home';
import Education from "./Compnents/Education/Education";
import About from "./Compnents/About/About";
import Skills from './Compnents/Skills/Skills';
import Projects from "./Compnents/Projects/Projects";
import Footer from './Compnents/Footer/Footer';
import SideBar from './Compnents/SideBar/SideBar';
import NotFoundPage from "./Compnents/NotFoundPage/NotFoundPage";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";


function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <SideBar />
        <Routes>
          <Route path="/vscodefolio" element={ <Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/NotFoundPage"element={<NotFoundPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
