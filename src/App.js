import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import About from "./About";
import Gallery from "./Gallery";
import datamain from "./Data";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Home/>
       <About/>
       <Gallery heading={datamain.heading} data={datamain.Data}/>
       <Service/>
       <Contact/>
       <Footer/>
    </div>
  );
}

export default App;
