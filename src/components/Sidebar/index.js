import React from 'react'

// elements
import { SidebarContainer, ProfileCard, ProfilePic, ProfileName, ProfileTitle, ProfilePicContainer, ProfileLocation, ContactContainer, ResumeDownloadContainer, ResumeDownloadPhrase, } from './SidebarElements';
import { ContactTitle, ContactsList, ContactsListContainer, ContactItem } from './SidebarElements';
import { SkillsSectionContainer, SkillsTitle, SubjectTitle, SubjectCard, SubjectDecscription, DashedDivider } from './SidebarElements';

// icons
import { AiFillLinkedin, AiFillCode, AiOutlineDownload } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FaPhoneSquareAlt, FaGithubSquare, FaMobile } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

// pictures
import logo from '../../images/seth_pic.jpg'

// styles
const IconStyle = {
  fontSize:'14px',
  marginRight:'5px',
  color:'#FCA311',
}


// components

const Divider = () => {
  return (
    <>
      {/* <hr style={{color:'#FCA311'}}/> */}
      <hr/>
    </>
  )
}

const ProfileSection = () => {
  return (
    <>
      <ProfileCard>
        <ProfilePicContainer>
          <ProfilePic src={logo}/>
        </ProfilePicContainer>

        <ProfileName>
          Seth Harlaar
        </ProfileName>

        <ProfileTitle>
          Software Developer
        </ProfileTitle>

        <ProfileLocation>
          From Guelph, ON.
        </ProfileLocation>
      </ProfileCard>
    </>
  )
}


const ContactSection = () => {
  return (
    <>
      <ContactContainer>
        <ContactTitle>Contact:</ContactTitle>

        <ContactsListContainer>
          <ContactsList>
            <ContactItem><AiFillLinkedin style={IconStyle}/>LinkedIn</ContactItem>
            <ContactItem><FaPhoneSquareAlt style={IconStyle}/>519-400-2691</ContactItem>
            <ContactItem><MdEmail style={IconStyle}/>sjharlaar@gmail.com</ContactItem>
          </ContactsList>

          <ContactsList>
            <ContactItem><FaGithubSquare style={IconStyle}/>Github</ContactItem>
            <ContactItem><SiUpwork style={IconStyle}/>Upwork</ContactItem>
          </ContactsList>
        </ContactsListContainer>
      </ContactContainer>
    </>
  )
}

const SkillsSection = () => {
  return (
    <>
      <SkillsSectionContainer>
        <SkillsTitle>Skills</SkillsTitle>

        <SubjectCard>
          <SubjectTitle><CgWebsite style={IconStyle}/>Web Development</SubjectTitle>
          <SubjectDecscription>
            blah blah blah blah blah blah blah blah blah blah blah blah 
          </SubjectDecscription>
        </SubjectCard>

        <DashedDivider/>

        <SubjectCard>
          <SubjectTitle><AiFillCode style={IconStyle}/>Software Development</SubjectTitle>
          <SubjectDecscription>
            blah blah blah blah blah blah blah blah blah blah blah blah 
          </SubjectDecscription>
        </SubjectCard>

        <DashedDivider/>

        <SubjectCard>
          <SubjectTitle><FaMobile style={IconStyle}/>Mobile Development</SubjectTitle>
          <SubjectDecscription>
            blah blah blah blah blah blah blah blah blah blah blah blah 
          </SubjectDecscription>
        </SubjectCard>

      </SkillsSectionContainer>
    </>
  )
}

const ResumeDownload = () => {
  return (
    <>
      <ResumeDownloadContainer>
        <ResumeDownloadPhrase><AiOutlineDownload style={IconStyle}/>Download My Resume</ResumeDownloadPhrase>
      </ResumeDownloadContainer>
    </>
  )
}


const Sidebar = () => {
  return (
    <SidebarContainer>
      <ProfileSection/>
      <Divider/>
      <ContactSection/>
      <Divider/>
      <SkillsSection/>

      <ResumeDownload/>
    </SidebarContainer>
  );
};

export default Sidebar;