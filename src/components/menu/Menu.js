"use client";

import React, { useRef, useState } from "react";
import "./Menu.css";
import Link from "next/link";

const Menu = () => {
  const container = useRef();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="menu-container" ref={container}>
        <div className="menu-bar">
          <div className="menu-logo">
            <Link href="/">CodeGrid</Link>
          </div>
          <div className="menu-open" onClick={toggleMenu}>
            <p>Menu</p>
          </div>
        </div>
        <div className="menu-overlay">
          <div className="menu-overlay-bar">
            <div className="menu-logo">
              {" "}
              <Link href="/">CodeGrid</Link>
            </div>
            <div className="menu-close" onClick={toggleMenu}>
              <p>Close</p>
            </div>
          </div>
          <div className="menu-close-icon">
            <p>&#x2715;</p>
          </div>
          <div className="menu-copy">
            <div className="menu-links">
              <div className="menu-link-item">
                <div className="menu-link-item-holder">
                  <div className="menu-link" onClick={toggleMenu}>
                    <a href="/">Home </a>
                    <a href="/work">Work </a>
                    <a href="/about">About </a>
                    <a href="/contact">Contact </a>
                    <a href="/lab">Lab </a>
                  </div>
                </div>
              </div>
              ;
            </div>
            <div className="menu-info">
              <div className="menu-info-col">
                <a href="#">Twitter &#8599;</a>
                <a href="#">Instagram &#8599;</a>
                <a href="#">Linkedin &#8599;</a>
                <a href="#">Behance &#8599;</a>
                <a href="#">Dribble &#8599;</a>
              </div>
              <div className="menu-info-col">
                <p>gokul24@gmail.com</p>
                <p>987465136548</p>
              </div>
            </div>
          </div>
          <div className="menu-preview">
            <p>View Showreel</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
