import { useEffect, useState } from "react";


// images
import browsPicture from '../../assets/images/project_pics/custom_browser/main.png';
import browsPicture2 from '../../assets/images/project_pics/custom_browser/old.png';

// elements
import {  ProjectSectionContainer, ProjectSectionBackground, ProjectSectionTitle, 
          PictureContainer, PictureIconContainer, IconContainer, 
          ProjectPicture, ProjectTitle, ProjectDescription, 
          IconDescription, IconGroup, PictureLeft,
          PictureRight, PictureMenuContainer, ViewProject } from "./ProjectsElements";

// icons
import { BiLinkExternal } from 'react-icons/bi';

// images
import projectList from "./projectInfo";
import PictureSlider from "./pictureSlider";

const IconStyle = {
  fontSize:'28px',
}

const WrapperStyle = {
  position:'relative',
}

const browsPics = [
  browsPicture,
  browsPicture2
];


const ProjectSection = () => {
  const [picIndex, setPicIndex] = useState(0);
  const [projectIndex, setProjectIndex] = useState(0);

  // updates the picture
  function nextPicture(pictureList){
    setPicIndex(picIndex + 1);
    if(picIndex >= pictureList.length - 1){
      setPicIndex(0);
    }
  }

  // updates the project
  function rightProject(projectList){
    setPicIndex(0);
    if(projectIndex + 1 >= projectList.length){
      setProjectIndex(0);
    } else {
      setProjectIndex(projectIndex + 1);
    }
  }

  function leftProject(projectList){
    setPicIndex(0);
    if(projectIndex-1 < 0){
      setProjectIndex(projectList.length-1);
    } else {
      setProjectIndex(projectIndex - 1);
    }
  }

  useEffect(() => {
    
    const interval = setInterval(() => {
      nextPicture(projectList[projectIndex].pictures);
    }, 3500);

    return () => clearInterval(interval);
  }, [picIndex]);

  return(
    <>
      <ProjectSectionBackground>
        <ProjectSectionTitle>Project Showcase</ProjectSectionTitle>
        <ProjectSectionContainer>
          
          <ProjectShowcase projectInfo={projectList[projectIndex]} pictureIndex={picIndex}/>

          

          <PictureMenuContainer>
            <PictureLeft onClick={() => {leftProject(projectList)}}>{'<'}</PictureLeft>
            <PictureRight onClick={() => {rightProject(projectList)}}>{'>'}</PictureRight>
          </PictureMenuContainer>
        </ProjectSectionContainer>
      </ProjectSectionBackground>
    </>
  );
}


// project showcase template
function ProjectShowcase({projectInfo, pictureIndex}){
  return(
    <div style={WrapperStyle}>
      <ProjectTitle>{projectInfo.title}</ProjectTitle>
      
      <PictureIconContainer>
        <PictureSlider imageList={projectInfo.pictures}/>
        <IconContainer>
          {
            projectInfo.icons.map((icon, index) => {
              return(
                <IconGroup key={index}>
                  <icon.name style={IconStyle}/>
                  <IconDescription>{icon.title}</IconDescription>
                </IconGroup>
              )
            })
          }
        </IconContainer>
      </PictureIconContainer>

      <ProjectDescription>
        {projectInfo.description}
      </ProjectDescription>
      <ViewProject href={projectInfo.link}><BiLinkExternal/></ViewProject>
    </div>
  )
}





export default ProjectSection;