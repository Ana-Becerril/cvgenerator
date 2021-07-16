import React from 'react';
import styles from '../App.module.css'

const Education = ({handleInputChange, datos}) => {

  return (
    <>
       <div className={styles.educationContainer}>
          <form onSubmit={e => e.preventDefault}>
            <h1>Education</h1>
            <input
              type="text"
              placeholder="Degree"
              onChange={handleInputChange}
              name="degree"
              datos={datos.degree}
            />
            <input
              type="text"
              placeholder="University Name"
              onChange={handleInputChange}
              name="university"
              datos={datos.university}
            />
            <input
              type="text"
              placeholder="From"
              onChange={handleInputChange}
              name="fromEducation"
              datos={datos.from}
            />
            <input
              type="text"
              placeholder="To"
              onChange={handleInputChange}
              name="toEducation"
              datos={datos.to}
            />
            <button>
              Add
            </button>
            <button>
              Delete
            </button>
            </form>
            
        </div>
    </>
  )

};

export default Education;
