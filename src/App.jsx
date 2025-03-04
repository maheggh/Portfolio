import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/Projectdetail";
import Project1 from "./pages/projects/Project1";
import Project2 from "./pages/projects/Project2";
import Project3 from "./pages/projects/Project3";
import Project4 from "./pages/projects/Project4";
import Project5 from "./pages/projects/Project5";
import Project6 from "./pages/projects/Project6";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

const App = () => {
  return (
    <main className="bg-slate-300/200">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
          <Route path="/projects/1" element={<Project1 />} />
          <Route path="/projects/2" element={<Project2 />} />
          <Route path="/projects/3" element={<Project3 />} />
          <Route path="/projects/4" element={<Project4 />} />
          <Route path="/projects/5" element={<Project5 />} />
          <Route path="/projects/6" element={<Project6 />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer></Footer>
        <BackToTopButton></BackToTopButton>
      </Router>
    </main>
  );
};

export default App;
