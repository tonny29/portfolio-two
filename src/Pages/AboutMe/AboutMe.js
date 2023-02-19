import React, { Component } from "react";
import { Col, Row } from "react-bootstrap";
import html from "../../images/html.jpg";
import css from "../../images/css.jpg";
import jsReact from "../../images/react.jpg";
import javaScript from "../../images/js.jpg";
import matrialUi from "../../images/matrialUi.jpg";
import nodeJs from "../../images/nodejs.jpg";
import tailwind from "../../images/tailwind.jpg";
import mongoDb from "../../images/mongodb.jpg";
import "./AboutMe.css";

export class AboutMe extends Component {
  render() {
    return (
      <div className="mainContent" id="aboutme">
        <div className="info">
          <div>
            <h2>
              <span>A</span>bout &nbsp;&nbsp;<span>M</span>e
            </h2>
            <h4>Here Is The List Of Materials I Am Working With !!</h4>
            <p>You are reading about Jannatul Nayem Tonny. I am Bs.c Engineer of Computer Science & Engineering(CSE) from the World University of Bangladesh.I would like to introduce myself as a junior web developer. Below are the topics in which I have the knowledge, I am working with these frameworks and languages. I make many project by using below the tools. You can see some project's of mine below the portfolio.</p>
          </div>
        </div>
        <div className="projectTopic">
          <Row>
            <Col sm={3}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics"
                target="_blank"
                rel="noreferrer"
              >
                <img src={html} alt="" />
              </a>
            </Col>
            <Col sm={3}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"
                target="_blank"
                rel="noreferrer"
              >
                <img src={css} alt="" />
              </a>
            </Col>
            <Col sm={3}>
              <a
                href="https://blog.hubspot.com/website/react-js"
                target="_blank"
                rel="noreferrer"
              >
                <img src={jsReact} alt="" />
              </a>
            </Col>
            <Col sm={3}>
              <a
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
                target="_blank"
                rel="noreferrer"
              >
                <img src={javaScript} alt="" />
              </a>
            </Col>
            <Col sm={3}>
              <a
                href="https://www.educative.io/answers/what-is-material-ui-in-react"
                target="_blank"
                rel="noreferrer"
              >
                <img src={matrialUi} alt="" />
              </a>
            </Col>
            <Col sm={3}>
              <a
                href="https://blog.hubspot.com/website/what-is-tailwind-css"
                target="_blank"
                rel="noreferrer"
              >
                <img src={tailwind} alt="" />
              </a>
            </Col>
            <Col sm={3}>
              <a
                href="https://www.tutorialspoint.com/nodejs/nodejs_introduction.htm"
                target="_blank"
                rel="noreferrer"
              >
                <img src={nodeJs} alt="" />
              </a>
            </Col>
            <Col sm={3}>
              <a
                href="https://www.guru99.com/what-is-mongodb.html"
                target="_blank"
                rel="noreferrer"
              >
                <img src={mongoDb} alt="" />
              </a>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default AboutMe;
