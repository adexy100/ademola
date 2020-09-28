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
    });
    
    window.addEventListener('scroll', () => {
      const sectionTitles = document.querySelectorAll('.section-title');
      const skillsList = document.querySelectorAll('.skills-list li');
      const projectList = document.querySelectorAll('.project-list li');

      sectionTitles.forEach(sectionTitle => this.toggleDisplay(sectionTitle));
      skillsList.forEach(li => this.toggleDisplay(li));
      projectList.forEach(li => this.toggleDisplay(li));
    });
  };

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
        <NavbarComponent />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              {/* React router transitions */}
              <CSSTransition key={location.key} classNames="fade" timeout={300}>
                  <Switch location={location}>
                    {/* Website routes with specified url endings */}
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/projects" component={Projects} />
                   <Route path="/contact" component={Contact} />
                  </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />
        <Footer />
      </div>      
    );
  }
};

export default App;
