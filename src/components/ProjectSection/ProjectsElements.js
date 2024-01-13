import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";
import { FaArrowLeft, FaArrowRight  } from "react-icons/fa";

import styled from 'styled-components';
import backgroundImage2 from '../../assets/images/background/background.webp';


export const ProjectSectionBackground = styled.div`
  padding: 0 30px 30px 30px;
`
  
export const ProjectSectionContainer = styled.div`
  padding: 30px 0;
  background-color: #0e182b;
  
  position: relative;n

  &:before {
    content: "";
    background-image: url(${backgroundImage2});
    background-size: 100%;
    filter: grayscale(50%);
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.05;
    z-index: -1;
  }
`

export const ProjectSectionTitle = styled.h1`
  padding-bottom: 13px;
  font-size: 19px;
  color: #E5E5E5;
`

export const ProjectTitle = styled.h1`
  color: #E5E5E5;
  font-size: 14px;
  padding-left: 50px;
  padding-top: 35px;
  text-transform: uppercase;
`

export const PictureIconContainer = styled.div`
  display: flex;
  padding-bottom: 10px;
`

export const PictureContainer = styled.div`
  display: flex;
  align-items: center;
  height: 387px;
  width: 580px;
  margin-right: 20px;
  outline: 2px solid #FCA311;
  padding: 10px;
  background-color: #05080F;
`

export const PictureMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 700;
  color: white;
  padding-bottom: 13px;
`

export const ProjectMenuItem = styled.div`
  color: ${props => props.highlight ? "white" : "rgba(255,255,255,0.2)"};
`

export const PictureLeft = styled.div`
  color: white;
  &:hover {
    color: green;
    cursor: pointer;
  }
`

export const PictureRight = styled.div`
  color: white;
  &:hover {
    color: green;
    cursor: pointer;
  }
`


export const ProjectPicture = styled.img`
  width: 100%;
`

export const IconGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: #B6B6B6;

  transition: 150ms;
  &:hover {
    color: #FCA311;
  }
`

export const IconContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  text-align: center;
  margin-left: 50px;
`

export const IconDescription = styled.h1`
  padding-top: 2px;
  font-size: 12px;
`


export const ProjectDescription = styled.p`
  width: 70%;
  margin-left: 50px;
  padding: 20px 0;
  text-align: justify;
  font-size: 15px;
  color: #B6B6B6;
`


export const ViewProject = styled.a`
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: #B6B6B6;

  &:hover {
    color: #FCA311;
  }
`

export const NextProjectRight = styled(FaArrowRight)`
  font-size: 22px;
  color: white;
`

export const NextProjectLeft = styled(FaArrowLeft)`
  font-size: 22px;
  color: white;
`



// picture slider 
export const SliderContainer = styled.div`
  width: 100%;
  margin: auto;
  overflow: hidden;
`

export const SliderImageContainer = styled.div`
  position: relative;
  width: 83%;
  margin: auto;
`

// offset
export const ImageSliderContainer = styled.div`
  position: relative;
  height: ${props => props.height};
  width: 100%;
  transition-duration: 100ms;
`

export const ImageSlider = styled.div`
  height: 100%;
  position: absolute;
  display: flex;
  width: 100%;
`

export const SlidingImage = styled.img`
  flex: none;
  height: 100%;
  width: 100%;
  object-fit: cover;
  padding: 0 8px;
  user-select: none;
`


export const Padder = styled.div`
  flex: none;
  height: 100%;
  width: 100%;
  background-color: #181f30;
  padding: 0 8px;
  background-clip: content-box;
`

export const LeftArrow = styled(IoMdArrowDropleftCircle)`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  font-size: 28px;
  &:hover {
    cursor: ${props => props.canmove ? 'pointer' : 'default'};
  }
  color: ${props => props.canmove ? 'rgb(252, 163, 17)' : 'rgb(252, 252, 252, 0.5 )'};
`

export const RightArrow = styled(IoMdArrowDroprightCircle)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  font-size: 28px;
  &:hover {
    cursor: ${props => props.canmove ? 'pointer' : 'default'};
  }
  color: ${props => props.canmove ? 'rgb(252, 163, 17)' : 'rgb(252, 252, 252, 0.5 )'};
`