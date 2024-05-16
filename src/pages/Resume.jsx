import React from "react";
import { FaBookReader } from "react-icons/fa";
import TimelineItem from "../components/TimelineItem";
import SkillItem from "../components/SkillItem";

function Resume() {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Narxoz University"
            date="2021-2025"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, blanditiis!"
          />
        </ol>
      </div>

      {/* experience section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Narxoz University"
            date="2021-2025"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, blanditiis!"
          />
          <TimelineItem
            title="Narxoz University"
            date="2021-2025"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, blanditiis!"
          />
        </ol>
      </div>

      {/* skills section */}
      <div className="skill">
        <h3 className="h3 skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          <SkillItem title="HTML/CSS" value={80} />
          <SkillItem title="HTML/CSS" value={50} />
          <SkillItem title="HTML/CSS" value={90} />
        </ul>
      </div>
    </section>
  );
}

export default Resume;
