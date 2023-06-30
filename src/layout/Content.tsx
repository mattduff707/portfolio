import React from "react";
import styled from "styled-components";
import { tokens } from "../constants";
import Header from "../components/Header";
import About from "./About";
import Contact from "./Contact";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const ContentWrapper = styled.div`
  width: 100%;
  max-width: ${tokens.size.maxWidth};
`;
const Pad = styled.section`
  padding: 0px 24px;
  margin-bottom: 60px;
`;

const Content = () => {
  return (
    <Wrapper>
      <ContentWrapper>
        <Header />
        <Pad>
          <About />
        </Pad>
        <Pad>
          <Contact />
        </Pad>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Content;
