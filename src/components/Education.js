import React from 'react';
import styles from '../App.module.css'

const Education = ({ handleInputChange, educations, addForm, deleteForm }) => {
  console.log(educations)
  return (
    <>
      <div className={styles.educationContainer}>
        <form onSubmit={e => e.preventDefault}>
          {educations.map((arrayChild, i) => {
            return (<><input

              type="text"
              placeholder="Degree / Certificates"
              onChange={(e) => handleInputChange(e, educations, i)}
              name="degree"
              value={arrayChild.degree}
              key={"degree" + i}
            />
              <input

                type="text"
                placeholder="University / Institution"
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
              <input

                type="text"
                placeholder="City"
                onChange={(e) => handleInputChange(e, educations, i)}
                name="city"
                value={arrayChild.city}
                key={"city" + i}
              />
              <button onClick={()=>addForm()} type="button">
                Add
              </button>
              <button onClick={deleteForm} type="button">
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
