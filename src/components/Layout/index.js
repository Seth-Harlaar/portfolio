import React from 'react';

import Sidebar from '../Sidebar';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import OtherSection from '../Other'
import { ThemeProvider } from 'styled-components';
import { goodTheme} from '../../pages/theme'

import {Splitter} from './LayoutElements.js'

const Layout = () => {
  return (
    <>
      <ThemeProvider theme={goodTheme}>
        <Splitter>
          <Sidebar/>

          <div style={{width:'calc(100% - 300px)', overflowY:'auto', height:'100%'}}>
            <HeroSection />
            <Footer />
          </div>
        </Splitter>
      </ThemeProvider>
    </>
  )
}

export default Layout