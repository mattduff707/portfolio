import React from 'react';
import { styled } from 'styled-components';
import supercall from '../images/supercall.png';

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
  display: grid;
  place-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: white;
  opacity: 0;
  transition: opacity 0.2s ease;
  ${Wrapper}:hover & {
    opacity: 1;
  }
`;

const ProjectLink = () => {
  return (
    <Wrapper>
      <Title>Supercall</Title>
      <ImageWrapper>
        <Image src={supercall} alt="" />
        <ImageCover></ImageCover>
      </ImageWrapper>
    </Wrapper>
  );
};

export default ProjectLink;
