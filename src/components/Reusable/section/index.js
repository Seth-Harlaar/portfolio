import React from "react";
import { ProjectSectionBackground } from "./SectionElement";







function Section({title, children}){
  return (
    <>
      <ProjectSectionBackground data-aos="fade-right">
        <h1>{title}</h1>
        <div>
          {children}
        </div>
      </ProjectSectionBackground>
    </>
  );
}



export default Section;