import React from 'react';
import './App.css';
import styled from 'styled-components'

function ProjectsPane() {
    return (    
        <ProjectsPaneWrapper>
            <projectLink>svg-sketch</projectLink>
            <projectLink>j+b</projectLink>
        </ProjectsPaneWrapper>
    );
}

export default ProjectsPane;

const ProjectsPaneWrapper = styled.div`
    box-sizing: border-box;
    padding: 10px;
    height: 100vh;
    width: 100vw;
    text-align: center;
`;

const projectLink = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background: none;
`;