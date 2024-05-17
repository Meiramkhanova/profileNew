import React from "react";
import Service from "../components/Service";
import SkillItem from "../components/SkillItem";

const servicesData = [
  {
    title: "React",
    icon: "/images/react-svgrepo-com.svg",
    description:
      "Нравится создавать приложения путем разбивания на компоненты используя данную библиотеку. И стремлюсь стать react разработчиком",
  },
];

export default function About() {
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">Обо мне</h2>
      </header>
      <section className="about-text">
        <p>Доброго времени суток! </p>
        <p>Это мой портфолио-сайт</p>
      </section>

      {/* services  section*/}
      <section className="service">
        <h3 className="h3 service-title">Специализируюсь:</h3>
        <ul>
          {servicesData.map((service, index) => (
            <Service
              key={index}
              title={service.title}
              icon={service.icon}
              description={service.description}
            />
          ))}
        </ul>
      </section>

      <section>
        <div className="skill">
          <h3 className="h3 skills-title">Мои навыки:</h3>
          <ul className="skills-list content-card">
            <SkillItem title="HTML/CSS" value={85} />
            <SkillItem title="Vanilla JavaScript" value={60} />
            <SkillItem title="React" value={80} />
            <SkillItem title="Redux" value={60} />
            <SkillItem title="Tailwind CSS" value={70} />
            <SkillItem title="Material UI" value={90} />
          </ul>
        </div>
      </section>
    </div>
  );
}
