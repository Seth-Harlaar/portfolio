import  {
  SkillsTitle,
  SkillSectionContainer,
  SkillContainer,
  SKillTitle,
  SkillDescription,
  SkillList,
  CardContainer,
  ListItem,
} from './SkillsElements.js'


// icons
import { SkillBlocks } from './Data.js';

const IconStyle = {
  fontSize:'50px',
  color:'#FCA311',
}


// for skill cards
const SkillCard = ({title, description, icon, list}) => {
  
  return (
    <>
      <SkillContainer>
        {icon}
        <div>
          <SKillTitle>{title}</SKillTitle>
          <SkillDescription>{description}</SkillDescription>
          <SkillList>
            {
              list.map(item =>{
                return(
                  <ListItem>{item}</ListItem>
                )
              })
            }
          </SkillList>
        </div>
        
      </SkillContainer>
    </>
  )
}



const SkillsSection = () => {
  return (
    <>
      <SkillsTitle>My Skills</SkillsTitle>
      <SkillSectionContainer id={"skills"}>

        <CardContainer>
          {/* takes the skill block data from Data.js and maps each skill into a skill card */}
          {
            SkillBlocks.map(skill =>{
              return(
                <SkillCard {...skill}/>
              )
            })
          }
        </CardContainer>

      </SkillSectionContainer>
    </>
  )
}

export default SkillsSection
