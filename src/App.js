import React, { useState } from 'react';
import CV from './containers/CV';
import Header from './containers/Header'
import styles from './App.module.css'
import Chips from 'react-chips'
import Personal from './components/Personal';
import Experience from './components/Experience'
import Education from './components/Education'

const App = () => {
  const [datos, setDatos] = useState({
    firstname: '',
    lastname: '',
    role: '',
    address: '',
    email: '',
    phone: '',
    linkedin: '',
    skills: '',})

  const [experiences, setExperiences] = useState({
      position: '',
      company: '',
      from: '',
      to: '',
      activity: '',
      achievement: ''})
  
  const [educations, setEducations] = useState ({
      university: '',
      cityEducation: '',
      degree: '',
      subject: '',
      fromEducation: '',
      toEducation: ''
  })

  const [chipsArr, setChips] = useState([]);
  const [formEducation, setFormEducation]= useState([]);
  const [formExperience, setFormExperience]= useState([]);


  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const handleChipChange = (chips) => {
    setChips(chips);
    setDatos({
      ...datos,
      skills: chips
    });
  };

  const incrementForm = (setState, form, Component, datos) => {
    setState(form + 1);
    for(let i =0 ; i<form; i++){
      setState([...form, <Component key={i} handleInputChange={handleInputChange} datos={datos}  form={form} />]);}
      console.log(form)
  }

  const addForm = (setState, form, section) => {
    setState ([...form, section])
  }


  return (
    <>
      <Header />
      <div className={styles.formContainer}>
      <Personal handleInputChange={handleInputChange} datos={datos} />
        <div className={styles.skillsContainer}>
          <form onSubmit={e => e.preventDefault}>
            <h1>Soft Skills</h1>
            <Chips
              type="text"
              placeholder="Skills"
              onChange={handleChipChange}
              name="skills"
              value={chipsArr}
              suggestions={["Active Listening", "Communication", "Computer Skills", "Customer Service", "Interpersonal Skills", "Leadership", "Management Skills", "Problem-Solving", "Time Management", "Transferable Skills", "Reliability", "Empathy", "Flexibility", "Ability to teach and mentor", "Team building", "Time management", "Attention to detail", "Goal setting"]}
            />
          </form>
        </div>
        <h1 className={styles.title}>Experience</h1>
        <Experience handleInputChange={handleInputChange} experiences={experiences} incrementForm={incrementForm} setState={setFormExperience} form={formExperience}/>
        <h1 className={styles.title}>Education</h1>
        <Education handleInputChange={handleInputChange} educations={educations} incrementForm={incrementForm} setState={setFormEducation} form={formEducation}/>
      </div>
      <CV
        datos={datos}
        chipsArr={datos} />
    </>
  );
};

export default App;