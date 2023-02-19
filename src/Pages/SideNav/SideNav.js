import { Avatar } from "@mui/material";
import React, { Component } from "react";
import Home from "../Home/Home";
import images from "../../images/image.jpg";
import "./SideNav.css";
import AboutMe from "../AboutMe/AboutMe";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";
import ContactMe from "../ContactMe/ContactMe";

export class SideNav extends Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="sidebar">
            <Avatar
              alt="Remy Sharp"
              src={images}
              className="avatarSize"
            />
            <ul>
              <li>
                <a href="#home">
                  <i class="fas fa-home"></i>Home
                </a>
              </li>
              <li>
                <a href="#home">
                  <i class="fas fa-user"></i>Profile
                </a>
              </li>
              <li>
                <a href="#aboutme">
                  <i class="fas fa-address-card"></i>About
                </a>
              </li>
              <li>
                <a href="#project">
                  <i class="fas fa-project-diagram"></i>Project
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class="fas fa-address-book"></i>Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <Home />
            <AboutMe />
            <Project />
            <ContactMe />
      <br />

      <Footer></Footer>
      
          </div>
        </div>
      </div>
    );
  }
}

export default SideNav;
