import React from "react";
import SectionBox from "../components/SectionBox";
import { styled } from "styled-components";
import { Anchor, Text } from "../components/generic";

import Github from "../components/icons/Github";
import Email from "../components/icons/Email";
import LinkedIn from "../components/icons/LinkedIn";
import Resume from "../components/icons/Resume";
import { tokens } from "../constants";
import Switch from "../components/Switch";
import Moon from "../components/icons/Moon";
import Sun from "../components/icons/Sun";

const Wrapper = styled.footer`
  --shadow-color: 0deg 0% 63%;
  /* position: fixed;
  bottom: 0px; */
  width: 100%;
  border-top: 5px solid var(--font-color);
  background: var(--bg-color);
  z-index: 1000;
  height: auto;

  display: flex;

  @media ${tokens.media.md} {
    display: none;
  }
`;

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 12px;
  list-style: none;
  padding: 0;
  flex: 1;
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-left: 5px solid var(--font-color);
  padding: 0 12px;
`;

const ContactItem = styled.li`
  display: flex;
  gap: 4px;
  align-items: center;
  padding: 12px 0px;
  cursor: pointer;
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
  ${ContactItem}:hover & {
    stroke: var(--color-primary);
  }
`;
const EmailIcon = styled(Email)`
  width: 28px;
  height: 28px;
  transform: translateY(2px);
  transition: fill 0.2s ease;
  ${ContactItem}:hover & {
    fill: var(--color-primary);
  }
`;
const LinkedInIcon = styled(LinkedIn)`
  width: 28px;
  height: 28px;
  transition: stroke 0.2s ease;
  ${ContactItem}:hover & {
    stroke: var(--color-primary);
  }
`;
const ResumeIcon = styled(Resume)`
  width: 28px;
  height: 28px;
  transition: fill 0.2s ease;
  ${ContactItem}:hover & {
    fill: var(--color-primary);
  }
`;
const StyledSun = styled(Sun)`
  width: 20px;
  height: 20px;
  fill: var(--bg-color);
`;
const StyledMoon = styled(Moon)`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  fill: var(--bg-color);
`;

const Contact = ({
  setIsDark,
  isDark,
}: {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
}) => {
  return (
    <Wrapper title={"Contact"}>
      <Container>
        <ContactItem>
          <EmailIcon />
          <Anchor>Email</Anchor>
        </ContactItem>
        <ContactItem>
          <GithubIcon />
          <Anchor>GitHub</Anchor>
        </ContactItem>
        <ContactItem>
          <LinkedInIcon />
          <Anchor>LinkedIn</Anchor>
        </ContactItem>
        <ContactItem>
          <ResumeIcon />
          <Anchor>Resume</Anchor>
        </ContactItem>
      </Container>
      <ControlContainer>
        <Switch
          icons={[<StyledSun />, <StyledMoon />]}
          onChange={() => setIsDark((prev) => !prev)}
          id="mode"
          toggled={isDark}
        />
      </ControlContainer>
    </Wrapper>
  );
};

export default Contact;
