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

const iconStyle = {
  fontSize:'50px',
  color:'#FCA311',
}


// for skill cards
const SkillCard = ({title, description, Icon, list}) => {
  
  return (
    <>
      <SkillContainer>
        {/* <Icon /> */}
        <Icon className="h-10 w-10 text-darkBg"/>
        <div>
          <SKillTitle>{title}</SKillTitle>
          <SkillDescription>{description}</SkillDescription>
          <SkillList>
            {
              list.map((item, index) =>{
                return(
                  <ListItem key={index}>{item}</ListItem>
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
            SkillBlocks.map((skill, index) =>{
              return(
                <SkillCard key={index} {...skill}/>
              )
            })
          }
        </CardContainer>

      </SkillSectionContainer>
    </>
  )
}

export default SkillsSection
