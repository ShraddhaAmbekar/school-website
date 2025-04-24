
import './App.css';

import ScrollToTop from "./components/pages/ScrollToTop"; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



// pages
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Facilities from './components/pages/Facilities';
import Gallery from './components/pages/Gallery';
import Header from './components/ui/Header';
import Footer from './components/ui/Footer';


function App() {



  return (
    <div className="App">
      <Router>
      <ScrollToTop />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
