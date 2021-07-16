import React, { useState } from 'react';
import CV from './containers/CV';
import Header from './containers/Header'
import styles from './App.module.css'
import Chips from 'react-chips'
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
    position: '',
    company: '',
    from: '',
    to: '',
    activity: '',
    achievement: '',
    university: '',
    cityEducation: '',
    degree: '',
    subject: '',
    fromEducation: '',
    toEducation: ''
  })
  const [chipsArr, setChips] = useState([]);

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


  return (
    <>
      <Header />
      <div className={styles.formContainer}>
        <div className={styles.headerNameContainer}>
          <form onSubmit={e => e.preventDefault}>
            <h1>Personal Information</h1>
            <input
              type="text"
              placeholder="First Name"
              onChange={handleInputChange}
              name="firstName"
            />
            <input
              type="text"
              placeholder="Last Name"
              onChange={handleInputChange}
              name="lastName"

            />
            <input
              type="text"
              placeholder="Role"
              onChange={handleInputChange}
              name="role"

            />
            <input
              type="text"
              placeholder="Address"
              onChange={handleInputChange}
              name="address"

            />
            <input
              type="email"
              placeholder="Email"
              onChange={handleInputChange}
              name="email"

            />
            <input
              type="text"
              placeholder="Phone"
              onChange={handleInputChange}
              name="phone"

            />
            <input
              type="text"
              placeholder="LinkedIn"
              onChange={handleInputChange}
              name="linkedin"
            />
          </form>
        </div>

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
        <Experience handleInputChange={handleInputChange} datos={datos} />
        <Education handleInputChange={handleInputChange} datos={datos} />
      </div>
      <CV
        datos={datos}
        chipsArr={datos} />
    </>
  );
};

export default App;