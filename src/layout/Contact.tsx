import React from 'react';
import SectionBox from '../components/SectionBox';
import { styled } from 'styled-components';
import { Anchor, Text } from '../components/generic';

import Github from '../components/icons/Github';
import Email from '../components/icons/Email';
import LinkedIn from '../components/icons/LinkedIn';
import Resume from '../components/icons/Resume';

const Wrapper = styled.footer`
  --shadow-color: 0deg 0% 63%;
  position: fixed;
  bottom: 0px;
  width: 100%;
  border-top: 5px solid black;
  box-shadow: 0px -0.1px 0.1px hsl(var(--shadow-color) / 0.34), 0px -0.4px 0.5px -0.4px hsl(var(--shadow-color) / 0.34),
    0px -0.7px 0.8px -0.7px hsl(var(--shadow-color) / 0.34), 0.1px -1.1px 1.2px -1.1px hsl(var(--shadow-color) / 0.34),
    0.1px -1.8px 2px -1.4px hsl(var(--shadow-color) / 0.34), 0.2px -2.8px 3.2px -1.8px hsl(var(--shadow-color) / 0.34),
    0.2px -4.2px 4.7px -2.1px hsl(var(--shadow-color) / 0.34), 0.4px -6.2px 7px -2.5px hsl(var(--shadow-color) / 0.34);
`;

const Container = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 12px;
  list-style: none;
  padding: 0;
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

const Contact = () => {
  return (
    <Wrapper title={'Contact'}>
      <Container>
        <ContactItem>
          <EmailIcon />
          <Anchor>powerprogramming@hotmail.com</Anchor>
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
    </Wrapper>
  );
};

export default Contact;
