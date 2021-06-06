import React from "react";

function ProjectCard({ title, thumbnail, deployedApp, ghRepo }) {
  return (
    <>
      <div className="col-md-4" id="card-column">
        <div className="card" id="project-card">
          <img
            src={thumbnail}
            className="card-img-top"
            alt="Deployed application"
          />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <a className="nav-link" href={deployedApp} target="_blank" rel="noopener noreferrer">
              <h5>Deployed Application</h5>
            </a>
            <a className="nav-link" href={ghRepo} target="_blank" rel="noopener noreferrer">
              <h5>GitHub Repository</h5>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;