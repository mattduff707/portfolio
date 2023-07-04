import React, { useState } from "react";
import SectionBox from "../components/SectionBox";
import { styled } from "styled-components";
import ProjectLink from "../components/ProjectLink";
import { projectData } from "../constants";
import ProjectPage from "./ProjectPage";

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  padding-top: 12px;
  justify-content: center;
`;

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  console.log(activeProject);

  const handleClose = () => setActiveProject(null);
  return (
    <SectionBox title={"Projects"}>
      {activeProject !== null ? (
        <ProjectPage
          handleClose={handleClose}
          project={projectData[activeProject]}
        />
      ) : (
        <Wrapper>
          {projectData.map((project, idx) => (
            <ProjectLink
              handleClick={() => setActiveProject(idx)}
              key={project.title}
              title={project.card.title}
              imageSrc={project.card.image}
            />
          ))}
        </Wrapper>
      )}
    </SectionBox>
  );
};

export default Projects;
