import React from 'react';
import './App.css';
import styled from 'styled-components'
import logo from './logo.svg'
import Container from './styled-components/Container'

function AboutPane() {
    return (    
        <Container>
            <Quote>Full-stack developer drawn to the creativity of the front-end and the logic of the back-end. </Quote>
            <TechnologiesWrapper>
                <TechnologyCard >
                    <a title="Chris Williams [Public domain]" href="https://commons.wikimedia.org/wiki/File:Unofficial_JavaScript_logo_2.svg">
                        <img  alt="Unofficial JavaScript logo 2" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png"/>
                    </a>
                </TechnologyCard>

                <TechnologyCard >
                    <a href="\#">
                        <img src={logo} alt="React Logo"/>
                    </a>
                </TechnologyCard>

                <TechnologyCard>
                    <a title="Yukihiro Matsumoto, Ruby Visual Identity Team [CC BY-SA (https://creativecommons.org/licenses/by-sa/2.5)]" href="https://commons.wikimedia.org/wiki/File:Ruby_logo.svg">
                        <img alt="Ruby logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/128px-Ruby_logo.svg.png"/>
                    </a>
                </TechnologyCard>

                <TechnologyCard>
                    <a title="Jamie Dihiansan http://weblog.rubyonrails.org/2016/1/19/new-rails-identity/2 [CC0]" href="https://commons.wikimedia.org/wiki/File:Ruby_On_Rails_Logo.svg">
                        <img  alt="Ruby On Rails Logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Ruby_On_Rails_Logo.svg/256px-Ruby_On_Rails_Logo.svg.png"/>

                    </a>
                </TechnologyCard>

                <TechnologyCard>
                    <a title="AAMINE1965 [CC BY-SA (https://creativecommons.org/licenses/by-sa/4.0)]" href="https://commons.wikimedia.org/wiki/File:Redux.png">
                        <img alt="Redux" src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png"/>
                    </a>
                </TechnologyCard>
            </TechnologiesWrapper>
        </Container>
    );
}

export default AboutPane;

const Quote = styled.p`
    font-size: 2em;
    font-style: italic;
`;

const TechnologiesWrapper = styled.div`
    display:flex;
    justify-content: space-around;
    height: 100px;
`;

const TechnologyCard = styled.div`
    width: 19%;
    max-height: 100%;
    overflow: hidden;
    > *{
        > *{
            object-fit: contain;
            max-width: 100%; 
            height: 100%;
        }
    }
`;
