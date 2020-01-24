import React, {useState} from 'react';
import './App.css';
import styled from 'styled-components'
import Container from  './styled-components/Container'


function ProjectCard(props) {
    const [demoVisible, setDemoVisible] = useState(false);
    const renderTags = () => {if(props.tags) return props.tags.map(tag => <Tag>{tag}</Tag>)}
    
    const renderGithubLink = () => {if(props.github) return <li><Link href={props.github} target='_blank'>Github</Link></li>}

    const renderWebiteLink = () => {if(props.website) return <li><Link href={props.website} target='_blank'>Website</Link></li>}

    const renderDemoButton = () => {if(props.demo) return <DemoButton onClick={() => setDemoVisible(true)}>Demo</DemoButton>}
    
    const renderUIDemo = () => {if(demoVisible) return <DemoContainer fullScreen>{props.children}</DemoContainer>}


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
            </ProjectLinks>
            {renderDemoButton()}
            {renderUIDemo()}
        </ProjectCardWrapper>
    );
}

export default ProjectCard;

const ProjectCardWrapper = styled.div`
    position: relative;
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

    position: absolute;
    bottom: 0px;
    font-size: 1.5em;
    list-style-type: none;
    text-align: left;
`;

const Link =styled.a`
    text-decoration: none;
    color: inherit;
    :hover {
        color: white;
    }
`;

const DemoContainer = styled(Container)`
    z-index: 1;
    position: fixed;
    top: 0px;
    left: 0px;
    background: white;
    display: flex;
    justify-content: center;
    align-content: center;
`;

const DemoButton = styled.button`

`;