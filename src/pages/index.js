import React, {useState} from 'react';

import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import ExperienceSection from '../components/Experience'
import OtherSection from '../components/Other'
import SkillsSection from '../components/Skills';


const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle}/>
      <Navbar toggle={toggle}/>
      <HeroSection />
      <ExperienceSection />
      <OtherSection/>
      <SkillsSection/>
      <Footer />
    </>
  )
}

export default Home
