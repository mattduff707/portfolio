import React from "react";
import SectionBox from "../components/SectionBox";
import { styled } from "styled-components";
import { Button, Text } from "../components/generic";

const ButtonWrapper = styled.div`
  padding-top: 12px;
  display: flex;
  justify-content: center;
`;

const About = () => {
  return (
    <SectionBox title={"About Me"}>
      <Text withIndent>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat unde
        numquam facere aliquid voluptate ut laboriosam in enim, iusto omnis
        beatae odit neque magni labore sequi porro, quas ratione! Molestiae.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet atque
        dicta harum cupiditate saepe autem error nam voluptas ad, odit
        reiciendis corrupti neque ex. Iste reiciendis facilis minus! Dolorum,
        eaque. Iste reiciendis facilis minus! Dolorum, eaque.
      </Text>
      <ButtonWrapper>
        <Button>See Pictures</Button>
      </ButtonWrapper>
    </SectionBox>
  );
};

export default About;
