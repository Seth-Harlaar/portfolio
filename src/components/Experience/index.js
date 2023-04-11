import React from 'react'

import {
  ExperienceTitle,
  ExperienceCard,
  ExperienceCardContainer,
  ExperienceContainer,
  WorkText,
  ExperienceCardWrapper,
  SchoolText,
  NonTechText
} from './ExperienceElements'




const ExperienceSection = () => {
  return (
    <>
      <ExperienceContainer id={'experience'}>
        <ExperienceTitle>experience</ExperienceTitle>

        <ExperienceCardContainer>
          
          <ExperienceCardWrapper>
            <ExperienceCard>
              asdf
            </ExperienceCard>
            <WorkText>work exp</WorkText>
          </ExperienceCardWrapper>

          <ExperienceCardWrapper>
            <ExperienceCard>
              asdf
            </ExperienceCard>
            <SchoolText>some school</SchoolText>
          </ExperienceCardWrapper>

          <ExperienceCardWrapper>
            <ExperienceCard>
                asdf
            </ExperienceCard>
            <NonTechText>non-tech work</NonTechText>
          </ExperienceCardWrapper>

        </ExperienceCardContainer>
      </ExperienceContainer>
    </>
  )
}

export default ExperienceSection