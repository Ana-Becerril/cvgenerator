import React from 'react';
import styles from '../App.module.css'

const Experience = ({ handleInputChange, experiences, setState , deleteForm, addForm }) => {
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
              key={"position" + arrayChild.id}

            />
              <input

                type="text"
                placeholder="Company"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="company"
                value={arrayChild.company}
                key={"company" + arrayChild.id}


              />
              <input

                type="number"
                placeholder="From"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="from"
                value={arrayChild.from}
                key={"from" + arrayChild.id}


              />
              <input

                type="number"
                placeholder="To"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="to"
                value={arrayChild.to}
                key={"to" + arrayChild.id}


              />
              <input
              
                type="text"
                placeholder="Main activity/activities"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="activity"
                value={arrayChild.activity}
                key={"activity" + arrayChild.id}


              />
              <input
                type="text"
                placeholder="Main achievement/achievements"
                onChange={(e) => handleInputChange(e, experiences, i)}
                name="achievement"
                value={arrayChild.achievement}
                key={"achievement" + arrayChild.id}


              />
              <button 
            onClick={ ()=>addForm(setState, experiences,{
              id:'',
              position: '',
              company: '',
              from: '',
              to: '',
              activity: '',
              achievement: '',
            },
            i )} 
            type="button">
                Add
              </button>
              <button 
            onClick={()=> deleteForm (setState, experiences, arrayChild.id ) }
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

export default Experience;