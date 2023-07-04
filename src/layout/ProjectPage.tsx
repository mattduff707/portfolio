import React from "react";
import { ProjectData } from "../constants";
import CloseBtn from "../components/CloseBtn";
import { styled } from "styled-components";

const StyledCloseBtn = styled(CloseBtn)`
  position: absolute;
  top: 40px;
  left: 20px;
`;

const Title = styled.h4`
  font-size: var(--font-size-heading-md);
  font-family: var(--font-family-heading);
  letter-spacing: 2px;
  text-align: center;
`;

const ProjectPage = ({
  project,
  handleClose,
}: {
  project: ProjectData;
  handleClose: VoidFunction;
}) => {
  return (
    <div>
      <StyledCloseBtn handleClick={handleClose} />
      <Title>{project.title}</Title>
    </div>
  );
};

export default ProjectPage;
