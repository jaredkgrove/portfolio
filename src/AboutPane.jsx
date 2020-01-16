import React from 'react';
import './App.css';
import styled from 'styled-components'

function AboutPane() {
    return (    
        <AboutPaneWrapper>
            <ElevatorPitch>
                As a Mechanical Engineer turned Software Engineer, I am passionate about creating reliable, intuitive tools for both users and developers. Full-stack developer drawn to the creativity of the front-end and the logic of the back-end. Experienced working with interdisciplinary teams producing quality work in a positive environment.
            </ElevatorPitch>
            <TechnologiesWrapper>
                <TechnologyCard>JavaScript</TechnologyCard>
                <TechnologyCard>Ruby</TechnologyCard>
                <TechnologyCard>Rails</TechnologyCard>
                <TechnologyCard>React</TechnologyCard>
                <TechnologyCard>Redux</TechnologyCard>
                <TechnologyCard>RSpec</TechnologyCard>
                <TechnologyCard>Rails</TechnologyCard>
            </TechnologiesWrapper>
        </AboutPaneWrapper>
    );
}

export default AboutPane;

const AboutPaneWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

const ElevatorPitch = styled.p`
    width: 50vw;
    height: 100vh;
    text-align: left;
    float:left;
`

const TechnologiesWrapper = styled.div`
    box-sizing: border-box;
    width: 50vw;
    height: 100vh;
    float:right;
    text-align: left;
    background: grey;
    display: flex;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
`;

const TechnologyCard = styled.div`
    text-align: center;
    height: 150px;
    width: 100px;
    background: white;
    margin: 20px;
`;
