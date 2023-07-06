import React from 'react';
import { ProjectData } from '../constants';
import CloseBtn from '../components/CloseBtn';
import { styled } from 'styled-components';
import { Heading, Text } from '../components/generic';
import Arrow from '../components/icons/Arrow';
import Carousel from '../components/Carousel';

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const StyledCloseBtn = styled(CloseBtn)`
  position: absolute;
  top: -20px;
  right: 0px;
`;

const Title = styled.h4`
  font-size: var(--font-size-heading-md);
  font-family: var(--font-family-heading);
  letter-spacing: 2px;
  text-align: center;
  font-style: italic;
`;

const Row = styled.div`
  display: flex;
  gap: 48px;
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-text-md);
`;

const ListItem = styled.li`
  font-family: var(--font-family-text);
  display: flex;
  align-items: center;
  gap: 12px;
  &:before {
    content: '';
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: black;
  }
`;

const ProjectPage = ({ project, handleClose }: { project: ProjectData; handleClose: VoidFunction }) => {
  console.log('RENDER');
  return (
    <Wrapper>
      <StyledCloseBtn handleClick={handleClose} />
      <Title>{project.title}</Title>
      <div>
        <Heading>Overview</Heading>
        <Text>{project.overview}</Text>
      </div>
      <Row>
        <div style={{ flex: 1 }}>
          <Heading delay={0.25}>Role</Heading>
          <Text>{project.role}</Text>
        </div>
        <div style={{ flex: 1 }}>
          <Heading delay={0.5}>Stack</Heading>
          <List>
            {project.stack.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </div>
      </Row>
      <Carousel images={project.images} />
    </Wrapper>
  );
};

export default ProjectPage;
