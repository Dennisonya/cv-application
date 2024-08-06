import React from 'react';
import './App.css';
import { exampleCv } from './Components/Cv';
import uuid from 'react-uuid';
import PersonalContainer from './Components/PersonalContainer';
import EducationContainer from './Components/EducationContainer';
import ExperienceContainer from './Components/ExperienceContainer';
import Header from './Components/Header';
import CvForm from './Components/CvForm';
import { useState, useRef } from 'react';
import { emptyCv } from './Components/emptyCv';
import { useReactToPrint } from 'react-to-print';

function App() {
  const [cvForm, setCvForm] = useState(emptyCv);

  function handlePersonalChange(event) {
    const { name, value } = event.target;
    setCvForm(prevState => ({
        ...prevState,
        personal: {...prevState.personal, [name]: value}
    }));
}

function handleExperienceChange(event, index) {
  const { name, value } = event.target;
  setCvForm((prevState) => {
    const newExperience = [...prevState.experience];
    newExperience[index] = { ...newExperience[index], [name]: value };
    return { ...prevState, experience: newExperience };
  });
}

function handleEducationChange (event){
  const {name, value} = event.target;
  setCvForm(prevState=> ({
      ...prevState,
      education: {...prevState.education, [name]: value}
  }))
}

function addNewExperience(event) {
  event.preventDefault();
  setCvForm(prevState => ({
      ...prevState,
      experience: [
          ...prevState.experience,
          {
              id: uuid(),
              company: '',
              position: '',
              startDate: '',
              endDate: '',
              description: ''
          },
      ],
  }));
}

function handleDeleteExperience(id) {
  if (!id) return
  setCvForm(prevState => {
      const newExp = prevState.experience.filter(exp => exp.id !== id);
      return { ...prevState, experience: newExp };
  });
}

const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    bodyClass: "scale",
  });

  function handleLoadExample(){
    setCvForm(exampleCv)
  }

  function handleResetExample(){
    setCvForm(emptyCv)
  }

  return (
    <>
    <div className="form">
      <Header/>
      <PersonalContainer 
      data={cvForm.personal}
      onChange={handlePersonalChange} 
      />
      <EducationContainer 
      data={cvForm.education}
      onChange={handleEducationChange}
      />
      <ExperienceContainer 
      data={cvForm.experience}
      onChange={handleExperienceChange}
      onAdd={addNewExperience}
      onDelete={handleDeleteExperience}
      />
      <div className="buttons-div">
        <button className="button" onClick={handlePrint}>Print CV</button>
        <button className="button" onClick={handleLoadExample}>Example</button>
        <button className="button" onClick={handleResetExample}>Reset</button>
      </div>
    </div>
    <CvForm 
    data={cvForm}
    ref={componentRef}
    />
    </>
  );
}

export default App;