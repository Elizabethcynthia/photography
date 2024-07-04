import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import About from "./About";
import Gallery from "./Gallery";
import datamain from "./Data";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>

          <Route>
            <Route path="/" element={<Home/>} />
            <Route path="about" element={<About/>} />
            <Route path="gallery" element={<Gallery heading={datamain.heading} data={datamain.Data}/>} />
            <Route path="service" element={<Service/>} />
            <Route path="contact" element={<Contact/>} />
            <Route path="footer" element={<Footer/>} />
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
