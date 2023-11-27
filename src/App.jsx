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
// import Portfolio from './pages/portfolio/Portfolio';
// import Portfolio from './pages/portfolio/Portfolio';
// import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Projects from './components/Projects';
// import ProjectDetails from './components/ProjectDetails';
import ProjectDetails from './pages/ProjectDetails';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/projects/:projectId" component={ProjectDetails} /> */}
        <Route path="/portfolio/:projectId" element={<ProjectDetails />} />
     
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}



export default App;
