import React from 'react';

import { DocTileContainer, PapersContainer, StatContainer } from './OtherElements'
import otherContent from "../../assets/content/otherContent";
import Section from '../Reusable/section';


// 
const DocTile = ({paper}) => {

  return (
    <>
      <DocTileContainer>
        <h1>{paper.title}</h1>
        <div>
          Topics: 
          {paper.topics.map((topic, index) => {
            return ( <h1 key={index}>{topic}</h1> )
          })}
        </div>
        <p>{paper.desc}</p>

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
    </>
  )
}


const OtherSection = () => {

  return (
    <>
      <Section title={'Other Work'}>
        <PapersContainer>
          {otherContent.map((project, index) => {
            return (
              <>
                <DocTile paper={project} key={index}></DocTile>
              </>
            )
          })}

        </PapersContainer>
      </Section>
    </>
  )
}

export default OtherSection;