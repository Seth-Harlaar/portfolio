// elements
import { ProjectSectionContainer, ProjectSectionBackground, ProjectSectionTitle, PictureContainer, PictureIconContainer, IconContainer, ProjectPicture, ProjectTitle, ProjectDescription, IconDescription, IconGroup } from "./ProjectsElements";

// icons
import { DiReact } from 'react-icons/di';

// images
import browsPicture from '../../images/project_pics/custom_browser/main.png';


const IconStyle = {
  fontSize:'40px',
  
}


const ProjectSection = () => {
  return(
    <>
      <ProjectSectionBackground>
        <ProjectSectionTitle>Project Showcase</ProjectSectionTitle>
        <ProjectSectionContainer>
          <ProjectTitle>Custom Browswer Homepage</ProjectTitle>
          
          <PictureIconContainer>
            <PictureContainer>
              <ProjectPicture src={browsPicture}/>
            </PictureContainer>

            <IconContainer>
              <IconGroup>
                <DiReact style={IconStyle}/>
                <IconDescription>React</IconDescription>
              </IconGroup>
              <IconGroup>
                <DiReact style={IconStyle}/>
                <IconDescription>React</IconDescription>
              </IconGroup>
              <IconGroup>
                <DiReact style={IconStyle}/>
                <IconDescription>React</IconDescription>
              </IconGroup>
              <IconGroup>
                <DiReact style={IconStyle}/>
                <IconDescription>React</IconDescription>
              </IconGroup>
            </IconContainer>
          </PictureIconContainer>

          <ProjectDescription>
            This project was built using React.js, Tailwind CSS, 
            Node.js, and JavaScript. It features a clock with the 
            time and date, local weather data, custom bookmarks,
            and a search bar with multiple search engine options.
          </ProjectDescription>

        </ProjectSectionContainer>
      </ProjectSectionBackground>
    </>
  )
}


export default ProjectSection;