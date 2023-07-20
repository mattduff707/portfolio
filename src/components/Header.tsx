import React from "react";
import styled from "styled-components";
import dogpic from "../images/dogpic.jpg";
import { tokens } from "../constants";

const Wrapper = styled.div`
  display: flex;
  padding-top: 24px;
  align-items: center;
  flex-direction: column;
  padding-bottom: 36px;
`;
const Name = styled.h1`
  font-size: var(--font-size-heading-xl);
  font-family: var(--font-family-heading);
  letter-spacing: 6px;
  font-style: italic;
  height: 80px;
  font-weight: 600;

  @media ${tokens.media.sm} {
    font-size: var(--font-size-heading-lg);
    height: 60px;
  }
  @media ${tokens.media.xs} {
    font-size: 2.6rem;
    height: 52px;
  }
`;
const Title = styled.h2`
  font-size: var(--font-size-heading-md);
  font-family: var(--font-family-heading);
  font-style: italic;
  letter-spacing: 2px;
  font-weight: 300;
  @media ${tokens.media.sm} {
    font-size: var(--font-size-heading-sm);
  }
`;
const Image = styled.img`
  --shadow-color: 0deg 0% 63%;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  border: 5px solid black;
  margin-top: 12px;
  box-shadow: 0px 0.1px 0.1px hsl(var(--shadow-color) / 0.34),
    0px 0.6px 0.7px -0.4px hsl(var(--shadow-color) / 0.34),
    0px 1.2px 1.3px -0.7px hsl(var(--shadow-color) / 0.34),
    0px 1.9px 2.1px -1.1px hsl(var(--shadow-color) / 0.34),
    0px 3px 3.4px -1.4px hsl(var(--shadow-color) / 0.34),
    0px 4.7px 5.3px -1.8px hsl(var(--shadow-color) / 0.34),
    0.1px 7.2px 8.1px -2.1px hsl(var(--shadow-color) / 0.34),
    0.1px 10.6px 11.9px -2.5px hsl(var(--shadow-color) / 0.34);

  @media ${tokens.media.sm} {
    width: 240px;
    height: 240px;
  }
`;

const Header = () => {
  return (
    <Wrapper>
      <Name>Matthew Duffy</Name>
      <Image src={dogpic} />
      <Title>Full-Stack Engineer</Title>
    </Wrapper>
  );
};

export default Header;
