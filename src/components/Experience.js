import React from "react";
import { Container, Row, Media } from "react-bootstrap";
import GitHubLogo from "../assets/GitHub-Mark-32px.png";
import WeatherAppCapture from "../assets/the_weather_app_capture.PNG";
import FaceDetectImage from "../assets/Face-Detect-Capture.PNG";
import BillsTrackerImage from "../assets/bills-tracker-capture.PNG";
import RoboFriendsImage from "../assets/Robofriends-capture.png";
import PixelArtImage from "../assets/pixel-art-capture.PNG";
import StoreCheckoutImage from "../assets/store-checkout-capture.PNG";
import GithubLogo from "../assets/GitHub-Mark-32px.png";
import LinkedinLogo from "../assets/Linkedin-Mark-32px.png";
import GmailLogo from "../assets/Gmail-Mark-32px.png";
import { Link } from "react-router-dom";

const Experience = () => {
  return (
    <Container fluid className="col-12 align-items-center">
      <Row className="justify-content-center">
        <Media className="light-green">
          <Media.Body className="portfolio-header f6 text-center">
            <div>
              Thank you for your interest in learning about my work! Feel free
              to view my big {" "}
                  <Link className="textLink red" to="/Projects">
                    'projects'
                  </Link>{" "} or{" "}
                  <Link className="textLink red" to="/Contact">
                    'contact'
                  </Link>{" "} me below.
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
                  <a href="mailto:windsor.bryan@gmail.com?subject=Developer Opportunity">
                    <img className="p-2" src={GmailLogo} alt="Gmail" />
                  </a>
                </span>
              </div>
            </div>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block grow" id="project-1 ">
          <div className="media-image grow">
            <div>
              <img src={WeatherAppCapture} alt="The Weather App" />
            </div>
          </div>
          <Media.Body className="grow" id="project-1">
            <span className="f3 fw5 black">Weather App</span>
            <p className="f6 black fw2">
              Displays weather forecasts. Built with Create-React-App,
              Dark-Sky-API, Opencage-API-Client, React-Chartjs-2, and
              React-Smooth-Collapse.
            </p>
            <p>
              <a href="https://github.com/adexy100/Weather-App" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block grow" id="project-2 ">
          <div className="media-image">
            <div>
              <img src={FaceDetectImage} alt="Face Detection App" />
            </div>
          </div>
          <Media.Body className="project-body grow" id="project-2">
            <span className="f3 fw5 black">Face Detection</span>
            <p className="f6 black fw2">
              Detects faces in pictures. Built with React, Tachyons, and Web
              Storage API.
            </p>
            <p>
              <a href="https://github.com/adexy100/Face-Detection" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block grow" id="project-4">
          <div className="media-image">
            <div>
              <img src={BillsTrackerImage} alt="Bills Tracker" />
            </div>
          </div>
          <Media.Body className="project-body" id="project-4">
            <span className="f3 fw5 black">Bills Tracker</span>
            <p className="f6 black fw2">
              Record, categorize, and chart bills. Built with React,
              React-Router, Chart.js, and Web Storage API.
            </p>

            <p>
              <a href="https://github.com/adexy100/Bills-Tracker" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block grow" id="project-5">
          <div className="media-image">
            <div>
              <img src={RoboFriendsImage} alt="Robofriends" />
            </div>
          </div>
          <Media.Body className="project-body grow" id="project-5">
            <span className="f3 fw5 black">Robofriends w/Redux</span>
            <p className="f6 black fw2">
              Fetch users' data and search by name. Built with React and Redux.
            </p>
            <p>
              <a href="https://github.com/adexy100/Robo-friends" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block grow" id="project-6">
          <div className="media-image">
            <div>
              <img src={PixelArtImage} alt="Pixel Art" />
            </div>
          </div>
          <Media.Body className="project-body grow" id="project-6">
            <span className="f3 fw5 black">Pixel Art</span>
            <p className="f6">
              Draw pictures by filling large pixels. Built with React and Web
              Storage API.
            </p>

            <p>
              <a href="https://github.com/adexy100/Pixel-Art" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
      <Row className="justify-content-center col-12 ">
        <Media className="project-block grow" id="project-7">
          <div className="media-image">
            <div>
              <img src={StoreCheckoutImage} alt="Store Checkout App" />
            </div>
          </div>
          <Media.Body className="project-body grow" id="project-7">
            <span className="f3 fw5 black">Store Checkout</span>
            <p className="f6 black fw2">
              Create a list of products, add products to a shopping cart, and
              checkout via Stripe. Built with React, Stripe API, and Web Storage
              API.
            </p>
            <p>
              <a href="https://github.com/adexy100/Store-Checkout" target="_blank" rel="noopener noreferrer">
                <img src={GitHubLogo} alt="Source code" />
              </a>
            </p>
          </Media.Body>
        </Media>
      </Row>
    </Container>
  );
};

export default Experience;
