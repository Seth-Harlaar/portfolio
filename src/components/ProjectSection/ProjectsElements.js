import { IoMdArrowDropleftCircle, IoMdArrowDroprightCircle } from "react-icons/io";

import styled from 'styled-components';


export const ProjectSectionBackground = styled.div`
  padding: 0 30px 30px 30px;
`
  
export const ProjectSectionContainer = styled.div`
  padding: 30px;
  background-color: #0e182b;
`

export const ProjectSectionTitle = styled.h1`
  padding-bottom: 13px;
  font-size: 19px;
  color: #E5E5E5;
`

export const ProjectTitle = styled.h1`
  color: #E5E5E5;
  font-size: 14px;
  padding-bottom: 10px;
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
    transform: scale(1.1);
    color: #FCA311;
  }

`

export const IconContainer = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100px;

  padding: 50px 0;
`

export const IconDescription = styled.h1`
  font-size: 12px;
`


export const ProjectDescription = styled.p`
  height: 50px;
  width: 70%;
  margin-left: 20px;
  text-align: justify;
  font-size: 13px;
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
  height: 400px;
  width: 100%;
  transition-duration: 100ms;
`

export const ImageSlider = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
`

export const SlidingImage = styled.img`
  flex: none;
  height: 400px;
  width: 100%;
  object-fit: cover;
  padding: 0 8px;
  user-select: none;
`


export const Padder = styled.div`
  flex: none;
  height: 400px;
  width: 100%;
  background-color: rgb(252, 252, 252, 0.05 );
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