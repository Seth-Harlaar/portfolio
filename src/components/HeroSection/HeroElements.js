import styled from 'styled-components';
import {keyframes} from 'styled-components';
import { Link as LinkS } from 'react-scroll';

import BackgroundImage from '../../images/background/abstract_dotted.avif';

export const HeroPaddingContainer = styled.div`
  position: relative;
  padding: 0 30px;
  margin-bottom: 30px;

  background: #0e182b;

  &:after {
    content: "";
    background-image: url(${BackgroundImage});
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.05;
  }
`

export const HeroContainer = styled.div`
  padding: 30px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 5vh 50px 5vh 50px;
  overflow: hidden;
  opacity: 1;
`

export const HeroPictureContainer = styled.div`
  flex-grow: 1;
  display:flex;
  justify-content: center;
`

export const HeroPicture = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
`



export const HeroText = styled.div`
  flex-grow: 1;
  padding-left: 80px;
`

export const HeroH1 = styled.h1`
  margin: 20px 0 10px 0;
  text-transform: uppercase;
  color: ${props => props.theme.highlight};
  font-size: 40px;
`
export const HeroH2 = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  color: ${props => props.theme.light};
  font-size: 15px;
`
export const HeroH3 = styled.h1`
  text-align: justify;
  font-weight: normal;
  color: #B6B6B6;
  font-size: 13px;
  letter-spacing: 0.5px;
  line-height: 1.25;
`



const shiftBackground = keyframes`
  0% {
    background-position: 0% 50%;
  }
  60% {
    background-position: 100% 50%;
  } 
  100% {
    background-position: 100% 50%;
  }  
`

export const HeroButton = styled(LinkS)`
  position: relative;
  top: 25vh;
  right: 20vh;
  height: 8vh;
  width: 18vw;

  display: flex;
  align-items: center;
  padding: 20px;

  background: ${props => props.theme.highlight};
  // background linear-gradient(-45deg, #FFA63D, #FF3D77, #338AFF, #3CF0C5);
  background: ${props => 'linear-gradient(-45deg, '+ props.theme.highlight +' 0%,'+ props.theme.highlight + ' 48%,'+ props.theme.gradientSecond +  ' 50%,'+ props.theme.highlight + ' 52%,'+ props.theme.highlight + ' 100%)'};
  background-size: 1200%;

  font-size: 3vh;
  font-weight: bold;
  color: ${props => props.theme.light};

  &:hover {
    cursor: pointer;
    animation: ${shiftBackground} 3s linear infinite;
  }
`



export const Spacer = styled.div`
  flex-grow: 1;
`

export const HeroArrow = styled.div`
  transform: scale(1, -1);  
`