import React from 'react';
import { styled } from 'styled-components';
import { tokens } from '../constants';
import Arrow from './icons/Arrow';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 48px;
  position: relative;
`;
const Track = styled.div<{ translate: number }>`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(${({ translate }) => translate}%);
`;
const ImgWrap = styled.div`
  background: var(--bg-color);
  width: 600px;
  height: 600px;
  overflow: hidden;
  border: 5px solid var(--font-color);
  border-radius: 12px;
  display: flex;
  @media ${tokens.media.md} {
    width: 400px;
    height: 400px;
  }
  @media ${tokens.media.sm} {
    width: 280px;
    height: 280px;
  }
  @media ${tokens.media.xs} {
    width: 240px;
    height: 240px;
  }
`;
const CarouselImg = styled.img`
  width: 600px;
  height: 600px;
  @media ${tokens.media.md} {
    width: 400px;
    height: 400px;
  }
  @media ${tokens.media.sm} {
    width: 280px;
    height: 280px;
  }
  @media ${tokens.media.xs} {
    width: 240px;
    height: 240px;
  }
  /* min-width: 600px;
  min-height: 600px; */
`;

const Filler = styled.div<{ flex: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ flex }) => flex};
`;

const ArrowWrap = styled.div<{ isRight?: boolean }>`
  user-select: none;
  z-index: 1;
  display: grid;
  place-items: center;
  border: 5px solid var(--font-color);
  border-radius: 50%;
  width: 80px;
  height: 80px;
  transform: translateX(${({ isRight }) => (isRight ? '-' : '')}43px);
  background: var(--bg-color);
  cursor: pointer;

  @media ${tokens.media.md} {
    transform: translateX(${({ isRight }) => (isRight ? '-' : '')}33px);
    width: 60px;
    height: 60px;
  }
  @media ${tokens.media.sm} {
    transform: translateX(${({ isRight }) => (isRight ? '-' : '')}27px);
    width: 48px;
    height: 48px;
  }
  @media ${tokens.media.xs} {
    transform: translateX(${({ isRight }) => (isRight ? '-' : '')}23px);
    width: 40px;
    height: 40px;
  }
`;

const ArrowIcon = styled(Arrow)`
  width: 44px;
  height: 44px;
  transition: fill 0.2s ease;
  fill: var(--font-color);
  ${ArrowWrap}:hover & {
    fill: var(--color-primary);
  }
  @media ${tokens.media.md} {
    width: 36px;
    height: 36px;
  }
  @media ${tokens.media.sm} {
    width: 28px;
    height: 28px;
  }
  @media ${tokens.media.xs} {
    width: 24px;
    height: 24px;
  }
`;

const CountWrap = styled.div`
  position: absolute;
  z-index: 2;
  top: 0px;
  right: 50%;
  transform: translateX(50%);
  background: var(--bg-color);
  padding: 4px 8px;
  border-radius: 12px;
  border: 5px solid var(--font-color);
  font-size: var(--font-size-text-lg);
  font-family: var(--font-family-text);
  @media ${tokens.media.md} {
    font-size: var(--font-size-text-md);
  }
`;

const RightArrow = styled(ArrowIcon)``;

const LeftArrow = styled(ArrowIcon)`
  transform: rotate(180deg);
`;
const Carousel = ({ images }: { images: string[] }) => {
  const [activeImgIdx, setActiveImgIdx] = React.useState(0);
  const currentImg = activeImgIdx + 1;
  const totalImgs = images.length;

  const distance = -(activeImgIdx * 100);

  const showLeft = activeImgIdx > 0;
  const showRight = activeImgIdx < images.length - 1;
  return (
    <Wrapper>
      <CountWrap>
        {currentImg} / {totalImgs}
      </CountWrap>
      <Filler flex={'flex-end'}>
        {showLeft && (
          <ArrowWrap
            onClick={(e: any) => {
              e.preventDefault();
              setActiveImgIdx(activeImgIdx - 1);
            }}
          >
            <LeftArrow />
          </ArrowWrap>
        )}
      </Filler>
      <ImgWrap>
        <Track translate={distance}>
          {images.map((image) => (
            <CarouselImg key={image} src={image} alt="" />
          ))}
        </Track>
      </ImgWrap>
      <Filler flex={'flex-start'}>
        {showRight && (
          <ArrowWrap
            onClick={(e: any) => {
              e.preventDefault();
              setActiveImgIdx(activeImgIdx + 1);
            }}
            isRight
          >
            <RightArrow />
          </ArrowWrap>
        )}
      </Filler>
    </Wrapper>
  );
};

export default Carousel;
