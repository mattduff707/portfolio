import React from 'react';
import SectionBox from '../components/SectionBox';
import { styled } from 'styled-components';
import ProjectLink from '../components/ProjectLink';

const Wrapper = styled.div`
  display: flex;
  gap: 32px;
  padding-top: 12px;
  justify-content: center;
`;

const Projects = () => {
  return (
    <SectionBox title={'Projects'}>
      <Wrapper>
        <ProjectLink />
        <ProjectLink />
        <ProjectLink />
      </Wrapper>
    </SectionBox>
  );
};

export default Projects;
