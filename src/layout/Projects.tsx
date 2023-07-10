import React, { useState } from 'react';
import SectionBox from '../components/SectionBox';
import { styled, css } from 'styled-components';
import ProjectLink from '../components/ProjectLink';
import { projectData } from '../constants';
import ProjectPage from './ProjectPage';

const StyledSectionBox = styled(SectionBox)<{ isProjectActive?: boolean }>`
  ${({ isProjectActive }) =>
    isProjectActive &&
    css`
      padding: 0px;
    `}
`;

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  padding-top: 12px;
  justify-content: center;
`;

const Projects = () => {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const isProjectActive = activeProject !== null;

  const handleClose = () => setActiveProject(null);
  return (
    <StyledSectionBox
      isProjectActive={isProjectActive}
      title={isProjectActive ? projectData[activeProject].title : 'Projects'}
    >
      {isProjectActive ? (
        <ProjectPage handleClose={handleClose} project={projectData[activeProject]} />
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
    </StyledSectionBox>
  );
};

export default Projects;
