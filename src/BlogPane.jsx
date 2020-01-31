import React from 'react';
import './App.css';
import styled from 'styled-components'
import logo from './logo.svg'
import Container from './styled-components/Container'
import PaneTitle from './styled-components/PaneTitle'

function BlogPane() {
    return (    
        <Container>
            <PaneTitle>Blog</PaneTitle>
            <blockquote class="embedly-card" data-card-theme="dark"><h4><a href="https://medium.com/@jaredkgrove">Jaredkgrove - Medium</a></h4><p>There are no shortage of blogs, documentation, and Stack Overflow questions about closures in JavaScript. You should read and understand them. But I thought it might be helpful to contribute my own code-heavy, semi-layman's terms version.</p></blockquote>

        </Container>
    );
}

export default BlogPane;

// const Quote = styled.p`
//     font-size: 2em;
//     font-style: italic;
// `;

// const TechnologiesWrapper = styled.div`
//     display:flex;
//     justify-content: space-around;
//     height: 100px;
// `;

// const TechnologyCard = styled.div`
//     width: 19%;
//     max-height: 100%;
//     overflow: hidden;
//     > *{
//         > *{
//             object-fit: contain;
//             max-width: 100%; 
//             height: 100%;
//         }
//     }
// `;
