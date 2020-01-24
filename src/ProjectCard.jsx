import React from 'react';
import './App.css';
import styled from 'styled-components'

function ProjectCard(props) {
    const renderTags = () => {if(props.tags) return props.tags.map(tag => <Tag>{tag}</Tag>)}
    
    return (    
        <ProjectCardWrapper>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectImage src={props.image}/>
            <ProjectTags>
                {renderTags()}
            </ProjectTags>
        </ProjectCardWrapper>
    );
}

export default ProjectCard;

const ProjectCardWrapper = styled.div`
    height: 550px;
    width: 30%;
    max-width: 270px;
    min-width: 250px;
    max-height: 95vh;
    border-radius: 30px;
    padding: 10px 5px 10px 5px;
    margin: 10px 0px 10px 0px;
    background: #DADAE6;
    text-align:center;
`;

const ProjectTitle = styled.h3`
    text-align: center;
    font-size: 2em;
`;

const ProjectImage = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 100px;
    text-align: center;
    object-fit: cover;
`;

const ProjectTags = styled.ul`
    columns: 2;
    text-align: left;
    font-size: 1.5em;
`;


const Tag = styled.li`
    list-style-type: none;
`;

