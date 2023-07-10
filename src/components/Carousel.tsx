import React from 'react';
import { styled } from 'styled-components';
import Arrow from './icons/Arrow';

const Wrapper = styled.div`
  display: flex;
  padding: 12px;
  width: 100%;
  justify-content: center;
  align-items: center;
  padding-top: 24px;
  padding-bottom: 48px;
`;
const Track = styled.div<{ translate: number }>`
  display: flex;
  transition: transform 0.4s ease;
  transform: translateX(${({ translate }) => translate}%);
`;
const ImgWrap = styled.div`
  background: black;
  width: 600px;
  height: 600px;
  overflow: hidden;
  border: 5px solid black;
  border-radius: 12px;
  display: flex;
`;
const CarouselImg = styled.img`
  width: 600px;
  height: 600px;

  /* min-width: 600px;
  min-height: 600px; */
`;

const Filler = styled.div<{ flex: string }>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: ${({ flex }) => flex};
`;

const ArrowWrap = styled.div<{ translate: number }>`
  user-select: none;
  z-index: 1;
  display: grid;
  place-items: center;
  border: 5px solid black;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  transform: translateX(${({ translate }) => translate}px);
  background-color: white;
  cursor: pointer;
`;

const ArrowIcon = styled(Arrow)`
  width: 44px;
  height: 44px;
  transition: fill 0.2s ease;
  ${ArrowWrap}:hover & {
    fill: var(--color-primary);
  }
`;

const RightArrow = styled(ArrowIcon)``;

const LeftArrow = styled(ArrowIcon)`
  transform: rotate(180deg);
`;
const Carousel = ({ images }: { images: string[] }) => {
  const [activeImgIdx, setActiveImgIdx] = React.useState(0);

  const distance = -(activeImgIdx * 100);

  const showLeft = activeImgIdx > 0;
  const showRight = activeImgIdx < images.length - 1;
  return (
    <Wrapper>
      <Filler flex={'flex-end'}>
        {showLeft && (
          <ArrowWrap
            onClick={(e) => {
              e.preventDefault();
              setActiveImgIdx(activeImgIdx - 1);
            }}
            translate={43}
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
            onClick={(e) => {
              e.preventDefault();
              setActiveImgIdx(activeImgIdx + 1);
            }}
            translate={-43}
          >
            <RightArrow />
          </ArrowWrap>
        )}
      </Filler>
    </Wrapper>
  );
};

export default Carousel;
