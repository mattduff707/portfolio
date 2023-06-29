import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  padding-top: 24px;
  align-items: center;
  flex-direction: column;
  padding-bottom: 36px;
`;
const Name = styled.h1`
  font-size: 4rem;
  font-family: 'Baron';
  font-weight: 600;
  letter-spacing: 6px;
  font-style: italic;
  height: 80px;
`;
const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Baron';
  font-weight: 500;
  font-style: italic;
  letter-spacing: 2px;
`;

const Header = () => {
  return (
    <Wrapper>
      <Name>Matthew Duffy</Name>
      <Title>Full-Stack Engineer</Title>
    </Wrapper>
  );
};

export default Header;
