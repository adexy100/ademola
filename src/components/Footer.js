import React from "react";
import GithubLogo from "../assets/github.png";
import LinkedinLogo from "../assets/linkedin.png";
import GmailLogo from "../assets/gmail.png";
import instaIcon from "../assets/insta.png";
import twitterIcon from "../assets/twitter.png";

const Footer = () => {
  return (
    <footer className="foot fixed text-center col-12">
      <div className="d-flex justify-content-center ">
        <span className="social-Link">
          <a href="https:https://www.linkedin.com/in/ademola-adewumi-9096b4186/" target="_blank" rel="noopener noreferrer">
            <img className="p-2 grow-large" src={LinkedinLogo} alt="Linkedin Profile" />
          </a>
        </span>
        <span className="social-Link">
          <a href="https://github.com/adexy100" target="_blank" rel="noopener noreferrer">
            <img className="p-2 grow-large" src={GithubLogo} alt="Github Profile" />
          </a>
        </span>
        <span className="social-Link">
          <a href="mailto:adexy100@gmail.com?subject=Developer Opportunity">
            <img className="p-2 grow-large" src={GmailLogo} alt="Gmail" />
          </a>
        </span>
         <span className="social-Link">
          <a href="https://www.twitter.com/adewumi_demola/" target="_blank" rel="noopener noreferrer">
            <img className="p-2 grow-large" src={twitterIcon} alt="twitter Profile" />
          </a>
        </span>
        <span className="social-Link">
          <a href="https://instagram.com/adewumiademola" target="_blank" rel="noopener noreferrer">
            <img className="p-2 grow-large" src={instaIcon} alt="instagram Profile" />
          </a>
        </span>
      </div>
      <span className="f6 justify-center black">Ademola Adewumi &copy; 2020. All rights Reserved.</span> 
    </footer>   
  );
};

export default Footer;