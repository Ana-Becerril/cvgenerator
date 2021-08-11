import React from 'react';
import styles from '../App.module.css'

const Education = ({ handleInputChange, educations, setState , deleteForm, addForm }) => {

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
              key={"degree" + arrayChild.id}
            />
              <input

                type="text"
                placeholder="University / Institution"
                onChange={(e) => handleInputChange(e, educations, i)}
                name="university"
                value={arrayChild.university}
                key={"university" + arrayChild.id}
              />
              <input

                type="number"
                placeholder="From"
                onChange={(e) => handleInputChange(e, educations, i)}
                name="fromEducation"
                value={arrayChild.fromEducation}
                key={"fromEducation" + arrayChild.id}
              />
              <input

                type="number "
                placeholder="To"
                onChange={(e) => handleInputChange(e, educations, i)}
                name="toEducation"
                value={arrayChild.toEducation}
                key={"toEducation" + arrayChild.id}
              />
              <input

                type="text"
                placeholder="City"
                onChange={(e) => handleInputChange(e, educations, i)}
                name="city"
                value={arrayChild.city}
                key={"city" + arrayChild.id}
              />
              <button
                onClick={
                  () => addForm(setState, educations, {
                    id: 0,
                    university: '',
                    degree: '',
                    subject: '',
                    fromEducation: '',
                    toEducation: '',
                    city: '',
                  },
                    i)
              }
              type="button">
                Add
              </button>
              <button onClick={()=> deleteForm (setState, educations, arrayChild.id )} 
              type="button">
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
