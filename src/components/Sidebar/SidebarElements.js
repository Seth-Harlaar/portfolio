import styled from 'styled-components';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegWindowClose } from "react-icons/fa";





// * * * * * * * * * * * *
// * * *    Main     * * * 
// * * * * * * * * * * * *
export const SidebarContainer = styled.div`
  position: relative;
  padding: 0 30px;
  background-color: #0C1424;
  width: 300px;
  color: #E5E5E5;
  display: flex;
  flex-direction: column;
`


export const InfoSection = styled.div`
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin: 10px 0;
  // scrollbar-color: rgba(0,0,0,0) rgba(0,0,0,0);
`


export const DrawerContainer = styled.div`
  width: ${props => props.visible ? "100%" : "0"};
  overflow-x: hidden;
  
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 10;
  transition-duration: 150ms;
`
export const Drawer = styled.div`
  width: 300px;
  background-color: #0C1424;
  height: 100%;
`

export const BurgerMenu = styled(GiHamburgerMenu)`
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 22px;
  color: white;
  
  &:hover {
    cursor: pointer;
  }
`

export const CloseButton = styled(FaRegWindowClose)`
  position: absolute;
  top: 15px;
  right: 15px;
  font-size: 22px;
  color: white;

  &:hover {
    cursor:pointer;
  }
`


// * * * * * * * * * * * *
// * * Profile Section * *
// * * * * * * * * * * * *

export const ProfileCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  text-align: center;
`


export const ProfilePicContainer = styled.div`
  height: 100px;
  width: 100px;
  overflow: hidden;
  margin: auto;
  border-radius: 50px;
  outline: 1.5px solid #FCA311;
  outline-offset: 4px;
`

export const ProfilePic = styled.img`
  width: 100%;
  max-width: 700px;
  height: auto;
`

export const ProfileName = styled.h1`
  padding: 20px 0 10px 0;
  font-size: 14px;
`

export const ProfileTitle = styled.h1`
  font-size: 13px;
  color: #FCA311;
`

export const ProfileLocation = styled.h1`
  padding-top: 10px;
  font-size: 12px;
  opacity: 70%;
`


// * * * * * * * * * * * *
// * * Contact Section * *
// * * * * * * * * * * * *

export const ContactContainer = styled.div`
  padding: 30px 0 0 0;
`

export const ContactTitle = styled.h1`
  font-size: 15px;
  padding-bottom: 13px;
`

export const ContactsListContainer = styled.div`
  display: flex;
`
export const ContactsList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const ContactItem = styled.div`
  display: flex;
  align-items: center;

  font-size: 14px;
  padding: 0 5px 8px 5px;
  color: #B6B6B6;
  
  transition: 150ms;
  &:hover {
    color: #FCA311;
    cursor: pointer;
  }
`

export const ContactLink = styled.a`
  color: inherit;
  text-decoration: none;
`

// * * * * * * * * * * * *
// * * Contact Section * *
// * * * * * * * * * * * *
export const SkillsSectionContainer = styled.div`
  padding: 30px 0;
`

export const SkillsTitle = styled.h1`
  font-size: 15px;
  padding-bottom: 3px;
`

export const SubjectTitle = styled.h1`
  display: flex;
  align-items: center;
  font-size: 13px;
  padding-bottom: 5px;
`

export const DashedDivider = styled.div`
  border-bottom: 1px dashed white;
  opacity: 50%;
`

export const SubjectCard = styled.div`
  padding: 13px 0;

  transition: 275ms;
  &:hover {
    transform: scale(1.1);
  }
`

export const SubjectDecscription = styled.div`
  margin-left: 19px;
  font-size: 12px;
  color: #B6B6B6;
`




// * * * * * * * * * * * *
// * * *   Resume    * * *
// * * * * * * * * * * * *

export const ResumeDownloadContainer = styled.div`
  // position: absolute;
  // bottom: 10px;
  // left: 50%;
  // transform: translate(-50%, 0);
  text-align: center;
  padding: 15px 0;

  transition: 150ms;
  &:hover {
    cursor: pointer;
    color: #FCA311;
  }
`

export const ResumeDownloadPhrase = styled.a`
  color: inherit;
  text-decoration: none;
  font-size: 12px;
`
