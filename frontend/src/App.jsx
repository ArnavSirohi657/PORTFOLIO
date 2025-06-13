import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Navbar/Navbar.jsx';
import Home from './LandingPage/Home.jsx';
import About from './LandingPage/About.jsx';
import Projects from './LandingPage/Projects.jsx';
import Footer from './Footer/Footer.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}
