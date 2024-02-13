import React from 'react';
import "./home.css";
import { FaInstagram, FaStackOverflow } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";

const Socials = () => {
  return (
    <div className="home__social">

      


      <a href="https://www.instagram.com/" className="home__social-icon" rel="noreferrer" target="_blank">
      <FaInstagram />
      </a>

      <a href="https://www.linkedin.com/in/ankitdeb11" className="home__social-icon" target="_blank" rel="noreferrer">
      <FaGithub />
      </a>

      <a href="https://github.com/ankitdeb11" className="home__social-icon" target="_blank" rel="noreferrer">
      <FaStackOverflow />
      </a>





    </div>
  )
}

export default Socials