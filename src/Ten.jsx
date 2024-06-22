import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import About from "./Route/About";
import Home from "./Route/Home";
import Contact from "./Route/Contact";

const Ten = () => {
  return (
    <BrowserRouter>
      <nav>
        <ol>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ol>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Ten;
