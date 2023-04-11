import React, {useState} from 'react'

import  {
  SkillsTitle,
  SkillContainer,
  SkillsColumnContainer,
  SkillColumn,
  SkillCard,
  SkillCardTitleContainer,
  SkillCardPrev,
  SkillCardFull,
  SkillCardImg,
  SkillCardTitle
} from './SkillsElements.js'



const SkillsSection = () => {
  const [col1, setCol1] = useState(true);
  const toggleCol1 = () => {
    setCol1(!col1)
  }

  const [col2, setCol2] = useState(false);
  const toggleCol2 = () => {
    setCol2(!col2)
  }

  const [col3, setCol3] = useState(true);
  const toggleCol3 = () => {
    setCol3(!col3)
  }
  
  return (
    <>

      <SkillContainer id={"skills"}>

        <SkillsTitle>skills</SkillsTitle>
        <SkillsColumnContainer>


          <SkillColumn>
            <SkillCard onClick={toggleCol1} small={col1}>
              <SkillCardTitleContainer>
                <SkillCardImg></SkillCardImg>
                <SkillCardTitle>Skill 1 Text</SkillCardTitle>
              </SkillCardTitleContainer>
              {col1 && 
                <SkillCardPrev>small desc</SkillCardPrev>
              }

              {!col1 && 
                <SkillCardFull> full desc</SkillCardFull>
              }
            </SkillCard>

            <SkillCard onClick={toggleCol1} small={!col1}>
              <SkillCardTitleContainer>
                <SkillCardImg></SkillCardImg>
                <SkillCardTitle>Skill 2 Text</SkillCardTitle>
              </SkillCardTitleContainer>
              {!col1 && 
                <SkillCardPrev>small desc</SkillCardPrev>
              }

              {col1 && 
                <SkillCardFull>full desc</SkillCardFull>
              }
            </SkillCard>

          </SkillColumn>


          {/* Col2 */}
          <SkillColumn>

            <SkillCard onClick={toggleCol2} small={col2}>
              <SkillCardTitleContainer>
                <SkillCardImg></SkillCardImg>
                <SkillCardTitle>Skill 1 Text</SkillCardTitle>
              </SkillCardTitleContainer>
              {col2 && 
                <SkillCardPrev>small desc</SkillCardPrev>
              }

              {!col2 && 
                <SkillCardFull> full desc</SkillCardFull>
              }
            </SkillCard>

            <SkillCard onClick={toggleCol2} small={!col2}>
              <SkillCardTitleContainer>
                <SkillCardImg></SkillCardImg>
                <SkillCardTitle>Skill 2 Text</SkillCardTitle>
              </SkillCardTitleContainer>
              {!col2 && 
                <SkillCardPrev>small desc</SkillCardPrev>
              }

              {col2 && 
                <SkillCardFull>full desc</SkillCardFull>
              }
            </SkillCard>

          </SkillColumn>


          {/* col3 */}
          <SkillColumn>

            <SkillCard onClick={toggleCol3} small={col3}>
              <SkillCardTitleContainer>
                <SkillCardImg></SkillCardImg>
                <SkillCardTitle>Skill 1 Text</SkillCardTitle>
              </SkillCardTitleContainer>
              {col3 && 
                <SkillCardPrev>small desc</SkillCardPrev>
              }

              {!col3 && 
                <SkillCardFull> full desc</SkillCardFull>
              }
            </SkillCard>

            <SkillCard onClick={toggleCol3} small={!col3}>
              <SkillCardTitleContainer>
                <SkillCardImg></SkillCardImg>
                <SkillCardTitle>Skill 2 Text</SkillCardTitle>
              </SkillCardTitleContainer>
              {!col3 && 
                <SkillCardPrev>small desc</SkillCardPrev>
              }

              {col3 && 
                <SkillCardFull>full desc</SkillCardFull>
              }
            </SkillCard>

          </SkillColumn>
        </SkillsColumnContainer>
      </SkillContainer>
    </>
  )
}

export default SkillsSection