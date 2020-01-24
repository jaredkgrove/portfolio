import React from 'react';
import './App.css';
import styled from 'styled-components'
import Container from './styled-components/Container'
import ProjectCard from './ProjectCard'
import jbProjectImage from './images/jbProjectImage.PNG'
import svgSketchProjectImage from './images/svgSketchProjectImage.PNG'

function ProjectsPane() {
    return (    
        <Container> 
            <ProjectsFlex>
                <ProjectCard title='j+b' image={jbProjectImage} tags={['React', 'Redux', 'React Hooks', 'Fetch API', 'Etsy API', 'Instagram API']} github='https://github.com/jaredkgrove/shopfront-front-end'></ProjectCard>
                <ProjectCard title='SVG Sketch' image={svgSketchProjectImage} tags={['React', 'Redux', 'React Hooks', 'Fetch API', 'Etsy API', 'Instagram API']}></ProjectCard>
                <ProjectCard title='Pick-up'></ProjectCard>
            </ProjectsFlex>
        </Container>
    );
}

export default ProjectsPane;

const ProjectsFlex = styled.div`
    display:flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;