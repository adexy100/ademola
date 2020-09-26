import React, { Component } from 'react';
import Project from './Project';
import { Row, Media } from "react-bootstrap";
import GithubLogo from "../assets/GitHub-Mark-32px.png";
import LinkedinLogo from "../assets/Linkedin-Mark-32px.png";
import GmailLogo from "../assets/Gmail-Mark-32px.png";
import { Link } from "react-router-dom";
import { PROJECTS } from '../components/Constants';

class Projects extends Component {
      toggleDisplay = element => {
      if (element.offsetTop - window.scrollY - window.innerHeight < 0) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    }

  render () {
    const projectList = document.querySelectorAll('.project-list li');
    const sectionTitles = document.querySelectorAll('.section-title');
    projectList.forEach(li => this.toggleDisplay(li));
    sectionTitles.forEach(sectionTitle => this.toggleDisplay(sectionTitle)); 
    return (
      <section id="projects" className="pv5">
        <Row className="justify-content-center">
          <Media className="light-green">
            <Media.Body className="portfolio-header f6 text-center">
              <div>
                Thank you for your interest in learning about my work! Feel free
                to{" "}
                    <Link className="textLink red" to="/Contact">
                      contact
                    </Link>{" "} me.
                <div className="contact">
                  <span>
                    <a href="https://www.linkedin.com/in/ademola-adewumi-9096b4186/" target="_blank" rel="noopener noreferrer">
                      <img
                        className="p-2"
                        src={LinkedinLogo}
                        alt="Linkedin Profile"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="https://github.com/adexy100" target="_blank" rel="noopener noreferrer">
                      <img
                        className="p-2"
                        src={GithubLogo}
                        alt="Github Profile"
                      />
                    </a>
                  </span>
                  <span>
                    <a href="mailto:adexy100@gmail.com?subject=Developer Opportunity">
                      <img className="p-2" src={GmailLogo} alt="Gmail" />
                    </a>
                  </span>
                </div>
              </div>
            </Media.Body>
          </Media>
        </Row>
        <ul className="project-list">
            {PROJECTS.map(project => (
              <Project 
                key={project.title}
                project={project}
              />
            ))}
          </ul>
      </section>
    );
  }  
};

export default Projects;