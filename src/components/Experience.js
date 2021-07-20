import React from 'react';
import styles from '../App.module.css'

const Experience = ({handleInputChange, experiences, incrementForm, setState, form, Component}) => {

return(
    <>
         <div className={styles.experienceContainer}>
          <form onSubmit={e => e.preventDefault}>
            <input
              type="text"
              placeholder="Position"
              onChange={handleInputChange}
              name="position"
              datos={experiences.position}
            
            />
            <input
              type="text"
              placeholder="Company"
              onChange={handleInputChange}
              name="company"
              datos={experiences.company}

            />
            <input
              type="text"
              placeholder="From"
              onChange={handleInputChange}
              name="from"
              datos={experiences.from}

            />
            <input
              type="text"
              placeholder="To"
              onChange={handleInputChange}
              name="to"
              datos={experiences.to}

            />
            <input
              type="text"
              placeholder="Main activity/activities"
              onChange={handleInputChange}
              name="activity"
              datos={experiences.activity}

            />
            <input
              type="text"
              placeholder="Main achievement/achievements"
              onChange={handleInputChange}
              name="achievement"
              datos={experiences.achievement}

            />
            <button onClick={() => incrementForm(setState, form, Component)} type="button">
              Add
            </button>
            <button>
              Delete
            </button>
          </form>
          </div>
    </>

)};

export default Experience;