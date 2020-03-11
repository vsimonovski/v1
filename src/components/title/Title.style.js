import styled, { keyframes } from 'styled-components';

export const BackgroundLine = styled.span`
  &::before {
    background-color: ${props => props.theme.bgLineColor};
    position: absolute;
    top: 43%;
    left: 0;
    right: 5px;
    height: 13px;
    margin-top: -5px;
    content: '';
    z-index: -1;
  }

  @media screen and (max-width: 831px) {
    &::before {
      display: none;
    }
  }
`;

export const Emoji = styled.span`
  padding: 10px;
  font-size: 5.4rem;

  @media screen and (max-width: 480px) {
    font-size: 3.5rem;
  }
`;

export const EmojiWithAttrs = styled(Emoji).attrs({
  role: 'img',
  'aria-label': 'heart'
})``;

export const Intro = styled.h1`
  display: inline-block;
  margin: 0;
  position: relative;
  z-index: 1;
  font-family: 'ChunkFive', serif;
  font-weight: 700;
  font-size: 7.2rem;
  letter-spacing: 1.5px;

  @media screen and (max-width: 480px) {
    font-size: 4.5rem;
  }
`;

const wobble = keyframes`
  from {
    transform: none;
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -10deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 8deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 5deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: none;
  }
`;

export const Wave = styled.span`
  &::before {
    position: absolute;
    left: -73px;
    content: '👋';
    animation-name: ${wobble};
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: both;
    font-size: 5.4rem;
    display: inline-block;
    padding-top: 20px;
    margin-right: 18px;
  }

  @media screen and (max-width: 500px) {
    &::before {
      display: none;
    }
  }
`;
