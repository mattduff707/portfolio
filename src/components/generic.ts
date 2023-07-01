import { styled } from "styled-components";
import { tokens } from "../constants";

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
  background: white;
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
    background: black;
    border-radius: 32px;
    transition: background 0.2s ease, width 0.2s ease;
  }
  &:hover:after {
    transition: background 0.2s ease, width 0.2s ease;
    background: #ff367c;
    width: 60%;
  }
`;
export const Anchor = styled.a`
  background: white;
  font-size: var(--font-size-text-md);
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
    width: 100%;
    height: 3px;
    background: black;
    border-radius: 32px;
    transition: background 0.2s ease, width 0.2s ease;
  }
  &:hover:after {
    transition: background 0.2s ease, width 0.2s ease;
    background: var(--color-primary);
    width: 60%;
  }
`;
