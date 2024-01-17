import React, { useEffect } from 'react'
import Sidebar from './components/Sidebar'
import ProgramForm from './components/ProgramForm'
import { useState } from 'react'
import axios from 'axios'
const App = () => {

  const [programs, setPrograms] = useState([]);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [addClick, setAddClick]= useState(false);
  const [variable, setvariable]= useState(false);

  // const handleSaveProgram = (newProgram) => {
  //   // Update the programs state when a new program is saved
  //   setPrograms([...programs, newProgram]);
  // };
  // useEffect(async()=>{
  //   const a = await axios.get('http://127.0.0.1:5000/hero/create');
  //   // const a='a';
  //   setPrograms([...programs, a]);
  // });
  
  // useEffect(async() => {
  
  //   return async() => {
  //     const a = await axios.get('http://127.0.0.1:5000/hero/create');
  //   // const a='a';
  //   setPrograms([...programs, a]);
  //   }
  // })
  

  return (
    <div style={{display: "flex"}}>
      <Sidebar programs={programs} setSelectedProgram={setSelectedProgram} setAddClick={setAddClick} setvariable={setvariable}/>
      {(addClick || variable || selectedProgram) && (
        <ProgramForm setPrograms={setPrograms} programs={programs} setSelectedProgram={setSelectedProgram} selectedProgram={selectedProgram} addClick={addClick} setAddClick={setAddClick}/>
      )}
    </div>
  )
}

export default App