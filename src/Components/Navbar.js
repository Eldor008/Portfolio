import React from "react";
import { useState } from "react";

import { Link } from "react-router-dom";

export default function Navbar() {
  let [state, setState] = useState("animate");
  function navbar() {
    document.querySelector("nav").classList.toggle("block");
    document.querySelector("nav").classList.toggle(state, setState("animate2"));
    document.querySelector(".bar svg path").classList.toggle("white");
  }

  return (
    <div>
      <div className="container">
        <div className="logo">
          <h1>
            Eldor <span></span>{" "}
          </h1>
        </div>
        <div onClick={navbar} className="bar">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="92"
            height="92"
            viewBox="0 0 92 92"
          >
            <path
              className="white"
              d="M78 23.5H14c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h64c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5zM84.5 46c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5zm0 29c0-3.6-2.9-6.5-6.5-6.5H14c-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5h64c3.6 0 6.5-2.9 6.5-6.5z"
            />
          </svg>
        </div>
        <nav>
          <ul>
            <li>
              <Link onClick={navbar} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={navbar} to="/About">
                About
              </Link>
            </li>
            <li>
              <Link onClick={navbar} to="/Portfolio">
                Portfolio
              </Link>
            </li>
            <li>
              <Link onClick={navbar} to="/Achievement">
                Achievement
              </Link>
            </li>
            <li>
              <Link onClick={navbar} to="/Blogs">
                Blogs
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
