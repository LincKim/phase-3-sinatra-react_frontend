import React from "react";
import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Form from "./Form";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Login from "./components/Login";
import { Route, Routes } from "react-router-dom";

function App() {
    return (
       <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/generator" element={<Form />} />
                <Route path="/login" element={<Login />} />
            </Routes>

        </div>
       </>
    )

}

export default App