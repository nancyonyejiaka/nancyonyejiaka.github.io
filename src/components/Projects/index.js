import React, { useState } from 'react'
import { Container, Wrapper, Title, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCard'
import { projects } from '../../data/constants'

const Projects = ({ openModal, setOpenModal }) => {
  const [toggle, setToggle] = useState('all')
  return (
        <Container id="projects">
            <Wrapper>
                <Title>Projects</Title>
                <ToggleButtonGroup >
                    {toggle === 'all'
                      ? <ToggleButton active value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
                      : <ToggleButton value="all" onClick={() => setToggle('all')}>All Projects</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'backend'
                      ? <ToggleButton active value="backend" onClick={() => setToggle('backend')}>Backend Development</ToggleButton>
                      : <ToggleButton value="backend" onClick={() => setToggle('backend')}>Backend Development</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'fullstack'
                      ? <ToggleButton active value="fullstack" onClick={() => setToggle('fullstack')}>Fullstack Development</ToggleButton>
                      : <ToggleButton value="fullstack" onClick={() => setToggle('fullstack')}>Fullstack Development</ToggleButton>
                    }
                    <Divider />
                    {toggle === 'artificial intelligence'
                      ? <ToggleButton active value="artificial intelligence" onClick={() => setToggle('artificial intelligence')}>Artificial Intelligence</ToggleButton>
                      : <ToggleButton value="artificial intelligence" onClick={() => setToggle('artificial intelligence')}>Artificial Intelligence</ToggleButton>
                    }
                </ToggleButtonGroup>
                <CardContainer>
                    {toggle === 'all' && projects
                      .map((project) => (
                            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                      ))}
                    {projects
                      .filter((item) => item.category === toggle)
                      .map((project) => (
                            <ProjectCard key={project.id} project={project} openModal={openModal} setOpenModal={setOpenModal}/>
                      ))}
                </CardContainer>
            </Wrapper>
        </Container>
  )
}

export default Projects
