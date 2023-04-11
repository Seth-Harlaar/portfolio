import React from 'react'
import {
  HeroContainer,
  HeroPicture,
  HeroText,
  HeroH1,
  HeroH2,
  HeroH3,
  HeroPictureContainer
} from './HeroElements'
// import { Button } from '../ButtonElements'

import logo from '../../images/blk.jpg'

const HeroSection = () => {

  return (
    <>
      <HeroContainer id={'home'}>

        <HeroPictureContainer>
          <HeroPicture src={logo}/>
        </HeroPictureContainer>

        <HeroText>
          <HeroH2>hello, my name is</HeroH2>
          <HeroH1>seth harlaar</HeroH1>
          <HeroH3>i build software</HeroH3>
        </HeroText>

      </HeroContainer>
    </>
  )
}

export default HeroSection
