import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "../Services/Constants/projects";
import github from "../Assets/Images/social/github.svg";

export default function Projects({ content, refProperty }) {
  return (
    <section className="section-container projects-section" ref={refProperty}>
      <h2 className="section-title">{content.title}</h2>
      <ul className="projects-container">
        {projects.map((p, index) => (
          <ProjectCard
            key={index}
            name={p.name}
            description={p.descriptionEN}
            tools={p.tools}
            website={p.website}
            github={p.github}
            img={p.img}
          />
        ))}
        <a
          href="https://github.com/subhadip-kundu"
          target="_blank"
          rel="noreferrer"
        >
          <img
            style={{ width: "60px" }}
            alt="Link to Github profile"
            src={github}
          ></img>
          {content.frontendMentor}
        </a>
      </ul>
    </section>
  );
}
