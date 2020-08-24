import React, { Component } from 'react';
import Project from './Project';
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
        <h3 className="section-title f4">Coming Soon...</h3>
        <ul className="project-list">
          {PROJECTS.map(project => (
            <Project 
              key={project.title}
              project={project}
            />
          ))}
        </ul>
      </section>
    )
  }  
};

export default Projects;