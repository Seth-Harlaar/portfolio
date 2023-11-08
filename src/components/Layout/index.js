import React from 'react';

// components
import Sidebar from '../Sidebar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Skills from '../Skills';
import Reviews from '../Reviews'
import ProjectSection from '../ProjectSection';
import ContactSection from '../Contact';

// theme
import { ThemeProvider } from 'styled-components';
import { goodTheme} from '../../pages/theme'

// elements
import {Splitter} from './LayoutElements.js'


const Layout = () => {
  return (
    <>
      <ThemeProvider theme={goodTheme}>
        <Splitter>
          <Sidebar/>

          <div style={{width:'calc(100% - 300px)', overflowY:'auto', height:'100%', paddingLeft:'0px'}}>
            <HeroSection />
            <Skills/>
            <ProjectSection/>
            <Reviews/>
            <ContactSection/>
            <Footer/>
          </div>
        </Splitter>
      </ThemeProvider>
    </>
  )
}

export default Layout