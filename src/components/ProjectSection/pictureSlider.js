import React, {useContext, useEffect, useState} from "react";

// components
import { ImageSlider, ImageSliderContainer, LeftArrow, Padder, RightArrow, SliderContainer, SliderImageContainer, SlidingImage } from "./ProjectsElements";

import {ScreenContext} from '../../providers/screenProvider';


function PictureSlider({imageList}){
  const imageListLength = imageList.length;

  // states
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(-100);

  const [canMoveRight, setCanMoveRight] = useState(true);
  const [canMoveLeft, setCanMoveLeft] = useState(false);


  // when index changes, update moveability
  useEffect(() => {
    // right edge of images
    if(index === (imageListLength -1)){
      setCanMoveRight(false);
    }
    // left edge of images
    if(index === 0){
      setCanMoveLeft(false);
    }
  }, [index, imageListLength]);

  // index change handlers
  function decrementIndex(){
    setIndex(index - 1);
  }
  function incrementIndex(){
    setIndex(index + 1);
  }


  // moving images right and left
  function moveLeft(){
    if(canMoveLeft){
      setOffset(offset + 100);
      decrementIndex();
    }

    // if at right edge and moves left
    if(!canMoveRight){
      setCanMoveRight(true);
    }
  }

  function moveRight(){
    if(canMoveRight){
      setOffset(offset - 100);
      incrementIndex();
    }

    // if at left edge and moves right
    if(!canMoveLeft){
      setCanMoveLeft(true);
    }
  }

  // offset style
  const sliderOffset = `${offset}%`;

  const sliderOffsetStyle = {
    left: sliderOffset
  }

  const {isSmallScreen, isLrgScreen, isMegaScreen} = useContext(ScreenContext);

  let height = '400px';
  if(isSmallScreen || (isLrgScreen && !isMegaScreen)){
    height = '250px';
  }

  return(
    <>
      <SliderContainer className=" w-full m-auto overflow-hidden">
        <SliderImageContainer className="relative w-10/12 m-auto">
          {/* the image container that slides */}
          <ImageSliderContainer style={sliderOffsetStyle} height={height} >
            <ImageSlider className="absolute flex w-full">
              <Padder />
              {/* create each image */}
              {imageList.map((image, index) => {
                return( <SlidingImage src={image} alt={"gallery"} key={index}/> );
              })}
              
              <Padder />
            </ImageSlider>
          </ImageSliderContainer>

          <LeftArrow onClick={moveLeft} canmove={canMoveLeft ? "true": undefined}/>
          <RightArrow onClick={moveRight} canmove={canMoveRight ? "true": undefined}/>
        </SliderImageContainer>
      </SliderContainer>
    </>
  );
}

export default PictureSlider;