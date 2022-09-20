import React from 'react'
import Navbar from "./Components/Navbar"
import { Routes, Route, } from "react-router-dom";

import Home from"./Components/Home"
import About from"./Components/About"
import Portfolio from"./Components/Portfolio"
import Achievement from"./Components/Achievement"
import Blogs from"./Components/Blogs"
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>

      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Portfolio" element={<Portfolio/>} />
      <Route path="/Achievement" element={<Achievement/>} />
      <Route path="/Blogs" element={<Blogs/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
