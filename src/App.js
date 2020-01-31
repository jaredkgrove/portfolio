import React from 'react';
import IntroPane from './IntroPane';
import AboutPane from './AboutPane';
import ProjectsPane from './ProjectsPane'
// import BlogPane from './BlogPane'
import ContactLinksPane from './ContactLinksPane'
import './App.css';

function App() {
  return (
    <div className="App">
      <IntroPane/>
      <AboutPane/>
      <ProjectsPane/>
      {/* <BlogPane/> */}
      
      <ContactLinksPane/>
    </div>
  );
}

export default App;
