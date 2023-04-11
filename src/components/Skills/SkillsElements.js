import styled from 'styled-components'

export const SkillsTitle = styled.h1`
  font-size: 140px;
  font-weight: normal;
  padding-left: 200px;
  color: var(--barely-visible);
`

export const SkillContainer = styled.div`
`

export const SkillsColumnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 0px 100px 50px 100px;
  background: var(--primary);
`

export const SkillColumn = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  gap: 30px;

  height: 60vh;
  // width: 400px;
  background: var(--primary);
  color: var(--highlight);
`

export const SkillCard = styled.div`
  background: #1C1F22;
  flex-grow: 1;
  flex-grow: ${({ small }) => (small ? 3 : 7)}
`

export const SkillCardTitleContainer = styled.div`
  display: flex;
  align-items: center;
`

export const SkillCardPrev = styled.div`
  padding: 10px;
`

export const SkillCardFull = styled.div`
  padding: 10px;
  color: white;
  font-size: 20px;
`



export const SkillCardImg = styled.div`
  height: 100px;
  width: 100px;

  background: pink;
`

export const SkillCardTitle = styled.h1`
  flex-grow: 1;
  text-align: center;
  font-weight: normal;
  font-size: 30px;
`