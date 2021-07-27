import React from 'react';
import styles from '../App.module.css'

const Experience = ({ handleInputChange, experiences, addForm, deleteForm }) => {
  console.log(experiences)
  return (
    <>
      <div className={styles.experienceContainer}>
        <form onSubmit={e => e.preventDefault}>
          {experiences.map((arrayChild, i) => {
            return (<><input

              type="text"
              placeholder="Position"
              onChange={(e) => handleInputChange(e, experiences, i)}
              name="position"
              value={arrayChild.position}
              key={"position" + i}

            />
              <input

                type="text"
                placeholder="Company"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="company"
                value={arrayChild.company}
                key={"company" + i}


              />
              <input

                type="text"
                placeholder="From"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="from"
                value={arrayChild.from}
                key={"from" + i}


              />
              <input

                type="text"
                placeholder="To"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="to"
                value={arrayChild.to}
                key={"to" + i}


              />
              <input
              
                type="text"
                placeholder="Main activity/activities"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="activity"
                value={arrayChild.activity}
                key={"activity" + i}


              />
              <input
                type="text"
                placeholder="Main achievement/achievements"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="achievement"
                value={arrayChild.achievement}
                key={"achievement" + i}


              />
              <button onClick={addForm} type="button">
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

export default Experience;