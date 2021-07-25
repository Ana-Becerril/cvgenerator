import React from 'react';
import styles from '../App.module.css'

const Experience = ({handleInputChange, experiences, incrementForm, setState, form, Component, datos, addForm, section}) => {

return(
    <>
         <div className={styles.experienceContainer}>
         <form onSubmit={e => e.preventDefault}>
         {experiences.map((arrayChild)=> {
 return (<><input
   type="text"
   placeholder="Position"
   onChange={handleInputChange}
   name="position"
   datos={arrayChild.position}
 
 />
 <input
   type="text"
   placeholder="Company"
   onChange={handleInputChange}
   name="company"
   datos={arrayChild.company}

 />
 <input
   type="text"
   placeholder="From"
   onChange={handleInputChange}
   name="from"
   datos={arrayChild.from}

 />
 <input
   type="text"
   placeholder="To"
   onChange={handleInputChange}
   name="to"
   datos={arrayChild.to}

 />
 <input
   type="text"
   placeholder="Main activity/activities"
   onChange={handleInputChange}
   name="activity"
   datos={arrayChild.activity}

 />
 <input
   type="text"
   placeholder="Main achievement/achievements"
   onChange={handleInputChange}
   name="achievement"
   datos={arrayChild.achievement}

 />
 <button onClick={addForm} type="button">
   Add
 </button>
 <button>
   Delete
 </button>
</>)
           })}
           </form>
          </div>
    </>

)};

export default Experience;