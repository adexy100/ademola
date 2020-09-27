import React, { Component } from 'react';
import { Row, Media } from "react-bootstrap";
import GithubLogo from "../assets/GitHub-Mark-32px.png";
import LinkedinLogo from "../assets/Linkedin-Mark-32px.png";
import GmailLogo from "../assets/Gmail-Mark-32px.png";
import { Link } from "react-router-dom";
import Robofriends from "../assets/Robofriends.png";
import FaceImage from '../assets/Face-image.png';
import Pro from '../assets/Projects.png';

const Project = ({ project }) => {
  
  const {
    title,
    description,
    image,
    skills,
    links
  } = project;

  return (
    <li>
      <div className="project">
        <div className="project-info">
          <div className="project-info-front" style={{ backgroundImage: `url(${image})` }}>
            <h3 className="project-title">{title}</h3>
          </div>
          <div className="project-info-back">
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <ul className="project-skills">
              {skills.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <div className="project-links">
              <a
                href={links.website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"/>
                </svg>
                <span>Preview</span>
              </a>
              <a
                href={links.github} 
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>Github</span>
                <svg viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>
            </div>
          </div>  
        </div>
      </div>
    </li>
  )
};

class Projects extends Component {
  toggleDisplay = element => {
    if (element.offsetTop - window.scrollY - window.innerHeight < 0) {
      element.classList.add('show');
    } else {
      element.classList.remove('show');
    }
  }

  render () {
    const PROJECTS = [
      {
        title: 'Face Detection App',
        description: 'Detects faces in pictures. Built with React, Express, PostgreSql, Tachyons, and Clarifi API.',
        image: FaceImage,
        skills: ['React', 'Node', 'Express'],
        links: {
          website: 'http://www.epsa.com',
          github: 'https://github.com/adexy100/Face-App'
        }
      },
      {
        title: 'Robofriends',
        description: 'Fetch users data and search by name. Built with React and Redux.',
        image: Robofriends,
        skills: ['HTML', 'CSS', 'JavaScript'],
        links: {
          website: 'https://adexy100.github.io/Robofriends/',
          github: 'https://github.com/adexy100/Robofriends'
        }
      },
      {
        title: 'Responsive Website',
        description: 'Simple mobile-first web page designed to function well on multiple screen sizes',
        image: Pro,
        skills: ['HTML', 'CSS'],
        links: {
          website: 'https://adexy100.github.io/Responsive-Website/',
          github: 'https://github.com/adexy100/Responsive-Website'
        }
      },
      {
        title: 'Payment Integration in React',
        description: "React-Stripe Payment",
        image: Pro,
        skills: ['Stripe', 'React', 'Express'],
        links: {
          website: 'https://github.com/adexy100/',
          github: 'https://github.com/adexy100/Payment-App'
        }
      },
      {
        title: 'Ecommerce Website',
        description: 'secured website for shopping with an admin page',
        image: Pro,
        skills: ['React', 'Express', 'MongoDB'],
        links: {
          website: 'https://github.com/adexy100/',
          github: 'https://github.com/adexy100/Ecommerce'
        }
      },
      {
        title: 'Blog',
        description: 'Done with Node, Express, Ejs, Lodash, MongoDB.',
        image: Pro,
        skills: ['JavaScript', 'HTML', 'CSS'],
        links: {
          website: 'https://github.com/adexy100/',
          github: 'https://github.com/adexy100/Sample-Blog'
        }
      },
      {
        title: "User's Profile w/Authetication",
        description: 'A simple authetication users profile',
        image: Pro,
        skills: ['Node', 'Express', 'EJS', 'MongoDB'],
        links: {
          website: 'https://github.com/adexy100/',
          github: 'https://github.com/adexy100/Login-Register-Profile-with-Authentication'
        }
      },
    ];


    const projectList = document.querySelectorAll('.project-list li');
    projectList.forEach(li => this.toggleDisplay(li)); 

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