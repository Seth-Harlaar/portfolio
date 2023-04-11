import styled from 'styled-components'

export const HeroContainer = styled.div`
  background: var(--primary);
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 5vh 50px 5vh 50px;
  height: 90vh;
  overflow: hidden;
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
`

export const HeroH1 = styled.h1`
  margin: 20px 0 10px 0;
  text-transform: uppercase;
  font-size: 60px;
  color: var(--highlighter);
`
export const HeroH2 = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  color: var(--highlight);
  font-size: 20px;
`
export const HeroH3 = styled.h1`
  font-weight: normal;
  text-transform: uppercase;
  font-size: 40px;
  color: var(--dark-text);
`
