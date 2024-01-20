import React, { useContext, useState } from 'react'
import {ScreenContext} from '../../providers/screenProvider';

// elements
import { SidebarContainer, ProfileCard, ProfilePic, ProfileName, ProfileTitle, ProfilePicContainer, ProfileLocation, ContactContainer, ResumeDownloadContainer, ResumeDownloadPhrase, ContactLink, DrawerContainer, Drawer, BurgerMenu, CloseButton, } from './SidebarElements';
import { ContactTitle, ContactsList, ContactsListContainer, ContactItem } from './SidebarElements';
import { SkillsSectionContainer, SkillsTitle, SubjectTitle, SubjectCard, SubjectDecscription, DashedDivider, InfoSection } from './SidebarElements';

// icons
import { AiFillLinkedin, AiFillCode, AiOutlineDownload } from 'react-icons/ai';
import { CgWebsite } from 'react-icons/cg';
import { FaGithubSquare, FaMobile } from 'react-icons/fa';
import { SiUpwork } from 'react-icons/si';
import { MdEmail } from 'react-icons/md';

// pictures
import logo from '../../assets/images/seth_pic.jpg'

// files
import resume from '../../assets/papers/seth_resume.pdf';

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
            <ContactItem><AiFillLinkedin style={IconStyle}/><ContactLink href="https://www.linkedin.com/in/seth-harlaar-866635228/">LinkedIn</ContactLink></ContactItem>
            {/* <ContactItem><FaPhoneSquareAlt style={IconStyle}/>519-400-2691</ContactItem> */}
            <ContactItem><MdEmail style={IconStyle}/><ContactLink href="mailto:sjharlaar@gmail.com">sjharlaar@gmail.com</ContactLink></ContactItem>
          </ContactsList>

          <ContactsList>
            <ContactItem><FaGithubSquare style={IconStyle}/><ContactLink href="https://github.com/Seth-Harlaar">Github</ContactLink></ContactItem>
            <ContactItem><SiUpwork style={IconStyle}/><ContactLink href="https://www.upwork.com/freelancers/~014198985ea7865313?viewMode=1">Upwork</ContactLink></ContactItem>
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
            React.js &middot; Node.js &middot; HTML &middot; CSS &middot; JavaScript &middot; Tailwind CSS
          </SubjectDecscription>
        </SubjectCard>

        <DashedDivider/>

        <SubjectCard>
          <SubjectTitle><AiFillCode style={IconStyle}/>Software Development</SubjectTitle>
          <SubjectDecscription>
            Python &middot; C &middot; Java &middot; Visual Studio &middot; Git
          </SubjectDecscription>
        </SubjectCard>

        <DashedDivider/>

        <SubjectCard>
          <SubjectTitle><FaMobile style={IconStyle}/>Mobile Development</SubjectTitle>
          <SubjectDecscription>
            Dart &middot; Flutter &middot; Java &middot; Android Studio
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
        <ResumeDownloadPhrase href={resume} download="Seth Harlaar Resume"><AiOutlineDownload style={IconStyle}/>Download My Resume</ResumeDownloadPhrase>
      </ResumeDownloadContainer>
    </>
  );
}


const Sidebar = () => {

  return (
    <SidebarContainer>
      <ProfileSection/>
      <Divider/>
      <InfoSection>
        <ContactSection/>
        <SkillsSection/>
      </InfoSection>

      <Divider/>
      <ResumeDownload/>
    </SidebarContainer>
  );
};

function SidebarDrawer(){
  const [visible, setVisible] = useState(false);

  function viewSidebar(){
    setVisible(true);
  }

  function closeSidebar(){
    setVisible(false);
  }

  return (
    <>
      <DrawerContainer visible={visible ? "true" : undefined}>
        <CloseButton onClick={closeSidebar}/>
        
        <Drawer visible={visible ? "true" : undefined}>
          <Sidebar/>
        </Drawer>
      </DrawerContainer>


      {/* open drawer button */}
      <BurgerMenu onClick={viewSidebar}/>
    </>
  );
}


// wrapper for openning and closing based on screen size

function SidebarWrapper (){

  const {isLrgScreen} = useContext(ScreenContext);

  return (
    <>
      {isLrgScreen ? <Sidebar/> : <SidebarDrawer/>  }
    

    </>
  );
}


export default SidebarWrapper;


// React.js
// Node.js
// HTML
// CSS
// JavaScript
// Flutter
// Tailwind CSS
// Python