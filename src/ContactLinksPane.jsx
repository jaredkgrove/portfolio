import React from 'react';
import './App.css';
import styled from 'styled-components'
import Container from './styled-components/Container'

function ContactLinksPane() {
    return (    
        <FooterContainer>
            <SocialLink href='https://github.com/jaredkgrove' target='_blank'>
                <svg height="20" alt="GitHub" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
            </SocialLink>
            <SocialLink href='https://www.linkedin.com/in/jared-grove/' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg"  alt="LinkedIn" viewBox="0 0 19 18" height="20" width='20'>
                    <path d="M3.94 2A2 2 0 1 1 2 0a2 2 0 0 1 1.94 2zM4 5.48H0V18h4zm6.32 0H6.34V18h3.94v-6.57c0-3.66 4.77-4 4.77 0V18H19v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path>
                </svg>
            </SocialLink>
            <SocialLink href='https://www.facebook.com/jared.grove.94' target='_blank'>
                <svg xmlns="http://www.w3.org/2000/svg" alt='Facebook' viewBox="0 0 15.3 15.4" height="20" width='20'>
                    <path d="M14.5 0H.8a.88.88 0 0 0-.8.9v13.6a.88.88 0 0 0 .8.9h7.3v-6h-2V7.1h2V5.4a2.87 2.87 0 0 1 2.5-3.1h.5a10.87 10.87 0 0 1 1.8.1v2.1h-1.3c-1 0-1.1.5-1.1 1.1v1.5h2.3l-.3 2.3h-2v5.9h3.9a.88.88 0 0 0 .9-.8V.8a.86.86 0 0 0-.8-.8z"></path>
                </svg>
            </SocialLink>
        </FooterContainer>
    );
}

export default ContactLinksPane;

const FooterContainer = styled(Container)`
   
    background: grey;
`;

const SocialLink = styled.a`
  display: inline-block;
  padding: 10px;
  :hover {
      background: white;
  }
`;

