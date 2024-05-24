import React, { useEffect, useState } from "react";
import { FaGithub, FaRegEye } from "react-icons/fa";

function Portfolio() {
  // State to store projects data and filtered projects
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  // State to store the selected category projects
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []);

  // Function to handle category filter selection

  const handleFilterClick = (category) => {
    setSelectedCategory(category);

    if (category === "Все") {
      setFilteredProjects(projects);
    } else {
      const filtered = projects.filter(
        (project) => project.category === category
      );
      setFilteredProjects(filtered);
      console.log(filtered);
    }
  };

  return (
    <section className="portfolio">
      <header>
        <h2 className="h2 article-title">Портфолио</h2>
      </header>
      {/* filter buttons */}
      <ul className="filter-list">
        {["Все", "Frontend", "FullStack"].map((category) => (
          <li key={category} className="filter-item">
            <button
              className={category === selectedCategory ? "active" : ""}
              onClick={() => {
                handleFilterClick(category);
              }}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>

      {/* portfolio items */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => (
            <li
              className="project-item active"
              key={project.id}
              data-filter-item
            >
              <a href={project.imageUrl} target="_blank">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <FaRegEye />
                  </div>
                  <img src={project.image} alt={project.title} />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default Portfolio;
