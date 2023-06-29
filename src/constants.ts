import { styled } from 'styled-components';

export const tokens = {
  size: {
    maxWidth: '1000px',
  },
};

export const Text = styled.p`
  font-size: 1.2rem;
  font-family: 'Rowdies';
  text-indent: 32px;
`;

export const Button = styled.button`
  background: white;
  font-size: 1rem;
  font-family: 'Rowdies';
  border: none;
  cursor: pointer;
  padding: 4px 12px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &:after {
    content: '';
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
