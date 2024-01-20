import { useEffect, useState } from "react";


// images
import browsPicture from '../../assets/images/project_pics/custom_browser/main.png';
import browsPicture2 from '../../assets/images/project_pics/custom_browser/old.png';

// elements
import {  ProjectSectionContainer, ProjectSectionBackground, ProjectSectionTitle, 
          PictureContainer, PictureIconContainer, IconContainer, 
          ProjectPicture, ProjectTitle, ProjectDescription, 
          IconDescription, IconGroup, PictureLeft,
          PictureRight, PictureMenuContainer, ViewProject, NextProjectRight, NextProjectLeft, ProjectMenuItem, SkillsLearned } from "./ProjectsElements";

// icons
import { BiLinkExternal } from 'react-icons/bi';

// images
import projectList from "./projectInfo";
import PictureSlider from "./pictureSlider";

const IconStyle = {
  fontSize:'24px', 
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

  return(
    <>
      <ProjectSectionBackground>
        <ProjectSectionTitle>Project Showcase</ProjectSectionTitle>
        <ProjectSectionContainer>

          <PictureMenuContainer>
            <PictureLeft onClick={() => {leftProject(projectList)}}><NextProjectLeft/></PictureLeft>
            {projectList.map((project, index) => {
              return ( <ProjectMenuItem key={index} highlight={(index === projectIndex ? "true" : undefined)}>{project.shortTitle}</ProjectMenuItem> );
            })}
            <PictureRight onClick={() => {rightProject(projectList)}}><NextProjectRight/></PictureRight>
          </PictureMenuContainer>
          <ProjectShowcase projectInfo={projectList[projectIndex]} projectIndex={projectIndex}/>

          
        </ProjectSectionContainer>
      </ProjectSectionBackground>
    </>
  );
}


// project showcase template
function ProjectShowcase({projectInfo, projectIndex}){
  return(
    <div style={WrapperStyle}>
      <PictureSlider imageList={projectInfo.pictures} projectIndex={projectIndex}/>

      <ProjectTitle>{projectInfo.title}</ProjectTitle>
      <ProjectDescription>
        {projectInfo.description}
      </ProjectDescription>
      <SkillsLearned>
        {projectInfo.skills.map((skill, index) => {
          return (
            <>
              { (index !== 0)  ? <div>-</div> : null}
              <div key={index}>{skill}</div>
            </>
          );
        })}
      </SkillsLearned>
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

      <ViewProject href={projectInfo.link}>View Online <BiLinkExternal/></ViewProject>
    </div>
  );
}





export default ProjectSection;