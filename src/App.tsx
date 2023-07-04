import { styled, createGlobalStyle } from "styled-components";
import Content from "./layout/Content";
import GlobalFonts from "./fonts/fonts";
import { tokens } from "./constants";
import Contact from "./layout/Contact";

function App() {
  return (
    <main>
      <GlobalStyle />
      <GlobalFonts />
      <Content />
      <Contact />
    </main>
  );
}

const GlobalStyle = createGlobalStyle`
html {

  --font-size-text-lg: ${tokens.font.size.text.lg};
  --font-size-text-md: ${tokens.font.size.text.md};
  --font-size-text-sm: ${tokens.font.size.text.sm};

  --font-size-heading-xl: ${tokens.font.size.heading.xl};
  --font-size-heading-lg: ${tokens.font.size.heading.lg};
  --font-size-heading-md: ${tokens.font.size.heading.md};
  --font-size-heading-sm: ${tokens.font.size.heading.sm};

  --font-family-heading: ${tokens.font.family.heading};
  --font-family-text: ${tokens.font.family.text};

  --color-primary: ${tokens.color.primary};
  
}

button {
  font-family: var(--font-family-text);
  font-size: var(--font-size-text-md);
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  
}

/*
  1. Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
  2. Remove default margin
*/
* {
  margin: 0;
}
/*
  Typographic tweaks!
  3. Add accessible line-height
  4. Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
main, body, html {
  width: 100%;
  height: 100%;
}
/*
  5. Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
  6. Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
  7. Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
  8. Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
}
@font-face {
 font-family: "FontoVision";
 src: local("FontoVision"), url("/fonts/FontoVision/FontoVision.ttf") format("truetype");
}
`;
export default App;
