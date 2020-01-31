import React from 'react';
import './App.css';
import styled from 'styled-components'
import Container from './styled-components/Container'
import PaneTitle from './styled-components/PaneTitle'

function AboutPane() {
    return (    
        <Container>
            <PaneTitle>About me</PaneTitle>
            <h3 style={{fontSize:'1.5em'}}>Hey there! My name is</h3>
            <h1 style={{fontSize:'3em', color: 'blue'}}>Jared Grove</h1>
            <p style={{fontSize:'2em'}}>I'm a former mechanical engineer who fell in love code.</p>

            <p style={{fontSize:'2em'}}>I love the creativity of the front-end and the logic of the back-end. The delightful challenge of creating reliable and intuitive apps and tools drives me to learn something new every day!</p>
        </Container>
    );
}

export default AboutPane;

