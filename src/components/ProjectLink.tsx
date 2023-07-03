import React from "react";
import { styled } from "styled-components";
import supercall from "../images/supercall.png";
import Arrow from "./icons/Arrow";
import { tokens } from "../constants";

const Wrapper = styled.a`
  display: block;
  border-radius: 8px;
  border: 5px solid black;
  overflow: hidden;
  cursor: pointer;
`;
const Title = styled.h4`
  font-size: var(--font-size-heading-md);
  font-family: var(--font-family-heading);
  letter-spacing: 2px;
  text-align: center;
  background: white;
  transition: background 0.2s ease, color 0.2s ease;
  border-bottom: 5px solid black;
  ${Wrapper}:hover & {
  }
`;
const ImageWrapper = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ImageCover = styled.div`
  font-family: var(--font-family-text);
  font-size: var(--font-size-text-md);
  right: -135px;
  bottom: 0px;
  padding: 0px 4px 0px 12px;
  position: absolute;
  border-left: 5px solid black;
  border-top: 5px solid black;
  border-radius: 12px 0px 0px 0px;
  background: white;
  opacity: 1;
  display: flex;
  gap: 4px;
  align-items: center;
  transition: right 0.4s ease, bottom 0.4s ease;
  ${Wrapper}:hover & {
    opacity: 1;
    right: 0px;
  }
`;

const ArrowRight = styled(Arrow)`
  height: 24px;
  width: 24px;
  fill: ${tokens.color.primary};
`;

const ProjectLink = () => {
  return (
    <Wrapper>
      <Title>Supercall</Title>
      <ImageWrapper>
        <Image src={supercall} alt="" />
        <ImageCover>
          Details <ArrowRight />
        </ImageCover>
      </ImageWrapper>
    </Wrapper>
  );
};

export default ProjectLink;
