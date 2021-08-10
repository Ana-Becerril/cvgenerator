import React, { useState, useRef } from 'react';
import CV from './containers/CV';
import Header from './containers/Header'
import styles from './App.module.css'
import Chips from 'react-chips'
import Personal from './components/Personal';
import Experience from './components/Experience'
import Education from './components/Education'
import {useReactToPrint}  from 'react-to-print'


const App = () => {

  const [datos, setDatos] = useState({
    picture:'',
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
    id:"",
    position: '',
    company: '',
    from: '',
    to: '',
    activity: '',
    achievement: '',
  }])

  const [educations, setEducations] = useState(
    [{
    id:"",
    university: '',
    degree: '',
    subject: '',
    fromEducation: '',
    toEducation: '',
    city:'',
  }])

  const [files, setFiles] = useState("");

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
  }

  const handleInputChangeEducations = (event, educations, educationChild) => {
    let newArr = [...educations];
    newArr[educationChild][event.target.name] = event.target.value
    setEducations(newArr);
  }

  const handleChipChange = (chips) => {
    setChips(chips);
    setDatos({
      ...datos,
      skills: chips
    });
  };

   const addForm = (setState, form, section, id) => {
     section.id = id;
     setState([...form, section])
     console.log(id)
   }


  const deleteForm = (setState, form, i) => {
    const arr = form.filter(element => element.id !== i);
      for (let index = 1; index < arr.length; index++) {
        const section = arr[index];
       section.id = index;
    }
    setState(arr);
    console.log(form)
  }

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current
  });


  return (
    <>
      <Header />
      <div className={styles.formContainer}>
        <Personal 
        handleInputChange={(e) => handleInputChange(e, setDatos, datos)} 
        datos={datos}
        setFiles={setFiles}
         />
        <div className={styles.skillsContainer}>
          <form onSubmit={e => e.preventDefault}>
            <h1>Soft Skills</h1>
            <Chips
              type="text"
              placeholder="Skills"
              onChange={handleChipChange}
              name="skills"
              value={chipsArr}
              suggestions={["Active Listening", "Communication", "Computer Skills", "Customer Service", "Interpersonal Skills", "Leadership", "Management Skills", "Problem-Solving", "Time Management", "Transferable Skills", "Reliability", "Empathy", "Flexibility", "Ability to teach and mentor", "Team building", "Attention to detail", "Goal setting"]}
            />
          </form>
        </div>
        <h1 className={styles.title}>Experience</h1>
        <Experience
          handleInputChange={handleInputChangeExperiences}
          experiences={experiences}
          setState={setExperiences}
          addForm={addForm}
          deleteForm={deleteForm}
        />
        <h1 className={styles.title}>Education/Certificates</h1>
        <Education
          handleInputChange={handleInputChangeEducations}
          educations={educations}
          setState={setEducations}
          addForm={addForm}
          deleteForm={deleteForm}
        />
        <button
        type="button"
        onClick={handlePrint}
        className={styles.btnPrint}
        >
        {" "}
        Print Resume{" "}
      </button>
      </div>
      <div>
      <CV
        datos={datos}
        chipsArr={datos}
        experiences={experiences}
        educations={educations}
        file={files}
        ref={componentRef}
      />
      </div>


    </>
  );
};

export default App;