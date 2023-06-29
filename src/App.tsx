import { styled, createGlobalStyle } from 'styled-components';
import Content from './layout/Content';
import GlobalFonts from './fonts/fonts';
function App() {
  return (
    <main>
      <GlobalStyle />
      <GlobalFonts />
      <Content />
    </main>
  );
}

const GlobalStyle = createGlobalStyle`
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
