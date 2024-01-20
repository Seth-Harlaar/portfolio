import React, {useContext, useEffect, useState} from "react";

// components
import { ImageSlider, ImageSliderContainer, LeftArrow, Padder, RightArrow, SliderContainer, SliderImageContainer, SlidingImage } from "./ProjectsElements";

import {ScreenContext} from '../../providers/screenProvider';
import { ModalContext } from "../../providers/modalProvider";


function PictureSlider({imageList, projectIndex}){
  const imageListLength = imageList.length;

  // states
  const [index, setIndex] = useState(0);
  const [offset, setOffset] = useState(-100);

  const [canMoveRight, setCanMoveRight] = useState(true);
  const [canMoveLeft, setCanMoveLeft] = useState(false);

  // when project changes, reset index
  useEffect(() => {
    setOffset(-100);
    setIndex(0);
    setCanMoveLeft(false);
    
    if(imageListLength > 1){
      setCanMoveRight(true);
    }
  }, [projectIndex]);

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
  const {openModal} = useContext(ModalContext);

  let height = '400px';
  if(isSmallScreen || (isLrgScreen && !isMegaScreen)){
    height = '250px';
  }

  function showImageInModal(imageSrc){
    console.log('showing modal');
    openModal(<ImageForModal imageSrc={imageSrc}/>);
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
                return( <SlidingImage src={image} alt={"gallery"} key={index} onClick={() => showImageInModal(image)} /> );
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






function ImageForModal({imageSrc}){

  const pictureStyles = {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
    padding: '0 8px',
    userSelect: 'none',
  }

  return(
    <>
      {/* <div>asdfasdfasdf</div> */}
      <img style={pictureStyles} src={imageSrc} alt={"gallery"}/>
    </>
  )
}







export default PictureSlider;