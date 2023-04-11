import React from 'react';

import {
  OtherContainer,
  OtherTitle,
  OtherTile,
  OtherTileContainer,
  OtherTilePreviewContainer,
  OtherDescription,
  OtherPicture
} from './OtherElements'

import inversePreview from '../../images/inverse_quad_preview.jpg'


const OtherSection = () => {
  return (
    <>

    {/* add a breaker section between this section and the one above */}
      <OtherContainer id={'other'}>
        <OtherTitle>other work</OtherTitle>

        <OtherTileContainer>
          <OtherTile>
            <OtherTilePreviewContainer>
              <OtherPicture src={inversePreview}></OtherPicture>
            </OtherTilePreviewContainer>

            <OtherDescription>
              asdfasdfasdf
            </OtherDescription>

          </OtherTile>

          <OtherTile>
            <OtherTilePreviewContainer>
              <OtherPicture src={inversePreview}></OtherPicture>
            </OtherTilePreviewContainer>

            <OtherDescription>
              asdfasdfasdf
            </OtherDescription>

          </OtherTile>

          <OtherTile>
            <OtherTilePreviewContainer>
              <OtherPicture src={inversePreview}></OtherPicture>
            </OtherTilePreviewContainer>

            <OtherDescription>
              asdfasdfasdf
            </OtherDescription>

          </OtherTile>
          

        </OtherTileContainer>

      </OtherContainer>
    </>
  )
}

export default OtherSection