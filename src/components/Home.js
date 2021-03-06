import React from "react";
import TextLoop from "react-text-loop";
import ProfilePhoto from "../assets/profile-photo-2.jpeg";
import { Link } from "react-router-dom";
import { Container, Row, Media } from "react-bootstrap";
import Testimonial from "../components/Testimonial";
import "../App.css";

const Home = () => {
  return (
    <Container fluid className="align-items-center">
      <Row className="col-12 justify-content-center">
        <div className="Home">
            <div className="headline font">
              <h1 className="fw6">
                Hello World.</h1>
                <p className="fw6">I am Ademola ADEWUMI,{" "}
                <TextLoop className="i loop">
                  <div>a web developer.</div>
                  <div>a mobile-app developer.</div>
                  <div>a geologist.</div>
                  <div>a forex trader.</div>
                  <div>a child of God.</div>
                </TextLoop>
                </p>
            </div>
            <Media className="introduction shadow-5">
              <div className="intro-image">
                <img src={ProfilePhoto} alt="Ademola Adewumi" />
              </div>
              <Media.Body className="home-media"> 
                <p class="fw3 f6 light-green">
                  I am a Full-stack developer from Lagos, Nigeria. To learn
                  more about me, please click{" "}
                  <Link className="textLink fw5 red" to="/about">
                    'About'
                  </Link>{" "}
                  or check out my{" "}
                  <Link className="textLink fw5 red" to="/projects">
                    'Projects'
                  </Link>{" "}
                  to see some of my work.
                </p>
              </Media.Body>
            </Media>

             <div className="header">
                <h3 className="monospace tc ph4 fw4 black mv3">
                  WHAT I DO
                </h3>
              </div>          
              <article className="grow">
                <h1 className="f4 bg-light-blue br3 br--top black-60 mv0 pv2 ph3">Web Development</h1>
                <div className=" fs-normal-m fw1 bg-near-gray">
                  <p className="pa3 fw3 f6 light-green">
                   <Testimonial
                      expandTextLink={<span className="fw4 red">" Read more..."</span>}
                      firstSnippet={`As a website developer, I know that professional web design and development requires that
                      attention has to be paid to all of the facets involved in presenting the message. The most important 
                      of these is the effective targeting of both the message and the consumers of that message.`}
                      secondSnippet={`If you are considering developing an Internet website for your company, enhancing 
                      your existing one, please contact me for some of those ideas.`}
                    />
                  </p>
                </div>
              </article>
              <br />
              <article className="grow">
                <h1 className="f4 bg-light-blue br3 br--top black-60 mv0 pv2 ph3">Mobile Application Development</h1>
                <div className=" fs-normal-m fw1 bg-near-gray">
                  <p className="pa3 fw3 f6 light-green">
                   <Testimonial
                      expandTextLink={<span className="fw4 red">" Read more..."</span>}
                      firstSnippet={`With your ideas and my talent, I can create something truly special that will stand far above the 
                      “shovelware” that clutters up the virtual shelves of the App Store. From design to distribution, I can help you do it all.
                      Whether it’s a simple tool for your workforce or a broad social media based puzzle game, I can handle it.`}
                      secondSnippet={`If you have a great idea for a mobile application then I am the developer you are looking for. 
                      Coding a mobile application is a whole different world from writing software for desktops. 
                      Just because a developer has written software for desktops does not mean that 
                      they have a clue on how to code for mobile devices – but I do!`}
                    />
                  </p>
                </div>
              </article>
              <br />
             <article className="grow">
              <h1 className="f4 bg-light-blue br3 br--top black-60 mv0 pv2 ph3">Deployment</h1>
              <div className=" fs-normal-m fw1 bg-near-gray">
                <p className="pa3 fw3 f6 light-green">
                 <Testimonial
                  firstSnippet={`Now, we are almost done ! I can help you deploy the website so that your product is live on the 
                  World Wide Web for everyone to see and admire and USE !.`}
                  />
                </p>
              </div>
            </article>
        </div>
     </Row>
    </Container>
  );
};

export default Home;