import React from 'react';
import './App.css';
import styled from 'styled-components'

function ProjectCard(props) {
    return (    
        <ProjectCardWrapper>

        </ProjectCardWrapper>
    );
}

export default ProjectCard;

const ProjectCardWrapper = styled.div`
    height: 100px;
    width: 100px;
    background: grey;
`;

const ProjectFlex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    background: #4E8EB1;
    color: #EFEFF6;
`;

