import { css, keyframes, styled } from "styled-components";
import { tokens } from "../constants";

const expand = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export const Heading = styled.h4<{ delay?: number }>`
  font-size: var(--font-size-heading-sm);
  font-family: var(--font-family-text);
  font-weight: 500;
  margin-bottom: 8px;
  &:after {
    content: "";
    display: block;
    height: 3px;
    background: var(--font-color);
    border-radius: 24px;
    animation: ${expand} 0.5s ease-out forwards;
    width: 0%;
    /* ${({ delay }) => `animation-delay: ${delay}s;`} */
  }
  @media ${tokens.media.sm} {
    font-size: var(--font-size-heading-xs);
  }
`;
export const Text = styled.p<{ withIndent?: boolean }>`
  --font-size-text: var(--font-size-text-md);

  @media ${tokens.media.sm} {
    --font-size-text: var(--font-size-text-sm);
  }

  font-size: var(--font-size-text);
  font-family: var(--font-family-text);
  ${({ withIndent }) =>
    withIndent &&
    `
    text-indent: 32px;
  `}
`;

export const Button = styled.button`
  background: var(--bg-color);
  font-size: 1rem;
  font-family: var(--font-family-text);
  border: none;
  cursor: pointer;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:after {
    content: "";
    display: block;
    width: 110%;
    height: 5px;
    background: var(--font-color);
    border-radius: 32px;
    transition: background 0.2s ease, width 0.2s ease;
  }
  &:hover:after {
    transition: background 0.2s ease, width 0.2s ease;
    background: #ff367c;
    width: 60%;
  }
`;
export const Anchor = styled.a<{ staticSize?: number; copied?: boolean }>`
  background: var(--bg-color);
  font-size: var(--font-size-text-md);
  font-family: var(--font-family-text);
  border: none;
  cursor: pointer;
  padding: 4px 12px;
  padding-left: 4px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-decoration: none;
  color: var(--font-color);

  ${({ staticSize, copied }) =>
    staticSize &&
    css`
      width: ${staticSize}px;
      padding-left: ${copied ? "16px" : "4px"};
    `}

  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: var(--font-color);
    border-radius: 32px;
    transition: background 0.2s ease, width 0.2s ease;
  }
  &:hover:after {
    transition: background 0.2s ease, width 0.2s ease;
    background: var(--color-primary);
    width: 60%;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 4px solid var(--font-color);
  border-radius: 12px;
  font-size: var(--font-size-text-md);
  font-family: var(--font-family-text);
  padding: 14px 16px 4px;
  background: var(--bg-color);
  outline: none;
  color: var(--font-color);
`;
