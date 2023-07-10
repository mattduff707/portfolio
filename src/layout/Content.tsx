import styled from 'styled-components';
import Header from '../components/Header';
import { tokens } from '../constants';
import About from './About';
import Projects from './Projects';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding-bottom: 48px;
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
          <Projects />
        </Pad>
      </ContentWrapper>
    </Wrapper>
  );
};

export default Content;
