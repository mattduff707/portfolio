import React from "react";
import { styled } from "styled-components";

const SVG = styled.svg`
  fill: var(--font-color);
`;

const Email = ({ className }: { className?: string }) => {
  return (
    <SVG
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 256 256"
      className={className}
    >
      <path
        fill="inherit"
        d="M224 44H32a12 12 0 0 0-12 12v136a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a12 12 0 0 0-12-12Zm-30.85 24L128 127.72L62.85 68ZM44 188V83.28l75.89 69.57a12 12 0 0 0 16.22 0L212 83.28V188Z"
      ></path>
    </SVG>
  );
};

export default Email;
