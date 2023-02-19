import React, { Component } from "react";
import imagess from "../../images/image.jpg";
import myfile from  '../../images/my resume.pdf';

export class Home extends Component {
  render() {
    return (
      <div id="home">
        <div className="main_content">
          <div className="header">
            <h1>!!Welcome To My Portfolio!!</h1>
          </div>
          <div className="info">
            <div>
              <h1>Hi !!!</h1>
              <h4>This is Jannatul Nayem Tonny</h4>
              <p>
                I am a Web Developer. I use to make full-stack sites and I can
                utilize react javascript library and stack. I appreciate dealing
                with is web Development since it is my obsession. I'm really
                certain that I can fulfill you with my work. My central point is
                to offer the best assistance to my clients. I'm exceptionally
                dedicated and able to work constantly to give you the best
                assistance. I'm really certain of my abilities and I couldn't
                imagine anything better than to work with you. so assuming that
                you think that I'm the ideal individual for your work then, at
                that point, do what needs to be done.
              </p>
              <button>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href={myfile}
                  download="my resume.pdf"
                >
                  Download Resume
                </a>
              </button>
            </div>
            <div>
              <img src={imagess} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
