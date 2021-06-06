import React from "react";
import projects from "../../projects.json";
import ProjectCard from "./projectCard";

function ProjectInfo (){
    return (
        <>
        <section className="container">
          <div className="row row-cols-1 row-cols-md-3"id="project-cards">
          {projects.map((project) => (
            <ProjectCard
              key={project.thumbnail}
              thumbnail={project.thumbnail}
              title={project.title}
              deployedApp={project.deployedApp}
              ghRepo={project.ghRepo}
            />
          ))}
          </div>
          </section> 
        </>
      );
    }
export default ProjectInfo;