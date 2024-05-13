import React from "react";
import Img from "../images/adina.jpg";
import { GiClawSlashes } from "react-icons/gi";

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
    </aside>
  );
}

export default Aside;
