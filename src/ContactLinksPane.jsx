import React from 'react';
import './App.css';
import styled from 'styled-components'

function ContactLinksPane() {
    return (    
        <ContactLinksPaneWrapper>
            <div>Github</div>
            <div>LinkedIn</div>
            
        </ContactLinksPaneWrapper>
    );
}

export default ContactLinksPane;

const ContactLinksPaneWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  text-align: center;
`;

