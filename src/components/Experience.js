import React from 'react';
import styles from '../App.module.css'

const Experience = ({handleInputChange, experiences,  addForm}) => {
console.log(experiences)
return(
    <>
         <div className={styles.experienceContainer}>
         <form onSubmit={e => e.preventDefault}>
         {experiences.map((arrayChild, i)=> {
 return (<><input
   type="text"
   placeholder="Position"
   onChange={(e)=>handleInputChange(e,experiences, experiences[i])}
   name="position"
   value={arrayChild.position}
   key={i}
 
 />
 <input
   type="text"
   placeholder="Company"
   onChange={handleInputChange}
   name="company"
   value={arrayChild.company}
   key={i}


 />
 <input
   type="text"
   placeholder="From"
   onChange={handleInputChange}
   name="from"
   value={arrayChild.from}
      key={i}


 />
 <input
   type="text"
   placeholder="To"
   onChange={handleInputChange}
   name="to"
   value={arrayChild.to}
      key={i}


 />
 <input
   type="text"
   placeholder="Main activity/activities"
   onChange={handleInputChange}
   name="activity"
   value={arrayChild.activity}
   key={i}


 />
 <input
   type="text"
   placeholder="Main achievement/achievements"
   onChange={handleInputChange}
   name="achievement"
   value={arrayChild.achievement}
      key={i}


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