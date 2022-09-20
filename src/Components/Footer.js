import React from "react";

import facebook from "./img/facebook.svg";
import twitter from "./img/twitter.svg";
import In from "./img/IN.svg";
import browser from "./img/browser.svg";
import video from "./img/video.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_row">
        <div className="footer_row_col">
          <div className="logo">
            <h1>
              Eldor <span></span>{" "}
            </h1>
          </div>
          <p>
            Subscribe to newsletter to get some updates related with branding,
            designs and more.
          </p>
          <form action="">
            <input type="text" placeholder="write your email address" /> 
            <input type="submit" value="subscribe it" />
          </form>
        </div>
        <div className="footer_row_col">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Services</a>
            </li>
            <li>
              <a href="/">Portfolio</a>
            </li>
            <li>
              <a href="/">blogs</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer_row_col">
          <p>
            Just feel free to contact if you wanna collaborate with me, or
            simply have a conversation.
          </p>
          <p>eldoryunusov826@gmail.com</p>
        </div>
      </div>
      <div className="footer_social">
        <div className="footer_social_col">
          <ul>
            <li>
              <a href="/">
                <img src={facebook} alt="/" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={twitter} alt="/" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={In} alt="/" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={browser} alt="/" />
              </a>
            </li>
            <li>
              <a href="/">
                <img src={video} alt="/" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer_social_col">
          <p>Template designed by : Templates Eldor</p>
        </div>
      </div>
      
    </div>
  );
}
