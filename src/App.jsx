import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import ProjectDetails from './ProjectDetails';
import './index.css';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p className="footer-text">Contact me via </p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/juan-alonso-8450481aa/" className="social-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <span className="separator">||</span>
        <a href="mailto:juanalonso278@gmail.com" className="social-link"> juanalonso278@gmail.com</a>
        <span className="separator">||</span>
        <a href="https://github.com/juanalonso278" className="social-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
