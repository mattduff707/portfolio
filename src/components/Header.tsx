import styled from "styled-components";
import { tokens } from "../constants";
import headerPic from "../images/header.png";
import headerDarkPic from "../images/headerDark.png";

const Wrapper = styled.div`
  display: flex;
  padding-top: 24px;
  align-items: center;
  flex-direction: column;
  padding-bottom: 36px;
  position: relative;

  height: 464px;
  @media ${tokens.media.sm} {
    height: 432px;
  }
  @media ${tokens.media.xs} {
    height: 380px;
  }
`;
// const Name = styled.h1`
//   font-size: var(--font-size-heading-xl);
//   font-family: var(--font-family-heading);
//   letter-spacing: 6px;
//   font-style: italic;
//   height: 80px;
//   font-weight: 600;

//   @media ${tokens.media.sm} {
//     font-size: var(--font-size-heading-lg);
//     height: 60px;
//   }
//   @media ${tokens.media.xs} {
//     font-size: 2.6rem;
//     height: 52px;
//   }
// `;
// const Title = styled.h2`
//   font-size: var(--font-size-heading-md);
//   font-family: var(--font-family-heading);
//   font-style: italic;
//   letter-spacing: 2px;
//   font-weight: 300;
//   @media ${tokens.media.sm} {
//     font-size: var(--font-size-heading-sm);
//   }
// `;
const Image = styled.img<{ isVisible: boolean }>`
  --shadow-color: 34deg 9% 58%;
  width: 380px;
  height: 380px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  box-shadow: 0.1px 0.1px 0.2px hsl(var(--shadow-color) / 0.34),
    0.4px 0.5px 0.7px -0.4px hsl(var(--shadow-color) / 0.34),
    0.7px 0.9px 1.3px -0.7px hsl(var(--shadow-color) / 0.34),
    1.1px 1.5px 2.1px -1.1px hsl(var(--shadow-color) / 0.34),
    1.8px 2.4px 3.4px -1.4px hsl(var(--shadow-color) / 0.34),
    2.8px 3.8px 5.3px -1.8px hsl(var(--shadow-color) / 0.34),
    4.3px 5.7px 8px -2.1px hsl(var(--shadow-color) / 0.34),
    6.3px 8.4px 11.8px -2.5px hsl(var(--shadow-color) / 0.34);

  opacity: ${({ isVisible }) => (isVisible ? "1" : "0")};
  transition: opacity 0.4s ease;

  @media ${tokens.media.sm} {
    width: 360px;
    height: 360px;
  }
  @media ${tokens.media.xs} {
    width: 300px;
    height: 300px;
  }
`;

const DarkImage = styled(Image)`
  --shadow-color: 30deg 6% 4%;
`;

const Header = ({ isDark }: { isDark: boolean }) => {
  return (
    <Wrapper>
      {/* <Name>Matthew Duffy</Name>
      <Image isDark={isDark} src={dogpic} />
      <Title>Full-Stack Engineer</Title> */}
      <Image
        isVisible={!isDark}
        src={headerPic}
        alt="Matthew Duffy holding a white puppy named Koia"
      />
      <DarkImage
        isVisible={isDark}
        src={headerDarkPic}
        alt="Matthew Duffy holding a white puppy named Koia"
      />
    </Wrapper>
  );
};

export default Header;
