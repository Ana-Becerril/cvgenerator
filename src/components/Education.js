import React from 'react';
import styles from '../App.module.css'

const Education = ({ handleInputChange, educations, addForm }) => {
  console.log(educations)
  return (
    <>
      <div className={styles.educationContainer}>
        <form onSubmit={e => e.preventDefault}>
          {educations.map((arrayChild, i) => {
            return (<><input

              type="text"
              placeholder="Degree"
              onChange={(e) => handleInputChange(e, educations, i)}
              name="degree"
              value={arrayChild.degree}
              key={"degree" + i}
            />
              <input

                type="text"
                placeholder="University Name"
                onChange={(e) => handleInputChange(e, educations, i)}
                name="university"
                value={arrayChild.university}
                key={"university" + i}
              />
              <input

                type="text"
                placeholder="From"
                onChange={(e) => handleInputChange(e, educations, i)}
                name="fromEducation"
                value={arrayChild.fromEducation}
                key={"fromEducation" + i}
              />
              <input

                type="text"
                placeholder="To"
                onChange={(e) => handleInputChange(e, educations, i)}
                name="toEducation"
                value={arrayChild.toEducation}
                key={"toEducation" + i}
              />
              <button onClick={addForm} type="button">
                Add
              </button>
              <button type="button"> 
                Delete
              </button>
            </>)
          })}
        </form>

      </div>
    </>
  )
};

export default Education;
