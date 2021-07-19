import React, { useState, useEffect } from 'react';
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
    skills: '',

    experiences:[{
    position: '',
    company: '',
    from: '',
    to: '',
    activity: '',
    achievement: ''}],
    
    educations:[{
    university: '',
    cityEducation: '',
    degree: '',
    subject: '',
    fromEducation: '',
    toEducation: ''}]
  })
  const [chipsArr, setChips] = useState([]);
  const [formExperience, setFormExperience]= useState(0);
  const [formEducation, setFormEducation]= useState(0);


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

  const addForm = (setState, form) => {
    setState( form +1);
    console.log(form)
  }

 const formBuilder = (num, NewForm, setState, form ) =>{
   for (let i = 0; i < num; i++) {
     return <NewForm handleInputChange={handleInputChange} datos={datos} addForm={addForm} setState={setState} form={form}/>
   }
 }
 
 useEffect(() => {
   formBuilder(2, Experience,setFormExperience,formExperience)
 }, [])

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
        <Experience handleInputChange={handleInputChange} datos={datos} addForm={addForm}
        setState={setFormExperience} form={formExperience} />
        <h1 className={styles.title}>Education</h1>
        <Education handleInputChange={handleInputChange} datos={datos.educations[0]} addForm={addForm} setState={setFormEducation} form={formEducation}/>
      </div>
      <CV
        datos={datos}
        chipsArr={datos} />
    </>
  );
};

export default App;