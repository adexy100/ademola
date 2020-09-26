import React from "react";
import { Container, Row, Media } from "react-bootstrap";
import ProfilePic2 from "../assets/ProfilePic2.jpeg";
import { Link } from "react-router-dom";
import Skills from '../components/Skills';
import Resume from "../assets/AdemolaCV.pdf";

const About = () => {
  return (
    <Container fluid className="About align-items-center">
      <Row className="justify-content-center mb-5 col-12">
        <Media className="about-header text-center">
          <Media.Body className="">
            <h1 className="dark-red">歡迎光臨!</h1>
            <div className="f6 light-green">
              '歡迎光臨' means 'Welcome' in Chinese. Thanks for visiting my
              website. If you are interested in finding out more about me, my
              interests, projects, or skills, please browse around or feel free
              to view my resume to know more about me.<br />
              <button className="f6 button download-button grow" onClick={() => { window.open(Resume, '_blank') }}>
                <span>Resume</span>
                <div className="center download-icon w-30">
                  <svg version="1.1" viewBox="0 0 128 128">
                    <polygon className="download-icon__arrow" points="109.3,55.8 83.4,55.8 83.4,17 44.6,17 44.6,55.8 18.7,55.8 64,101.1"/>
                    <rect className="download-icon__base" x="18.7" y="114.1" width="90.6" height="12.9"/>
                  </svg>
                </div>
              </button>
            </div>
          </Media.Body>
        </Media>
      </Row>

      <Row className="justify-content-center mb-5 col-12">
        <Media className="justify-around bg-near-gray about-block border border-white rounded bg-dark grow">
            <img className="grow"src={ProfilePic2} alt="Ademola" />
          <Media.Body className="pr2 light-green grow">
            <div className="">
              <h3>I seek challenge...</h3>
            </div>
            <p className="f6 light-green">
              I see programming as one of the most challenging and rewarding
              occupations. Through programming, I have the opportunity to
              stretch my mind by completing intricate designs and functions
              while simultaneously creating real value for people.
            </p>
            <p className="f6 light-green">
              As a professional, I am proud to have achieved a Bachelor Degree
              in geology and mineral science. Also, I have completed series of 
              web and mobile app development on Udemy where I have learned many 
              computer languages such as; JavaScript, CSS, HTML, Dart, 
              Python, SQL, and more.
            </p>
          </Media.Body>
        </Media>
      </Row>

      <Row className="justify-content-center mb-5 col-12">
        <Media className="about-block border rounded bg-near-gray bg-dark">
          <Media.Body className="pv0">
            <div className=" text-center ">
              <h3 className="section-title">Skills</h3>
            </div>
            <p className="f6 skills-font light-green grow">
              I began programming in C and Fortran over 5 years ago as part of my 
              degree in Geology and Mineral Science to compute geological data.
              After graduation, I devoted some time to learn web and mobile development. Since then I have become deeply 
              familiar with the Mern-stack, including React.js, Redux, JavaScript, 
              HTML/CSS, Bootstrap, Node.js, Express, PostgreSQL, and MongoDB. Also, Flutter for mobile-app development.
              You can see some of my work in my{" "}
              <Link className="textLink red" to="/Projects">
                'Projects'
              </Link>{" "}
            </p>
            <Skills className="tc" />
          </Media.Body>
        </Media>
      </Row>
    </Container>  
  );
};

export default About;
