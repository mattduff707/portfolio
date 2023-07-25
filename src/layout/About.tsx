import { css, styled } from 'styled-components';
import SectionBox from '../components/SectionBox';
import { Heading, Text, Input } from '../components/generic';
import { favorites, stack, tokens } from '../constants';
import { useState } from 'react';
import Star from '../components/icons/Star';

const imgWidth = 180;
const imgHeight = 180;

const StyledSectionBox = styled(SectionBox)`
  position: relative;
  /* padding-bottom: ${imgHeight / 2 + 32}px; */
`;

const Image = styled.img`
  width: ${imgWidth}px;
  height: ${imgHeight}px;
  border-radius: 12px;
  object-fit: cover;
  border: 5px solid var(--font-color);
`;

const StackWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const StackGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 24px;
  list-style: none;
  padding: 0;
  margin: 0;

  @media ${tokens.media.md} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${tokens.media.sm} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StackItem = styled.li<{ isMatch: boolean; isSearch: boolean }>`
  display: flex;
  align-items: center;
  font-size: var(--font-size-text-md);
  font-family: var(--font-family-text);
  font-weight: 600;
  transition: color 0.2s ease, opacity 0.2s ease;
  ${({ isMatch, isSearch }) => css`
    color: ${isMatch && isSearch ? 'var(--color-primary)' : 'var(--font-color)'};
    opacity: ${isMatch ? 1 : 0.5};
  `}
`;

const InputWrap = styled.label`
  position: relative;
`;
const LabelText = styled.span`
  position: absolute;
  top: -13px;
  left: 16px;
  border: 4px solid var(--font-color);
  border-radius: 12px;
  padding: 0px 4px;
  font-size: var(--font-size-text-xs);
  font-family: var(--font-family-text);
  background: var(--bg-color);
  transition: color 0.2s ease, background 0.4s ease;
  ${Input}:focus + & {
    color: var(--color-primary);
  }
`;

const StyledText = styled(Text)`
  display: flex;
  align-items: center;
  font-size: var(--font-size-text-xs);
  border: 3px solid var(--font-color);
  border-radius: 8px;
  padding: 4px 8px;
  width: fit-content;
  padding-right: 3px;
`;
const StyledStar = styled(Star)`
  fill: var(--color-primary);
  transform: translateY(-1px);
  width: 20px;
  height: 20px;
  transition: fill 0.4s ease;
  flex-shrink: 0;
`;

const About = ({ isDark }: { isDark: boolean }) => {
  const [search, setSearch] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <StyledSectionBox isDark={isDark} title={'About Me'}>
      <div style={{ paddingBottom: '24px' }}>
        <Heading>As a Person</Heading>
        <Text withIndent>
          A Midwesterner turned Pacific Northwest transplant. When I am not click clacking on a keyboard to bring life
          to the web you can find me tending to my garden, on a mindful nature walk, or kicking back and watching the
          sun drift beyond the horizon. My fiancé and I enjoy a relaxing day at home with our two puppies as much as we
          love a spontaneous vacation to a new locale. Let's talk about music, movies, and food!
        </Text>
      </div>
      <div style={{ paddingBottom: '24px' }}>
        <Heading>As an Engineer</Heading>
        <Text withIndent>
          A proud self taught developer who fears no technical challenge. I am equal parts independent productivity
          machine and patiently involved collaborator. I revel in delivering results and overcoming roadblocks along the
          way. I am always open to feedback as I have found no greater source of knowledge than that of my colleagues.
          Let's create something meaningful!
        </Text>
      </div>
      <StackWrap>
        <Heading>Stack</Heading>
        <InputWrap>
          <Input onChange={handleSearch} value={search} />
          <LabelText>Search</LabelText>
        </InputWrap>
        <StyledText>
          Favorites
          <span style={{ color: 'var(--color-primary)' }}>
            <StyledStar />
          </span>
        </StyledText>
        <StackGrid>
          {stack.map((item) => {
            const isMatch = item.toLowerCase().includes(search.toLowerCase());
            return (
              <StackItem isSearch={search.length > 0} isMatch={isMatch}>
                {item} {favorites.includes(item) && <StyledStar />}
              </StackItem>
            );
          })}
        </StackGrid>
      </StackWrap>
    </StyledSectionBox>
  );
};

export default About;
