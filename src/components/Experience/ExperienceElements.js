import styled from 'styled-components'



export const ExperienceTitle = styled.div`
  padding-left: 80vh;
  padding-bottom: 100px;
  font-size: 140px;
  font-weight: normal;
  color: var(--barely-visible);
`

export const ExperienceContainer = styled.div`
`


export const ExperienceCardContainer = styled.div`
  flex-wrap: wrap;
  display: flex;
  justify-content: space-around;
  gap: 50px;

  background: var(--primary);
`

// cards
export const ExperienceCardWrapper = styled.div`
  position: relative;  
  height: 400px;
  width: 40%;

`

export const ExperienceCard = styled.div`
  position: absolute;

  height: 100%;
  width: 100%;

  background: var(--highlighter);


  z-index: 2;
`




// floating text
export const WorkText = styled.h1`
  position: absolute;
  top: -65px;
  left: -50px;

  text-transform: uppercase;
  font-weight: normal;
  font-size: 80px;
  color: var(--barely-visible);
  z-index: 1;
`
export const SchoolText = styled.h1`
  position: absolute;
  top: 360px;
  left: -100px;

  text-transform: uppercase;
  font-weight: normal;
  font-size: 80px;
  color: var(--barely-visible);
  z-index: 1;
`
export const NonTechText = styled.h1`   
  position: absolute;
  top: 360px;
  left: -150px;

  text-transform: uppercase;
  font-weight: normal;
  font-size: 80px;
  color: var(--barely-visible);
  z-index: 1;
`