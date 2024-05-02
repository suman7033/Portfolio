import React from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
//import ProjectCard from "./ProjectCard";
import ProjectCard from "../Projects/ProjectCard"
import projectData from "../../data/project"

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projectData.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};

export default Projects;
