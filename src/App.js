import React from 'react';
import IntroPane from './IntroPane';
import AboutPane from './AboutPane';
import ProjectsPane from './ProjectsPane'
import ContactLinksPane from './ContactLinksPane'
import './App.css';

function App() {
  return (
    <div className="App">
      <IntroPane/>
      <AboutPane/>
      <ProjectsPane/>
      <ContactLinksPane/>
    </div>
  );
}

export default App;
