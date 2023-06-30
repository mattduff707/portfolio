import React from "react";
import SectionBox from "../components/SectionBox";
import { styled } from "styled-components";
import { Text } from "../components/generic";

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  list-style: none;
  padding: 0;
`;

const ContactItem = styled.li``;

/*
github https://github.com/mattduff707
email
resume
linkedIn

*/
const Contact = () => {
  return (
    <SectionBox title={"Contact"}>
      <Container>
        <Text>powerprogramming@hotmail.com</Text>
        <Text>GitHub</Text>
        <Text>LinkedIn</Text>
        <Text>Resume</Text>
      </Container>
    </SectionBox>
  );
};

export default Contact;
