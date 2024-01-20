import React, { useContext } from 'react'
import {
  HeroContainer,
  HeroText,
  HeroH1,
  HeroH2,
  HeroH3,
  HeroPaddingContainer
} from './HeroElements'


import {ScreenContext} from '../../providers/screenProvider';

const HeroSection = () => {

  const {isSmallScreen} = useContext(ScreenContext);

  return (
    <>
      <HeroPaddingContainer>
        <HeroContainer id={'home'} smallscreen={isSmallScreen ? "true" : undefined}>

          <HeroText smallscreen={isSmallScreen ? "true" : undefined}>
            {/* Turning ideas into software ... something */}
            <HeroH2>hello, my name is</HeroH2>
            <HeroH1>seth harlaar</HeroH1>
            <HeroH3>
              I'm a recent computer engineering graduate with a strong foundation in software
              and hardware design, programming, and math. Proficient in multiple
              programming languages including JavaScript, C, and Dart. Experience with
              full stack development including React.js, Tailwind CSS, HTML, and Node.js.
              Effective problem solver and team player with good communication skills.
              Seeking opportunities to apply skills and knowledge in a dynamic and
              challenging environment.
            </HeroH3>
          </HeroText>

          {/* <HeroButton to="experience"
            smooth={true} duration={500} spy={true}
            exact='true' offset={-80} 
          >
            <div>
              More Info
            </div>
            <Spacer/>
            <HeroArrow>^</HeroArrow>
          </HeroButton> */}

        </HeroContainer>
      </HeroPaddingContainer>
    </>
  )
}

export default HeroSection
