import React, { useState } from 'react';
import CV from './containers/CV';
import Header from './containers/Header'
import styles from './App.module.css'

const App = () => {
  const [datos, setDatos] = useState({
    firstname: '',
    lastname: '',
    role: '',
    address: '',
    email: '',
    phone: '',
    description:'',
    position: '',
    company: '',
    city: '',
    from: '',
    to: '',
    university: '',
    cityEducation: '',
    degree: '',
    subject: '',
    fromEducatiom: '',
    toEducation: ''
  })

  const handleInputChange = (event) => {
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    })
  }

  const submitDatos = (event) => {
    event.preventDefault()
    console.log('enviando datos...')
}

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
           <textarea 
            type="text"
            placeholder="Description"
            onChange={handleInputChange}
            name="description"

          />
        </form>

      </div>
      <div className={styles.experienceContainer}>
        <form onSubmit={e => e.preventDefault}>

          <h1>Experience</h1>
          <input
            type="text"
            placeholder="Position"
            onChange={handleInputChange}
            name="position"
          />
          <input
            type="text"
            placeholder="Company"
            onChange={handleInputChange}
            name="company"
          />
          <input
            type="text"
            placeholder="City"
            onChange={handleInputChange}
            name="city"
          />
          <input
            type="text"
            placeholder="From"
            onChange={handleInputChange}
            name="from"
          />
          <input
            type="text"
            placeholder="To"
            onChange={handleInputChange}
            name="to"
          />
          <button type="">
            Add
          </button>
          <button>
            Delete
          </button>

        </form>
      </div>
      <div className={styles.educationContainer}>
        <form onSubmit={e => e.preventDefault}>

          <h1>Education</h1>

          <input
            type="text"
            placeholder="University Name"
            onChange={handleInputChange}
            name="university" />
          <input
            type="text"
            placeholder="City"
            onChange={handleInputChange}
            name="cityEducation"
          />
          <input
            type="text"
            placeholder="Degree"
            onChange={handleInputChange}
            name="degree"
          />
          <input
            type="text"
            placeholder="Subject"
            onChange={handleInputChange}
            name="subject"
          />
          <input
            type="text"
            placeholder="From"
            onChange={handleInputChange}
            name="fromEducatiom"
          />
          <input
            type="text"
            placeholder="To"
            onChange={handleInputChange}
            name="toEducation"
          />

          <button>
            Add
          </button>
          <button>
            Delete
          </button>

        </form>

      </div>
      </div>
      <CV
        datos={datos} />
    </>
  );
};

export default App;