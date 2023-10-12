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
import { CgWebsite } from 'react-icons/cg';

const IconStyle = {
  fontSize:'50px',
  color:'#FCA311',
}


// for skill cards
const SkillCard = ({title, description, Icon}) => {
  return (
    <>
      <SkillContainer>
        {Icon}
        <div>
          <SKillTitle>Web Development</SKillTitle>
          <SkillDescription>blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah</SkillDescription>
          <SkillList>
            <ListItem>asdf</ListItem>
            <ListItem>asdf</ListItem>
            <ListItem>asdf</ListItem>
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
          <SkillCard Icon={CgWebsite}/>
          <SkillCard/>
          <SkillCard/>
        </CardContainer>

      </SkillSectionContainer>
    </>
  )
}

export default SkillsSection