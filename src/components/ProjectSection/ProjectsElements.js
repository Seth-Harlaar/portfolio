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
  flex: 1;
  height: 550px;
  outline: 2px solid #FCA311;
  margin-right: 20px;
  padding: 10px;
`

export const PictureMenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
`

export const PictureLeft = styled.div`
  
  color: white;

  &:hover {
    color: green;
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