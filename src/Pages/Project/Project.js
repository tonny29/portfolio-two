import React, { Component } from "react";
import { Accordion } from "react-bootstrap";
import "./Project.css";

export class Project extends Component {
  render() {
    return (
      <div className="mainContent" id="project">
        <div className="info">
          <div>
            <h2>
              <span>P</span>ROJECT
            </h2>
            <h4>Here Is My Some Work With Link !!</h4>
            <p>
              I am a Full Stack developer with projects experience building
              websites and web applications. I have well knowledge on JavaScript
              Node.js.I also have experience working with React, Bootstrap,
              tailwind & MongoDB.
            </p>
          </div>
        </div>
        <Accordion className="accordionFull">
          <Accordion.Item eventKey="1">
            <Accordion.Header className="projectTopicHeader">
              <h6>Watch Collections</h6>
            </Accordion.Header>
            <Accordion.Body>
              You can see my project which is about WATCHES COLLECTIONS.Here i
              use two framework one is MUI material and 2nd one is react
              bootstrap.Also use for coloring and desingning css.
              <br />
              If you know about this website what i make for,then you can see
              here some point which is,
              <ul>
                <li>
                  &#x25BA; In home page you can see i added 6 part with
                  navigation and footer.
                </li>
                <li>
                  &#x25BA; Home page have some product whice have one button for
                  knowing about this product.
                </li>
                <li>
                  &#x25BA; When you clik the button you have to register other
                  you can login if you already register here.
                </li>
                <li>
                  &#x25BA; Here i added server site connetion with mongodb.
                </li>
                <li>
                  &#x25BA; You also see dashboard which have admin pannel.
                </li>
                <li>
                  &#x25BA; This web site is really standard and easyer for
                  users.
                </li>
              </ul>
              <a
                href="https://relaxed-spence-d39341.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="liveSiteBtn">Live Site Of The Project</button>
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="projectTopicHeader">
              <h6>Hospital Service</h6>
            </Accordion.Header>
            <Accordion.Body>
              You can see my project which is about WATCHES COLLECTIONS.Here i
              use two framework one is MUI material and 2nd one is react
              bootstrap.Also use for coloring and desingning css.
              <br />
              If you know about this website what i make for,then you can see
              here some point which is,
              <ul>
                <li>
                  &#x25BA; In home page you can see i added 6 part with
                  navigation and footer.
                </li>
                <li>
                  &#x25BA; Home page have some product whice have one button for
                  knowing about this product.
                </li>
                <li>
                  &#x25BA; When you clik the button you have to register other
                  you can login if you already register here.
                </li>
                <li>
                  &#x25BA; Here i added server site connetion with mongodb.
                </li>
                <li>
                  &#x25BA; You also see dashboard which have admin pannel.
                </li>
                <li>
                  &#x25BA; This web site is really standard and easyer for
                  users.
                </li>
              </ul>
              <a
                href="https://hospital-service-f35a5f.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="liveSiteBtn">Live Site Of The Project</button>
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header className="projectTopicHeader">
              <h6>Event Management Maker</h6>
            </Accordion.Header>
            <Accordion.Body>
              You can see my project which is about WATCHES COLLECTIONS.Here i
              use two framework one is MUI material and 2nd one is react
              bootstrap.Also use for coloring and desingning css.
              <br />
              If you know about this website what i make for,then you can see
              here some point which is,
              <ul>
                <li>
                  &#x25BA; In home page you can see i added 6 part with
                  navigation and footer.
                </li>
                <li>
                  &#x25BA; Home page have some product whice have one button for
                  knowing about this product.
                </li>
                <li>
                  &#x25BA; When you clik the button you have to register other
                  you can login if you already register here.
                </li>
                <li>
                  &#x25BA; Here i added server site connetion with mongodb.
                </li>
                <li>
                  &#x25BA; You also see dashboard which have admin pannel.
                </li>
                <li>
                  &#x25BA; This web site is really standard and easyer for
                  users.
                </li>
              </ul>
              <a
                href="https://event-maker-efb89a.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="liveSiteBtn">Live Site Of The Project</button>
              </a>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header className="projectTopicHeader">
              <h6>Nursery House & Planting</h6>
            </Accordion.Header>
            <Accordion.Body>
              You can see my project which is about WATCHES COLLECTIONS.Here i
              use two framework one is MUI material and 2nd one is react
              bootstrap.Also use for coloring and desingning css.
              <br />
              If you know about this website what i make for,then you can see
              here some point which is,
              <ul>
                <li>
                  &#x25BA; In home page you can see i added 6 part with
                  navigation and footer.
                </li>
                <li>
                  &#x25BA; Home page have some product whice have one button for
                  knowing about this product.
                </li>
                <li>
                  &#x25BA; When you clik the button you have to register other
                  you can login if you already register here.
                </li>
                <li>
                  &#x25BA; Here i added server site connetion with mongodb.
                </li>
                <li>
                  &#x25BA; You also see dashboard which have admin pannel.
                </li>
                <li>
                  &#x25BA; This web site is really standard and easyer for
                  users.
                </li>
              </ul>
              <a
                href="https://tree-selling-878a6a.netlify.app"
                target="_blank"
                rel="noreferrer"
              >
                <button className="liveSiteBtn">Live Site Of The Project</button>
              </a>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  }
}

export default Project;
