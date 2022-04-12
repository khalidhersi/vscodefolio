import "./App.scss";
import Nav from "./Components/Nav/Nav";
import Home from "./pages/Home/Home";
import Experiences from "./pages/Experiences/Experiences";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Footer from "./Components/Footer/Footer";
import SideBar from "./Components/SideBar/SideBar";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import useSound from "use-sound";
import onePieceSong from "./assets/data/onepiece.wav";


function App() {

    const [play] = useSound(onePieceSong, { volume: 0.25});



  return (
    <Router>
      <div className="app" onClick={play()}>
        <Nav />
        <SideBar />
        <Routes>
          <Route path="/" element={<Home 
          // sound={SongOn()}
          // word={word}
          // toggleSong={toggleSong} 
          />} />
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
