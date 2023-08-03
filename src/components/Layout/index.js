import React from 'react';

// components
import Sidebar from '../Sidebar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Reviews from '../Reviews'

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
            <Reviews/>
            <Footer />
          </div>
        </Splitter>
      </ThemeProvider>
    </>
  )
}

export default Layout