import React from 'react';
import logo from './logo.svg';
import './App.css';
import ProjectsPage from './projects/ProjectsPage'
import Greeter from './Greeter/Greeter'
import Todoer from './Todoer/Todoer';

function App() {
  return (
       <div className="container">
          <Greeter first="John" last="Doe"/>
          <Todoer />
          <ProjectsPage />
       </div>
       )
}

export default App;
