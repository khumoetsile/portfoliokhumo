import React from "react";
import Typical from "react-typical";
import "./Profile.css"

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
            <a href="https://www.facebook.com/khumo.thecoder/" target="_blank">
              <i className="fa fa-facebook-square"></i>
            </a>
            <a href="https://www.linkedin.com/in/khumoetsile-molabi-0171aa132/" target="_blank">
              <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://www.youtube.com/channel/UClmmDfyYwoVb0PicHgfDdag" target="_blank">
              <i className="fa fa-youtube-square"></i>
            </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I am{" "}
              <span className="highlited-text">Khumoetsile Molabi</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "Frontend Developer 😃",
                    2000,
                    "Backend Developer 🤩",
                    2000,
                    "UI/UX Designer 😎",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                I am an exceptionally creative and dependable Software Developer
                with superb work ethic.
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn">
              {""}
              Hire Me{" "}
            </button>
            <a href="Curriculum_Vitae.pdf" download="Curriculum_Vitae.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
