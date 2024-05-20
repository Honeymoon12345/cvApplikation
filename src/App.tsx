
import './App.css'
import PersonalData from './components/PersonalData';
import SchoolInput from './components/SchoolInput';
import NameOutput from './components/NameOutput';
import SchoolOutput from './components/SchoolOutput';
import WorkInput from './components/WorkInput';
import WorkOutput from './WorkOutput';
import { IPersonalData, ISchool, IWork } from './components/ts/interfaces/global_interfaces';
import { useState } from 'react';
import { Typography } from "@mui/material";
function App() {
  const [personalData, setPersonalData] = useState({ name: "", lastname: "", birthday: "", street: "", zip: "", city: "" })
  const [schoolData, setSchoolData] = useState({school: "", visit: ""})
  const [workData, setWorkData] = useState({work: "", visit: ""})
  const [isVisible, setIsVisible] = useState(false)
  function handlePersonalData(data: object) {
    setPersonalData(
      {
        ...data as IPersonalData
      }
    )
    setIsVisible(true)
  }
  function handleSchoolData(schoolData: object){
    setSchoolData(
      ...schoolData as ISchool
    )
    setIsVisible(true)
  }
  function handleWorkData(workData: object){
    setWorkData(
      ...workData as IWork
    )
    setIsVisible(true)
  }

  return (
    <>
      <div className='flex-container'>
        <div className='inputFields'>
        <Typography variant="h3" component="h1" sx={{ textAlign: "center", mt: 3, mb: 3 }}>Movie List</Typography>
          <h3>Persönliche Daten</h3>
          <PersonalData handleForm={handlePersonalData} />
          <h3>Schulen</h3>
          <SchoolInput handleForm={handleSchoolData}/>
          <h3>Arbeit</h3>
          <WorkInput handleForm={handleWorkData} />
        </div>
        <div className='outputFields'>
          {isVisible && <NameOutput data={personalData} />}
          {isVisible && <SchoolOutput schoolData={schoolData} />}
          {isVisible && <WorkOutput workData={workData} />}
        </div>
      </div>
    </>
  )
}

export default App
