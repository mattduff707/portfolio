import React from 'react';
import styled from 'styled-components';
import { tokens } from '../constants';
import Header from '../components/Header';
import About from './About';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${tokens.size.maxWidth};
`;

const Content = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <About />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Content;
