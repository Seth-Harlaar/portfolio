import React, {useContext, useState} from 'react';
import Skills from '../components/Skills';
import HeroSection from '../components/HeroSection';
import ProjectSection from '../components/ProjectSection';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';
import ContactSection from '../components/Contact';
import SidebarWrapper from '../components/Sidebar';
import { ScreenContext } from '../providers/screenProvider';









const Home = () => {
  const {isLrgScreen} = useContext(ScreenContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const splitterStyles = {
    display: "flex",
    height:"100%",
    width:"100%",
    overflowY:"hidden",
  }

  const mainStyles = {
    width: isLrgScreen ? 'calc(100% - 300px)' : '100%',
    overflowY:'auto', 
    height:'100%', 
    paddingLeft:'0px'
  }
  

  return (
    <>
      <div style={splitterStyles}>
        <SidebarWrapper/>
        <div style={mainStyles}>
          <HeroSection />
          <Skills/>
          <ProjectSection/>
          <Reviews/>
          <ContactSection/>
          <Footer/>
        </div>
      </div>
    </>
  )
}

export default Home;
