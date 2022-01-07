import './App.scss';
import Nav from "./Compnents/Nav/Nav";
import Header from './Compnents/Header/Header';
import About from "./Compnents/About/About";
import Skills from './Compnents/Skills/Skills';
import Projects from "./Compnents/Projects/Projects";
import Contact from './Compnents/Contact/Contact';
import Footer from './Compnents/Footer/Footer';
import SideBar from './Compnents/SideBar/SideBar';

function App() {
  return (
    <div className="App">
        <Nav />
        <SideBar />
        <Header />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
