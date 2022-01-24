import "./App.scss";
import Nav from "./Compnents/Nav/Nav";
import Home from "./Compnents/Home/Home";
import Experiences from "./Compnents/Experiences/Experiences";
import About from "./Compnents/About/About";
import Skills from "./Compnents/Skills/Skills";
import Projects from "./Compnents/Projects/Projects";
import Footer from "./Compnents/Footer/Footer";
import SideBar from "./Compnents/SideBar/SideBar";
import NotFoundPage from "./Compnents/NotFoundPage/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Experiences" element={<Experiences />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/NotFoundPage" element={<NotFoundPage />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
