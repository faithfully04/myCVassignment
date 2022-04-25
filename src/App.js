import React from 'react';
import General from './Components/General';
import Objective from './Components/Objective'
import Certification from './Components/Certification';
import Education from './Components/Education';
import Skill from './Components/Skill';
import Interest from './Components/Interest';
import Language from './Components/Language';
import Experience from './Components/Experience';


function App() {
  
  return (
    <div className="App">
      <General />
      <Objective />
      <Certification />
      <Education />
      <Skill />
      <Interest />
      <Language />
      <Experience />
    </div>
  );
}

export default App;
