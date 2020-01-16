import React from 'react';
import './App.css';
import styled from 'styled-components'

function IntroPane() {
    return (    
        <IntroPaneWrapper>
            <h1>Jared Grove</h1>
            <h3>Full Stack Engineer</h3>
        </IntroPaneWrapper>
    );
}

export default IntroPane;

const IntroPaneWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

