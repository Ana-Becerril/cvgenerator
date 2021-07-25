import React from 'react';
import styles from '../App.module.css'

const Education = ({handleInputChange, educations, incrementForm, setState, form, Component, datos, addForm, section}) => {

  return (
    <>
       <div className={styles.educationContainer}>
          <form onSubmit={e => e.preventDefault}>
            <input
              type="text"
              placeholder="Degree"
              onChange={handleInputChange}
              name="degree"
              datos={educations.degree}
            />
            <input
              type="text"
              placeholder="University Name"
              onChange={handleInputChange}
              name="university"
              datos={educations.university}
            />
            <input
              type="text"
              placeholder="From"
              onChange={handleInputChange}
              name="fromEducation"
              datos={educations.from}
            />
            <input
              type="text"
              placeholder="To"
              onChange={handleInputChange}
              name="toEducation"
              datos={educations.to}
            />
            <button onClick={() => incrementForm (setState, form, Component, datos)} {...()=> addForm (setState, form, section)} type="button">
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
