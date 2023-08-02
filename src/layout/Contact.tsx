import React, { useState } from 'react';
import SectionBox from '../components/SectionBox';
import { css, styled } from 'styled-components';
import { Anchor, Heading, Text, fadeIn } from '../components/generic';

import Github from '../components/icons/Github';
import Email from '../components/icons/Email';
import LinkedIn from '../components/icons/LinkedIn';
import Resume from '../components/icons/Resume';
import { tokens } from '../constants';
import Switch from '../components/Switch';
import Moon from '../components/icons/Moon';
import Sun from '../components/icons/Sun';
import resumePdf from '../images/myResume.pdf';
import Chevron from '../components/icons/Chevron';

const Wrapper = styled.footer<{ open?: boolean; isDark: boolean }>`
  --shadow-color: ${({ isDark }) => (isDark ? '30deg 6% 4%' : '34deg 9% 58%')};
  position: fixed;
  bottom: 0px;
  width: 100%;
  border-top: 5px solid var(--font-color);
  background: var(--bg-color);
  z-index: 1000;
  height: auto;

  display: flex;

  box-shadow: 0px -0.1px 0.1px hsl(var(--shadow-color) / 0.34), 0px -0.3px 0.3px -0.4px hsl(var(--shadow-color) / 0.34),
    -0.1px -0.6px 0.7px -0.7px hsl(var(--shadow-color) / 0.34), -0.1px -0.9px 1px -1.1px hsl(var(--shadow-color) / 0.34),
    -0.2px -1.5px 1.7px -1.4px hsl(var(--shadow-color) / 0.34),
    -0.3px -2.3px 2.6px -1.8px hsl(var(--shadow-color) / 0.34), -0.5px -3.5px 4px -2.1px hsl(var(--shadow-color) / 0.34),
    -0.7px -5.1px 5.8px -2.5px hsl(var(--shadow-color) / 0.34);

  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in forwards;

  @media ${tokens.media.md} {
    /* display: none; */
    flex-direction: column;
    transform: translateY(${({ open }) => (open ? '0px' : '356px')});
    cursor: pointer;
    transition: transform 0.4s ease;
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
  @media ${tokens.media.md} {
    flex-direction: column;
  }
`;

const ControlContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-left: 5px solid var(--font-color);
  padding: 0 12px;

  @media ${tokens.media.md} {
    border-left: none;
    border-top: 5px solid var(--font-color);
    padding: 12px 0px;
    justify-content: center;
    align-items: center;
  }
`;

const ContactItem = styled.li`
  padding: 12px 0px;
  cursor: pointer;

  /* &:hover > ${Anchor}:after {
    transition: background 0.2s ease, width 0.2s ease;
    background: var(--color-primary);
    width: 60%;
  } */
`;
const StyledAnchor = styled(Anchor)`
  ${ContactItem}:hover &:after {
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
  transition: fill 0.2s ease;
`;
const StyledMoon = styled(Moon)`
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  fill: var(--bg-color);
  transition: fill 0.2s ease;
`;
const LinkWrap = styled.a`
  display: flex;
  gap: 4px;
  align-items: center;
  text-decoration: none;
`;
const HeadingWrap = styled.div`
  justify-content: center;
  align-items: center;
  gap: 4px;
  display: none;
  @media ${tokens.media.md} {
    display: flex;
  }
`;

const ContactHeading = styled.h4`
  font-size: var(--font-size-heading-md);
  font-family: var(--font-family-heading);
  text-align: center;
`;
const StyledChevron = styled(Chevron)<{ open?: boolean }>`
  transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(270deg)')};
  transition: transform 0.2s ease, fill 0.2s ease;
  fill: var(--font-color);
`;

const Contact = ({
  setIsDark,
  isDark,
}: {
  setIsDark: React.Dispatch<React.SetStateAction<boolean>>;
  isDark: boolean;
}) => {
  const [copied, setCopied] = useState(false);
  const [open, setOpen] = useState(false);

  const stopProp = (e: any) => e.stopPropagation();

  const handleCopy = (e: any) => {
    e.stopPropagation();
    navigator.clipboard.writeText('mattduff707@hotmail.com');
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <Wrapper isDark={isDark} open={open} onClick={() => setOpen(!open)} title={'Contact'}>
      <HeadingWrap>
        <ContactHeading>Contact</ContactHeading>
        <StyledChevron open={open} />
      </HeadingWrap>
      <Container>
        <ContactItem>
          <LinkWrap as="button" onClick={handleCopy}>
            <EmailIcon />
            <StyledAnchor copied={copied} staticSize={65}>
              {copied ? 'Copied!' : 'Email'}
            </StyledAnchor>
          </LinkWrap>
        </ContactItem>
        <ContactItem onClick={stopProp}>
          <LinkWrap href="https://github.com/mattduff707" target="_blank">
            <GithubIcon />
            <StyledAnchor>GitHub</StyledAnchor>
          </LinkWrap>
        </ContactItem>
        <ContactItem onClick={stopProp}>
          <LinkWrap href="https://www.linkedin.com/in/mattduff707/" target="_blank">
            <LinkedInIcon />
            <StyledAnchor>LinkedIn</StyledAnchor>
          </LinkWrap>
        </ContactItem>
        <ContactItem onClick={stopProp}>
          <LinkWrap href={resumePdf} target="_blank">
            <ResumeIcon />
            <StyledAnchor>Resume</StyledAnchor>
          </LinkWrap>
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
