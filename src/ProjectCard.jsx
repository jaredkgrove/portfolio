import React from 'react';
import './App.css';
import styled from 'styled-components'

function ProjectCard(props) {
    const renderTags = () => {if(props.tags) return props.tags.map(tag => <Tag>{tag}</Tag>)}
    
    const renderGithubLink = () => {if(props.github) return <a href={props.github} target='_blank'>Github</a>}

    const renderWebiteLink = () => {if(props.website) return <a href={props.website} target='_blank'>Website</a>}

    const renderUIDemo = () => {if(props.demo) return <demoWrapper>{props.demo.component}</demoWrapper>}

    return (    
        <ProjectCardWrapper>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectImageWrapper>
                <ProjectImage src={props.image}/>
            </ProjectImageWrapper>
            <ProjectTags>
                {renderTags()}
            </ProjectTags>
            <ProjectLinks>
                {renderGithubLink()}
                {renderWebiteLink()}
                {renderUIDemo()}
            </ProjectLinks>
        </ProjectCardWrapper>
    );
}

export default ProjectCard;

const ProjectCardWrapper = styled.div`
    height: 450px;
    width: 30%;
    max-width: 95%;
    min-width: 250px;
    border-radius: 30px;
    padding: 10px 5px 10px 5px;
    margin: 10px 0px 10px 0px;
    background: #DADAE6;
    text-align: center;
    @media screen and (max-width: 601px) {
        width: 90%;
      }
`;

const ProjectTitle = styled.h3`
    text-align: center;
    font-size: 2em;
    padding: 0px 0px 10px 0px;
    margin: 0px;
`;

const ProjectImageWrapper = styled.div`
    position: relative;
    left: 20%;
    width: 60%;
    padding-top: 60%;
    text-align: center;

`;

const ProjectImage = styled.img`
    position: absolute;
    height: 100%;
    width: 100%;
    top:0px;
    left: 0px;
    border-radius: 50%;
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

const ProjectLinks = styled.ul`
    font-size: 1.5em;
`;
