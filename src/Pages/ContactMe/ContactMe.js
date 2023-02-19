import emailjs from "emailjs-com";
import React from "react";
import ContactMeImg from "../../images/contact.jpg";
import "./ContactMe.css";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_nth61rb",
      "template_f2glksm",
      e.target,
      "user_9EFxqVPGiUK0KmS46iVqo"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
  alert("your email send successfully");
}

const ContactMe = () => {
  return (
    <div className="mainContent" id="contact">
      <div className="info">
        <div>
          <h2>
            <span>C</span>ontact &nbsp;&nbsp;<span>M</span>e
          </h2>
          <h4>Feel Free To Contact With Me !!</h4>
          <p>
            I believe working in a reputed organization like your one will
            provide me excellent opportunity for my career growth in the area of
            website development sector. I am confident that if I am provided the
            opportunity to serve your organization, I will prove myself to be an
            important asset for your company through my dedication, sincerity
            and highest level of professionalism.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 contactMeImg">
          <img src={ContactMeImg} alt="" />
        </div>
        <div className="col-md-6 contactTitle">
          <form className="contact-form p-3 " onSubmit={sendEmail}>
            <input
              className="form-control"
              type="hidden"
              name="contact_number"
            />
            <br />
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="user_name"
              placeholder="Enter Your Name"
            />
            <br />
            <label>Email</label>
            <input
              className="form-control"
              type="email"
              name="user_email"
              placeholder="Enter Your Email"
            />
            <br />
            <label>Message</label>
            <textarea
              className="form-control"
              name="message"
              placeholder="You Can Share Your Opinion"
            />
            <br />
            <input className="form-control sendBtn" type="submit" value="S E N D" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
