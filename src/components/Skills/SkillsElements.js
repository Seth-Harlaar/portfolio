import styled from 'styled-components'

export const SkillsTitle = styled.h1`
  margin-left: 30px;
  padding-bottom: 13px;
  font-size: 20px;
  font-weight: normal;
  color: #E5E5E5;
`

export const SkillSectionContainer = styled.div`
  margin: 0px 30px 30px 30px;
  // padding: 30px;
`

export const CardContainer = styled.div`
  display: flex;
  gap: 30px;
`

export const SkillContainer = styled.div`
  flex: 1;  
display: flex;
  gap: 15px;
  color: white;
  background: #0e182b;
  padding: 25px;
`

export const SKillTitle = styled.h1`
  font-size: 13px;
  padding-bottom: 8px;
`

export const SkillDescription = styled.h1`
  font-style: italic;
  font-size: 12px;
  padding-bottom: 8px;
  color: #B6B6B6;
`

export const SkillList = styled.ul`
  list-style-position: inside;
  list-style: none;
`

export const ListItem = styled.li`
  color: #B6B6B6;
  font-size: 12px;

  &:before {
    content: "• ";
    color: #FCA311;
    font-weight: bold;
    display: inline-block; 
    width: 1em;
  }
`