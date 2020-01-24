import React from 'react';
import './App.css';
import styled from 'styled-components'
import Container from './styled-components/Container'
import ProjectCard from './ProjectCard'
function ProjectsPane() {
    return (    
        <Container> 
            <ProjectsFlex>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
                <ProjectCard></ProjectCard>
            </ProjectsFlex>
        </Container>
    );
}

export default ProjectsPane;

const ProjectsFlex = styled.div`
    display:flex;
    justify-content: space-around;
`;