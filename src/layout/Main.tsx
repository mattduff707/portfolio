import React, { useState } from "react";
import Content from "./Content";
import Contact from "./Contact";
import { styled } from "styled-components";
import { tokens } from "../constants";

const Wrapper = styled.main<{ isDark: boolean }>`
  overflow: hidden;
  display: grid;
  height: 100%;
  max-height: 100vh;
  grid-template-rows: 1fr auto;
  --font-color: ${({ isDark }) =>
    isDark ? tokens.color.textDark : tokens.color.textLight};
  --bg-color: ${({ isDark }) =>
    isDark ? tokens.color.bgDark : tokens.color.bgLight};
  --color-primary: ${({ isDark }) =>
    isDark ? tokens.color.primaryDark : tokens.color.primaryLight};
  --page-bg: ${({ isDark }) =>
    isDark ? tokens.color.pageBgDark : tokens.color.pageBgLight};

  color: var(--font-color);
  transition: color 0.3s ease, background 0.3s ease;
  background: var(--page-bg);
  padding-bottom: 48px;
`;

const Main = () => {
  const [isDark, setIsDark] = useState(false);
  return (
    <Wrapper isDark={isDark}>
      <Content isDark={isDark} />
      <Contact setIsDark={setIsDark} isDark={isDark} />
    </Wrapper>
  );
};

export default Main;
