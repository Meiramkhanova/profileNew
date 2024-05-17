import React, { useEffect, useState } from "react";
import { FaBookReader, FaRegEye } from "react-icons/fa";
import TimelineItem from "../components/TimelineItem";

function Resume() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/certifications.json")
      .then((result) => result.json())
      .then((data) => {
        setProjects(data);
        console.log(data);
      });
  }, []);
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Резюме</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Образование</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Университет Нархоз"
            date="2021-2025"
            description="Бакалавриат, Информационные Технологии"
          />
        </ol>
      </div>

      {/* experience section */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Опыт</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Frontend React, IT company ONE Technologies"
            date="Апрель 2024 - Март 2024"
            description="Прошла обучение по направлению Frontend React. Были сделаны проекты такие как to-do-list-app и веб-сайт Levels.kz с 
						использованием - React, Redux, React-router-dom. Также улучшила свои знания по нативному(Vanilla) JavaScript.Дополнительно улучшила знания
						использования git, github на групповом проекте."
          />
          <TimelineItem
            title="Участие в Хакатоне nFactorial AI Cup 2023"
            date="Апрель 7 - Апрель 9 2023"
            description="Участвовала в хакатоне в области искусственного интеллекта, успешно интегрировав Cohere API в
													проект, используя React для интерфейса и Express для серверной части"
          />
        </ol>
      </div>

      {/* certificate section */}

      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Сертификаты</h3>
        </div>
        <section className="projects">
          <ul className="project-list">
            {projects.map((project) => (
              <li
                className="project-item active"
                key={project.id}
                data-filter-item
              >
                <a href={project.url} target="_blank">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                      <FaRegEye />
                    </div>
                    <img src={project.image} alt={project.title} />
                  </figure>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.company}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </section>
  );
}

export default Resume;
