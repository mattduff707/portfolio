import React from 'react';
import SectionBox from '../components/SectionBox';
import { styled } from 'styled-components';
import { Button, Text } from '../components/generic';
import dogpic from '../images/dogpic.jpg';
import gip from '../images/gip.jpg';
import nickcage from '../images/nickcage.jpg';

const imgWidth = 180;
const imgHeight = 180;

const StyledSectionBox = styled(SectionBox)`
  position: relative;
  padding-bottom: ${imgHeight / 2 + 32}px;
  margin-bottom: 140px;
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: -${imgHeight / 2}px;
  left: 0px;
  width: 100%;
`;

const Image = styled.img`
  width: ${imgWidth}px;
  height: ${imgHeight}px;
  border-radius: 12px;
  object-fit: cover;
  border: 5px solid black;
`;

const About = () => {
  return (
    <StyledSectionBox title={'About Me'}>
      <Text withIndent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat unde numquam facere aliquid voluptate ut
        laboriosam in enim, iusto omnis beatae odit neque magni labore sequi porro, quas ratione! Molestiae. Lorem ipsum
        dolor sit amet consectetur, adipisicing elit. Eveniet atque dicta harum cupiditate saepe autem error nam
        voluptas ad, odit reiciendis corrupti neque ex. Iste reiciendis facilis minus! Dolorum, eaque. Iste reiciendis
        facilis minus! Dolorum, eaque.
      </Text>
      <ImageWrapper>
        <Image src={dogpic} />
        <Image src={gip} />
        <Image src={nickcage} />
      </ImageWrapper>
    </StyledSectionBox>
  );
};

export default About;
