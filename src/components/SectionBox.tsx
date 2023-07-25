import { ReactNode } from "react";
import { styled } from "styled-components";
import { tokens } from "../constants";
import { fadeIn } from "./generic";

const Wrapper = styled.div<{ isDark: boolean }>`
  --shadow-color: ${({ isDark }) => (isDark ? "30deg 6% 4%" : "34deg 9% 58%")};
  border-radius: 16px;
  border: 5px solid var(--font-color);
  padding: 20px;
  padding-top: 40px;
  padding-bottom: 32px;
  position: relative;
  background: var(--bg-color);
  box-shadow: 0.1px 0.1px 0.2px hsl(var(--shadow-color) / 0.34),
    0.4px 0.5px 0.7px -0.4px hsl(var(--shadow-color) / 0.34),
    0.7px 0.9px 1.3px -0.7px hsl(var(--shadow-color) / 0.34),
    1.1px 1.5px 2.1px -1.1px hsl(var(--shadow-color) / 0.34),
    1.8px 2.4px 3.4px -1.4px hsl(var(--shadow-color) / 0.34),
    2.8px 3.8px 5.3px -1.8px hsl(var(--shadow-color) / 0.34),
    4.3px 5.7px 8px -2.1px hsl(var(--shadow-color) / 0.34),
    6.3px 8.4px 11.8px -2.5px hsl(var(--shadow-color) / 0.34);

  opacity: 0;
  animation: ${fadeIn} 0.8s ease-in forwards;
  /* animation-delay: 0.3s; */
`;

const Title = styled.h2`
  font-size: var(--font-size-heading-md);
  width: fit-content;
  padding: 4px 16px;
  position: absolute;
  top: -35px;
  background: var(--bg-color);
  left: 16px;
  border: 5px solid var(--font-color);
  border-radius: 16px;
  font-family: var(--font-family-heading);
  letter-spacing: 2px;
  font-style: italic;
  font-weight: 300;
  @media ${tokens.media.sm} {
    font-size: var(--font-size-heading-sm);
    top: -30px;
  }
`;

const SectionBox = ({
  title,
  children,
  className,
  isDark,
}: {
  className?: string;
  title: string;
  children: ReactNode;
  isDark: boolean;
}) => {
  return (
    <Wrapper isDark={isDark} className={className}>
      <Title>{title}</Title>
      {children}
    </Wrapper>
  );
};

export default SectionBox;
