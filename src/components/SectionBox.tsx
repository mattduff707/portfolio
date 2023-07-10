import React, { ReactNode, useState } from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  --shadow-color: 0deg 0% 63%;
  border-radius: 16px;
  border: 5px solid black;
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 32px;
  position: relative;
  background: white;
  transition: height 0.3s ease;
  box-shadow: 0px 0.1px 0.1px hsl(var(--shadow-color) / 0.34), 0px 0.6px 0.7px -0.4px hsl(var(--shadow-color) / 0.34),
    0px 1.2px 1.3px -0.7px hsl(var(--shadow-color) / 0.34), 0px 1.9px 2.1px -1.1px hsl(var(--shadow-color) / 0.34),
    0px 3px 3.4px -1.4px hsl(var(--shadow-color) / 0.34), 0px 4.7px 5.3px -1.8px hsl(var(--shadow-color) / 0.34),
    0.1px 7.2px 8.1px -2.1px hsl(var(--shadow-color) / 0.34), 0.1px 10.6px 11.9px -2.5px hsl(var(--shadow-color) / 0.34);
`;

const Title = styled.h2`
  font-size: 2rem;
  width: fit-content;
  padding: 4px 16px;
  position: absolute;
  top: -35px;
  background: white;
  left: 16px;
  border: 5px solid black;
  border-radius: 16px;
  font-family: 'Baron';
  letter-spacing: 2px;
  font-style: italic;
  font-weight: 300;
`;

const SectionBox = ({ title, children, className }: { className?: string; title: string; children: ReactNode }) => {
  return (
    <Wrapper className={className}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default SectionBox;
