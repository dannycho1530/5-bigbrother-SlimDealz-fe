import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CarouselContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const CarouselIndicators = styled.ol`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  z-index: 1;

  li {
    width: 10px;
    height: 10px;
    background-color: rgba(255, 255, 255, 0.5);
    margin: 0 5px;
    border-radius: 50%;
    cursor: pointer;
  }

  li.active {
    background-color: #fff;
  }
`;

const CarouselInner = styled.div<{ activeIndex: number }>`
  display: flex;
  transform: translateX(${(props) => -props.activeIndex * 100}%);
  transition: transform 0.5s ease-in-out;
`;

const CarouselItem = styled.div<{ backgroundImage: string }>`
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  background-image: url(${(props) => props.backgroundImage});
`;

const CarouselControlPrev = styled.a`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 2;
`;

const CarouselControlNext = styled.a`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  width: 50px;
  height: 50px;
  cursor: pointer;
  z-index: 2;
`;

const ControlIcon = styled.span<{ isPrev?: boolean }>`
  display: inline-block;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  mask: ${(props) =>
    props.isPrev
      ? 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M11.854 1.646a.5.5 0 0 0-.708 0l-6.5 6.5a.5.5 0 0 0 0 .708l6.5 6.5a.5.5 0 0 0 .708-.708L5.707 8l6.147-6.146a.5.5 0 0 0 0-.708z%27/%3e%3c/svg%3e")'
      : 'url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 16 16%27 fill=%27%23fff%27%3e%3cpath fill-rule=%27evenodd%27 d=%27M4.146 14.354a.5.5 0 0 1 0-.708L10.293 8 4.146 1.854a.5.5 0 1 1 .708-.708l6.5 6.5a.5.5 0 0 1 0 .708l-6.5 6.5a.5.5 0 0 1-.708 0z%27/%3e%3c/svg%3e")'};
`;

const images = [
  'https://ichef.bbci.co.uk/images/ic/960x960/p08634k6.jpg',
  'http://s9.favim.com/orig/130806/flower-flowers-photography-pink-Favim.com-833641.jpg',
  'https://4.bp.blogspot.com/-pxMLcrD3N7I/UjAMNkqM43I/AAAAAAAAABQ/2-etadUS_48/s640/flowers.jpg'
];

const Banner: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <CarouselContainer>
      <CarouselIndicators>
        {images.map((_, index) => (
          <li
            key={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => goToSlide(index)}
          ></li>
        ))}
      </CarouselIndicators>

      <CarouselInner activeIndex={activeIndex}>
        {images.map((image, index) => (
          <CarouselItem key={index} backgroundImage={image} />
        ))}
      </CarouselInner>

      <CarouselControlPrev onClick={goToPrevSlide}>
        <ControlIcon isPrev />
      </CarouselControlPrev>
      <CarouselControlNext onClick={goToNextSlide}>
        <ControlIcon />
      </CarouselControlNext>
    </CarouselContainer>
  );
};

export default Banner;
