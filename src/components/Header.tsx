import React from 'react';
import styled from 'styled-components';
import dogpic from '../images/dogpic.jpg';

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
`;
const Title = styled.h2`
  font-size: var(--font-size-heading-md);
  font-family: var(--font-family-heading);
  font-style: italic;
  letter-spacing: 2px;
  font-weight: 300;
`;
const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid black;
  margin-top: 12px;
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
