import { styled } from "styled-components";
import SectionBox from "../components/SectionBox";
import { Heading, Text } from "../components/generic";

const imgWidth = 180;
const imgHeight = 180;

const StyledSectionBox = styled(SectionBox)`
  position: relative;
  /* padding-bottom: ${imgHeight / 2 + 32}px; */
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: -${imgHeight / 2}px;
  left: 0px;
  width: 100%;
`;

const Image = styled.img`
  width: ${imgWidth}px;
  height: ${imgHeight}px;
  border-radius: 12px;
  object-fit: cover;
  border: 5px solid var(--font-color);
`;

const About = ({ isDark }: { isDark: boolean }) => {
  return (
    <StyledSectionBox isDark={isDark} title={"About Me"}>
      <div style={{ paddingBottom: "24px" }}>
        <Heading>As a Person</Heading>
        <Text withIndent>
          A Midwesterner turned Pacific Northwest transplant. When I am not
          click clacking on a keyboard to bring life to the web you can find me
          tending to my garden, on a mindful nature walk, or kicking back and
          watching the sun drift beyond the horizon. My fiancé and I enjoy a
          relaxing day at home with our two puppies as much as we love a
          spontaneous vacation to a new locale. Let's talk about music, movies,
          and food!
        </Text>
      </div>
      <div>
        <Heading>As an Engineer</Heading>
        <Text withIndent>
          A proud self taught developer who fears no technical challenge. I am
          equal parts independent productivity machine and patiently involved
          collaborator. I revel in delivering results and overcoming roadblocks
          along the way. I am always open to feedback as I have found no greater
          source of knowledge than that of my colleagues. Let's create something
          meaningful!
        </Text>
      </div>
      {/* <ImageWrapper>
        <Image src={dogpic} />
        <Image src={gip} />
        <Image src={nickcage} />
      </ImageWrapper> */}
    </StyledSectionBox>
  );
};

export default About;
