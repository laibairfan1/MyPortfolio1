import React from "react";
import Home from "./components/Home";
import About from "./components/About"; 
import Skills from "./components/Skills"; 
import Certificate from "./components/Certificate"; 
import Projects from "./components/Projects"; 
import Education from "./components/Education"; 
import Footer from "./components/Footer"; 

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa" }}>
      <Home />
      <About />
      <Education/>
      <Skills />
      <Certificate/>
       <Projects/>
       <Footer/>
      
    </div>
  );
}

export default App;
