import React from "react";
import "./Navbar.css";


function Navbar() {
  return (
    <div className="Navbar">
      <nav>
        <div >
          <h2>MEME GENERATOR</h2>
            <div id="navbarNav">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/generator">Generator</a>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
                <li>
                  <a href="/about">About</a>
                </li>
              </ul>
            </div>
          <div>
            <a href="login">Log In</a>
          </div>
        </div>
      </nav>
    </div>
  )}

  export default Navbar;