import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav() {


    return (
      <nav className="nav" id="navbar">
        <div className="nav-content">
            <div className="nav-item">
                <Link
                    activeClass="active"
                    to="Home"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                >
                About
                </Link>
            </div>
              <div className="nav-item">
              <Link
                activeClass="active"
                to="Projects"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Projects
              </Link>
              </div>
        </div>
      </nav>
    );
  }