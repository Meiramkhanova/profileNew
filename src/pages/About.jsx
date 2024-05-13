import React from "react";
import Service from "../components/Service";
// import d ";
const servicesData = [
  {
    title: "Web design",
    icon: "/images/icon-design.svg",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    title: "Web development",
    icon: "/images/icon-dev.svg",
    description: "High-quality development of sites at the professional level.",
  },
  {
    title: "Mobile apps",
    icon: "/images/icon-app.svg",
    description:
      "Professional development of applications for iOS and Android.",
  },
  {
    title: "Photography",
    icon: "/images/icon-photo.svg",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

export default function About() {
  return (
    <div className="about active">
      <header>
        <h2 className="h2 article-title">About Me</h2>
      </header>
      <section className="about-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          reiciendis.
        </p>

        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          voluptatem maiores amet aspernatur ullam asperiores.
        </p>
      </section>

      {/* services  section*/}
      <section className="service">
        <h3 className="h3 service-title">What I'm Doing</h3>
        <ul className="service-list">
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

      {/* testimonials section */}
      <section className="testimonials">
        <h3 className="h3 testimonials-title"> Testimonials</h3>
        <ul className="testimonials-list has-scrollbar"></ul>
      </section>
    </div>
  );
}
