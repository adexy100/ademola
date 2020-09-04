import React from 'react';
import { Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import NavbarComponent from "./components/NavbarComponent";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import './styles/index.scss';
import "./App.css";
import 'tachyons';

class App extends React.Component {
  authenticate() {
    return new Promise((resolve) => setTimeout(resolve, 500));
  }

    componentDidMount() {
      this.authenticate().then(() => {
        const ele = document.getElementById("ipl-progress-indicator");
        if (ele) {
          // fade out
          ele.classList.add("available");
          setTimeout(() => {
            // remove from DOM
            ele.outerHTML = "";
          }, 500);
        }
          window.addEventListener('scroll', () => {
            const sectionTitles = document.querySelectorAll('.section-title');
            const skillsList = document.querySelectorAll('.skills-list li');
            const projectList = document.querySelectorAll('.project-list li');
            const socialLinks = document.querySelectorAll('.social-links a');

            sectionTitles.forEach(sectionTitle => this.toggleDisplay(sectionTitle));
            skillsList.forEach(li => this.toggleDisplay(li));
            projectList.forEach(li => this.toggleDisplay(li));
            socialLinks.forEach(link => this.toggleDisplay(link));
          });
      });
    }

    toggleDisplay = element => {
      if (element.offsetTop - window.scrollY - window.innerHeight < 0) {
        element.classList.add('show');
      } else {
        element.classList.remove('show');
      }
    }


  render() {
    return (
      <div className="App">
        <NavbarComponent bg="dark" />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              {/* React router transitions */}
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                <Switch location={location}>
                  {/* Website routes with specified url endings */}
                  <Route path="/About" component={About} />
                  <Route path="/Projects" component={Projects} />
                  <Route path="/Contact" component={Contact} />
                  <Route path="/" component={Home} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer className="fixed" />
      </div>      
    );
  }
}

export default App;
