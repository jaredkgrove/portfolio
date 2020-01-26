import React from 'react';
import './App.css';
import styled from 'styled-components'
import Container from './styled-components/Container'
// import IntroCanvas from './introCanvas';

function IntroPane() {
    return (    
        <FlexContainer fullScreen>
            {/* <IntroCanvas></IntroCanvas> */}

            <Title>Jared Grove</Title>
            <Subtitle>A mechanical engineer who fell in love with code</Subtitle>
        </FlexContainer>
    );
}

export default IntroPane;

const Title = styled.h1`
    font-size: 5em;
`;

const Subtitle = styled.h1`
    font-size: 3em;
    font-weight: 500;
`;

const FlexContainer = styled(Container)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;
    background: #4E8EB1;
    color: #EFEFF6;
`;



