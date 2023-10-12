import { useEffect, useState } from "react";

// elements
import {  ProjectSectionContainer, ProjectSectionBackground, ProjectSectionTitle, 
          PictureContainer, PictureIconContainer, IconContainer, 
          ProjectPicture, ProjectTitle, ProjectDescription, 
          IconDescription, IconGroup, PictureLeft,
          PictureRight, PictureMenuContainer } from "./ProjectsElements";

// icons
import { AiFillHtml5 } from 'react-icons/ai';
import { FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiReact } from 'react-icons/di';

// images
import projectList from "./projectInfo";

const IconStyle = {
  fontSize:'28px',
}


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


  // for project showcase
  // - need list of pictures for each project
  // - make slider for different projects
  // - make pictures sizes standardized, container always same size

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
  )
}


// project showcase template
function ProjectShowcase({projectInfo, pictureIndex}){
  return(
    <>
      <ProjectTitle>{projectInfo.title}</ProjectTitle>
      
      <PictureIconContainer>
        <PictureContainer>
          <ProjectPicture src={projectInfo.pictures[pictureIndex]}/>
        </PictureContainer>

        <IconContainer>
          {
            projectInfo.icons.map(icon => {
              return(
                <IconGroup>
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
    </>
  )
}





export default ProjectSection;