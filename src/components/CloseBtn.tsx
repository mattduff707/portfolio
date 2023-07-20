import React from "react";
import { styled } from "styled-components";
import Close from "./icons/Close";
import { tokens } from "../constants";

const Btn = styled.button`
  border: 4px solid black;
  border-radius: 50%;
  display: grid;
  place-items: center;
  padding: 4px;
`;

const StyledClose = styled(Close)`
  height: 24px;
  width: 24px;
  transition: fill 0.2s ease;
  ${Btn}:hover & {
    fill: var(--color-primary);
  }
  @media ${tokens.media.sm} {
    height: 20px;
    width: 20px;
  }
`;

const CloseBtn = ({
  className,
  handleClick,
  ...props
}: {
  className?: string;
  handleClick: VoidFunction;
  props?: any;
}) => {
  return (
    <Btn onClick={handleClick} className={className} {...props}>
      <StyledClose />
    </Btn>
  );
};

export default CloseBtn;
