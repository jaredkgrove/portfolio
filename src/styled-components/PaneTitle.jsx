import React from 'react';
import '../App.css';
import styled from 'styled-components'


const PaneTitle = (props) => {
    return(
        <StyledPaneTitle>
            <StyledBackground>
                <h2>{props.children}</h2>
            </StyledBackground>
        </StyledPaneTitle>
        
    )
}

const StyledPaneTitle = styled.div`
    text-align: center;
`;

const StyledBackground = styled.div`
    background: grey;
    display:inline-block;
    transform: rotate(5deg);
    margin: 50px auto 50px auto;
    border-radius: 3px;

    > * {
        padding: 0px;
        margin: 0px 5px 0px 5px;
        font-size: 5em;
        text-align: left;
        font-style: italic;
        font-weight: 300;
        transform: rotate(-5deg);
        color: white;
    }
`;


export default PaneTitle