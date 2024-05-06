import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projects from './components/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact2 from './pages/Contact2';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Contact2" element={<Contact2 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}



export default App;
