import styled from "styled-components";
import Header from "../components/Header";
import { tokens } from "../constants";
import About from "./About";
import Projects from "./Projects";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  overflow: auto;
  justify-content: center;

  &::-webkit-scrollbar {
    width: 16px;
    outline: 5px solid var(--font-color);
    border-top: none;
    border-bottom: none;
  }

  &::-webkit-scrollbar-thumb {
    /* background-color: red; */
    background-color: var(--font-color);
    border: 3px solid var(--bg-color);
    border-radius: 40px;

    &:hover {
      background-color: var(--color-primary);
    }
  }
`;
const ContentWrapper = styled.div`
  height: auto;
  width: 100%;
  max-width: ${tokens.size.maxWidth};
`;
const Pad = styled.section`
  padding: 0px 24px;
  margin-bottom: 60px;
  @media ${tokens.media.sm} {
    padding: 0px 12px;
  }
`;
const BottomPad = styled.div`
  height: 1px;
  width: 100%;
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
          <Projects />
        </Pad>
        <BottomPad />
      </ContentWrapper>
    </Wrapper>
  );
};

export default Content;
