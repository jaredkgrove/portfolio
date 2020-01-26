import React from 'react';
import './App.css';
import styled from 'styled-components'
import Container from './styled-components/Container'
import ProjectCard from './ProjectCard'
import jbProjectImage from './images/jbProjectImage.PNG'
import svgSketchProjectImage from './images/svgSketchProjectImage.PNG'
import EditView from './svg-sketch-demo/EditView'

function ProjectsPane() {
    return (    
        <Container> 
            <ProjectsFlex>
                <ProjectCard title='j+b' image={jbProjectImage} tags={['React', 'Redux', 'React Hooks', 'React Router', 'styled-components', 'Etsy API', 'Instagram API']} github='https://github.com/jaredkgrove/shopfront-front-end' website='https://jandb.herokuapp.com'></ProjectCard>
                <ProjectCard title='SVG Sketch' image={svgSketchProjectImage} tags={['Ruby', 'Rails', 'Postgresql', 'React', 'React Router', 'Redux']} github='https://github.com/jaredkgrove/svg-sketch' website='http://svg-sketch.herokuapp.com' demo><EditView/></ProjectCard>
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