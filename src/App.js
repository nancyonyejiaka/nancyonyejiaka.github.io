import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './utils/Themes.js'
import NavBar from './components/NavBar'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import HeroSection from './components/HeroSection'
// import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import Education from './components/Education'
import ProjectDetails from './components/ProjectDetails'

const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`

const Wrapper = styled.div`
    ${({ theme }) => `
    background: linear-gradient(
      38.73deg, 
      ${theme.primary} 0%, 
      ${theme.secondary} 50%
    ),
    linear-gradient(
      141.27deg, 
      ${theme.tertiary} 50%, 
      ${theme.quaternary} 100%
    );
  `}
    width: 100%;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 30% 98%, 0 100%);
`
function App () {
  const [darkMode, setDarkMode] = useState(true)
  const [openModal, setOpenModal] = useState({ state: false, project: null })

  const toggleDarkMode = () => setDarkMode(!darkMode) // Function to toggle the theme

  return (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <Router>
                <NavBar />
                <Body>
                    <HeroSection />
                    <Wrapper>
                        <Skills />
                        <Experience />
                    </Wrapper>
                    <Projects openModal={openModal} setOpenModal={setOpenModal} />
                    <Wrapper>
                        <Education />
                        <Contact />
                    </Wrapper>
                    <Footer />
                    {openModal.state &&
                        <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
                    }
                </Body>
            </Router>
        </ThemeProvider>
  )
}

export default App
