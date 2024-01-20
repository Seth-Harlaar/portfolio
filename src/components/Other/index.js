import React, {useState} from 'react';

import { DocTileContainer, PapersContainer, StatContainer } from './OtherElements'
import otherContent from "../../assets/content/otherContent";

import deepqPreview from '../../assets/images/deep_q_paper.png'
import hvacPreview from '../../assets/images/hvac.png'
import inversePreview from '../../assets/images/inverse_quad_preview.jpg'

import hvacDoc from '../../assets/papers/hvac.pdf'
import deepDoc from '../../assets/papers/deepq.pdf'
import Section from '../Reusable/section';

const hvacDesc = 'This was a design project me and my partners completed as our capstone project. We designed an automatic HVAC zoning system that could save money and control the temperature of each room.'
const deepqDesc = 'In this project me and my partner designed a task scheduling algorithm that uses a Deep Q-Network to determine execution order.'
const inverseDesc = 'A short research paper covering the topic of inverse quadratic interpolation, a root finding algorithm. Includes details of the algorithm and implementation in Matlab.'



const papers = [
  {
    'title': 'DQN Task Scheduling',
    'img': deepqPreview,
    'desc':deepqDesc,
    'doc': deepDoc
  }, 

];


// 
const DocTile = ({paper}) => {

  return (
    <>
      {otherContent.map((project, index) => {
        return(
          
          <DocTileContainer>
            <h1 key={index}>{project.title}</h1>
            <div>
              Topics: 
              {project.topics.map((topic, index) => {
                return ( <h1 key={index}>{topic}</h1> )
              })}
            </div>
            <p>{project.desc}</p>

            {/* stats */}
            <div>
              <StatContainer>
                <div>
                  <div>
                    870
                  </div>
                  <div>
                    words
                  </div>
                </div>
              </StatContainer>
              <div>read</div>
            </div>
          </DocTileContainer>
        );
      })}
    </>
  )
}


const OtherSection = () => {

  return (
    <>
      <Section title={'Other Work'}>
        <PapersContainer>
          {papers.map((paper, index) => {
            return(
              <>
                <DocTile paper={paper} key={index}></DocTile>
              </>
            );
          })}
        </PapersContainer>
      </Section>
    </>
  )
}

export default OtherSection;