import React from 'react';
import './App.css';
import styled from 'styled-components'
import Container from './styled-components/Container'
import ProjectCard from './ProjectCard'
import jbProjectImage from './images/jbProjectImage.PNG'
import svgSketchProjectImage from './images/svgSketchProjectImage.PNG'
import pickupGamesProjectImage from './images/pickupGamesProjectImage.PNG'
import EditView from './svg-sketch-demo/EditView'
import PaneTitle from './styled-components/PaneTitle'

function ProjectsPane() {
    return (    
        <Container> 
            <PaneTitle>Projects</PaneTitle>
            <ProjectsFlex>
                <ProjectCard title='j+b' image={jbProjectImage} tags={['React', 'Redux', 'React Hooks', 'React Router', 'styled-components', 'Etsy API', 'Instagram API']} github='https://github.com/jaredkgrove/shopfront-front-end' website='https://jandb.herokuapp.com'></ProjectCard>
                <ProjectCard title='SVG Sketch' image={svgSketchProjectImage} tags={['Ruby', 'Rails', 'Postgresql', 'React', 'React Router', 'JWT Auth', 'Redux']} github='https://github.com/jaredkgrove/svg-sketch' website='http://svg-sketch.herokuapp.com' demo><EditView/></ProjectCard>
                <ProjectCard title='Pick-up' image={pickupGamesProjectImage} tags={['Ruby', 'Rails', 'JSON', 'Fetch', 'Facebook OAuth']} github='https://github.com/jaredkgrove/pick-up-games'></ProjectCard>
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