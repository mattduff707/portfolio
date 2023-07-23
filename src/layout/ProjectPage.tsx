import React from "react";
import { ProjectData, tokens } from "../constants";
import CloseBtn from "../components/CloseBtn";
import { styled } from "styled-components";
import { Heading, Text, Anchor } from "../components/generic";
import Arrow from "../components/icons/Arrow";
import Carousel from "../components/Carousel";
import Github from "../components/icons/Github";
import Link from "../components/icons/Link";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding-top: 20px;
`;

const Container = styled.div`
  padding: 20px;
  padding-top: 24px;
  position: relative;
`;

const StyledCloseBtn = styled(CloseBtn)`
  position: absolute;
  top: 0px;
  right: 20px;
`;

const Title = styled.h4`
  font-size: var(--font-size-heading-md);
  font-family: var(--font-family-heading);
  letter-spacing: 2px;
  text-align: center;
  font-style: italic;
`;

const Row = styled.div`
  padding-top: 24px;
  padding-bottom: 24px;
  display: flex;
  gap: 48px;
  @media ${tokens.media.sm} {
    gap: 24px;
    flex-direction: column;
  }
`;
const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: var(--font-size-text-md);
`;

const ListItem = styled.li`
  font-size: var(--font-size-text-md);
  font-family: var(--font-family-text);
  display: flex;
  align-items: center;
  gap: 12px;
  &:before {
    content: "";
    display: block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--font-color);
  }
  @media ${tokens.media.sm} {
    font-size: var(--font-size-text-sm);
  }
`;

const AnchorRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 12px;
  border: 5px solid var(--font-color);
  border-left: none;
  border-right: none;
`;
const AnchorWrap = styled.a`
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  text-decoration: none;

  &:hover > ${Anchor}:after {
    transition: background 0.2s ease, width 0.2s ease;
    background: var(--color-primary);
    width: 60%;
  }
`;
const GithubIcon = styled(Github)`
  width: 28px;
  height: 28px;
  transition: stroke 0.2s ease;
  ${AnchorWrap}:hover & {
    stroke: var(--color-primary);
  }
`;

const LinkIcon = styled(Link)`
  width: 28px;
  height: 28px;

  & .icon-fill {
    fill: var(--font-color);
    transition: fill 0.2s ease;
  }

  ${AnchorWrap}:hover & {
    & .icon-fill {
      fill: var(--color-primary);
    }
  }
`;

const ProjectPage = ({
  project,
  handleClose,
}: {
  project: ProjectData;
  handleClose: VoidFunction;
}) => {
  return (
    <Wrapper>
      <Container>
        <StyledCloseBtn handleClick={handleClose} />
        <div>
          <Heading>Overview</Heading>
          <Text withIndent>{project.overview}</Text>
        </div>
        <Row>
          <div style={{ flex: 1 }}>
            <Heading delay={0.25}>Role</Heading>
            <Text withIndent>{project.role}</Text>
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
        <div>
          <Heading>Point of Interest</Heading>
          <Text withIndent>{project.interest}</Text>
        </div>
      </Container>
      <AnchorRow>
        {project.github && (
          <AnchorWrap href={project.github} target="_blank">
            <GithubIcon />
            <Anchor as="span">GitHub</Anchor>
          </AnchorWrap>
        )}
        {project.live && (
          <AnchorWrap href={project.live} target="_blank">
            <LinkIcon />
            <Anchor as="span">Live</Anchor>
          </AnchorWrap>
        )}
      </AnchorRow>
      <Carousel images={project.images} />
    </Wrapper>
  );
};

export default ProjectPage;
