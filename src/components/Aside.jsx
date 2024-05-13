import React from "react";
import Img from "../images/adina.jpg";
import { GiClawSlashes, GiPhone } from "react-icons/gi";
import { FaLinkedin, FaLocationArrow } from "react-icons/fa";
import { GiMailbox } from "react-icons/gi";

function Aside() {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img src={Img} alt="" width={80} />
        </figure>

        <div className="info-content">
          <h1 className="name">Adina Mei</h1>
          <p className="title">React Developer</p>
        </div>
        <button className="info_more-btn">
          <span>Show Contacts</span>
          <GiClawSlashes />
        </button>
      </div>

      {/* contact information */}

      <div className="sidebar-info_more">
        <hr className="separator2" />
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <GiMailbox />
            </div>

            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href="mailto:adinaone04@gmail.com" className="contact-link">
                adinaone04@gmail.com
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <GiPhone />
            </div>

            <div className="contact-info">
              <p className="contact-title">Phone Number</p>
              <a href="tel:+77027648993" className="contact-link">
                +7 702 764 89 93
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaLocationArrow />
            </div>

            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Almaty, Kazakhstan</address>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <FaLinkedin />
            </div>

            <div className="contact-info">
              <p className="contact-title">Linkedin</p>
              <a
                href="https://www.linkedin.com/in/adinaone/"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                adinaone
              </a>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}

export default Aside;
