import React from 'react';
import styles from '../App.module.css'

const Experience = ({handleInputChange, datos, addForm, setState, form}) => {

return(
    <>
         <div className={styles.experienceContainer}>
          <form onSubmit={e => e.preventDefault}>
            <input
              type="text"
              placeholder="Position"
              onChange={handleInputChange}
              name="position"
              datos={datos.position}
            
            />
            <input
              type="text"
              placeholder="Company"
              onChange={handleInputChange}
              name="company"
              datos={datos.company}

            />
            <input
              type="text"
              placeholder="From"
              onChange={handleInputChange}
              name="from"
              datos={datos.from}

            />
            <input
              type="text"
              placeholder="To"
              onChange={handleInputChange}
              name="to"
              datos={datos.to}

            />
            <input
              type="text"
              placeholder="Main activity/activities"
              onChange={handleInputChange}
              name="activity"
              datos={datos.activity}

            />
            <input
              type="text"
              placeholder="Main achievement/achievements"
              onChange={handleInputChange}
              name="achievement"
              datos={datos.achievement}

            />
            <button onClick={() => addForm(setState, form)} type="button">
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