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
    skills: '',
  })

  const [experiences, setExperiences] = useState(
    [{
    position: '',
    company: '',
    from: '',
    to: '',
    activity: '',
    achievement: '',
  }])

  const [educations, setEducations] = useState([{
    university: '',
    cityEducation: '',
    degree: '',
    subject: '',
    fromEducation: '',
    toEducation: '',
  }])

  const [chipsArr, setChips] = useState([]);


  const handleInputChange = (event, setState, items) => {
    setState({
       ...items,
      [event.target.name]: event.target.value
    })
  }

  const handleInputChangeExperiences = (event, experiences, experienceChild) => {
    let newArr = [...experiences];
    newArr[experienceChild][event.target.name] = event.target.value
    setExperiences(newArr);
    console.log(event.target)
    console.log(event.target.value)
    console.log(experiences)
  }

  const handleInputChangeEducations = (event, educations, educationChild) => {
    let newArr = [...educations];
    newArr[educationChild][event.target.name] = event.target.value
    setEducations(newArr);
    console.log(event.target)
    console.log(event.target.value)
    console.log(experiences)
  }

  const handleChipChange = (chips) => {
    setChips(chips);
    setDatos({
      ...datos,
      skills: chips
    });
  };

  const addForm = (setState, form, section) => {
    setState([...form, section])
    console.log(form)
  }

  return (
    <>
      <Header />
      <div className={styles.formContainer}>
        <Personal handleInputChange={(e) => handleInputChange(e, setDatos, datos)} 
        datos={datos} />
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
        <Experience
          handleInputChange={handleInputChangeExperiences}
          experiences={experiences}
          setState={setExperiences}
          addForm={() => addForm(setExperiences, experiences, {
            position: '',
            company: '',
            from: '',
            to: '',
            activity: '',
            achievement: '',
          })} />
        <h1 className={styles.title}>Education</h1>
        <Education
          handleInputChange={handleInputChangeEducations}
          educations={educations}
          setState={setEducations}
          addForm={() => addForm(setEducations, educations, {
            university: '',
            cityEducation: '',
            degree: '',
            subject: '',
            fromEducation: '',
            toEducation: '',
          })} />
      </div>
      <CV
        datos={datos}
        chipsArr={datos}
        experiences={experiences}
        educations={educations} />
    </>
  );
};

export default App;